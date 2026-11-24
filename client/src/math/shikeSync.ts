import { ref } from 'vue'

const origin = import.meta.env.DEV ? 'http://127.0.0.1:5173' : 'https://shike-study-planner.louisedell2004.chatgpt.site'
const protocol = 'shike-math-sync-v1'
const sessionKey = 'math2-shike-sync'
const instruction = '连接后，当前收藏和新收藏的单条公式会自动添加到拾课。'
const connectedMessage = '保持拾课标签页打开，新收藏会自动同步。'
export const shikeLinked = ref(false)
export const shikeSyncStatus = ref(instruction)

let popup: Window | null = null
let key = ''
let watching = false
let retryAt = 0
let connectTimer: number | undefined
let sent = new Set<string>()
let pending: { id: string; ids: string[]; timeout: number } | null = null

function setKey(value: string) {
  key = value
  try {
    if (value) sessionStorage.setItem(sessionKey, value)
    else sessionStorage.removeItem(sessionKey)
  } catch { /* 当前标签页仍可同步。 */ }
}

function clearPending() {
  if (pending) window.clearTimeout(pending.timeout)
  pending = null
}

function connectionLost() {
  clearPending()
  popup = null
  shikeLinked.value = false
  shikeSyncStatus.value = '拾课同步标签页已关闭。重新连接后会补传当前收藏。'
}

async function sendFavorites() {
  if (!popup || !shikeLinked.value || pending || Date.now() < retryAt) return
  if (popup.closed) { connectionLost(); return }
  const target = popup
  const { readFavorites } = await import('./favorites')
  if (popup !== target || pending || !shikeLinked.value) return
  const formulas = readFavorites().filter(item => item.kind === 'formula' && item.latex?.trim() && !sent.has(item.targetId))
    .slice(0, 20).map(item => ({
      id: item.targetId,
      chapterId: item.chapterId,
      title: item.title.replace(/\\[()]|\$/g, '').trim().slice(0, 200) || '待背公式',
      latex: item.latex,
      context: item.context || item.summary,
    }))
  if (!formulas.length) return
  const id = crypto.randomUUID()
  pending = {
    id,
    ids: formulas.map(item => item.id),
    timeout: window.setTimeout(() => {
      clearPending()
      if (popup?.closed) connectionLost()
      else shikeSyncStatus.value = '拾课暂未响应，重新连接后可继续同步。'
    }, 20_000),
  }
  shikeSyncStatus.value = '正在同步待背公式…'
  target.postMessage({ protocol, key, type: 'save', requestId: id, formulas }, origin)
}

function watchFavorites() {
  if (watching) return
  watching = true
  void import('./favorites').then(({ FAVORITES_CHANGED_EVENT }) => {
    const refresh = () => void sendFavorites()
    window.addEventListener(FAVORITES_CHANGED_EVENT, refresh)
    window.addEventListener('storage', refresh)
    window.addEventListener('online', refresh)
  })
}

function receive(event: MessageEvent) {
  const message = event.data
  if (event.origin !== origin || !event.source || (popup && event.source !== popup) || !key
    || message?.protocol !== protocol || message.key !== key) return
  if (message.type === 'ready') {
    popup = event.source as Window
    if (!shikeLinked.value) {
      window.clearTimeout(connectTimer)
      shikeLinked.value = true
      shikeSyncStatus.value = connectedMessage
      popup.postMessage({ protocol, key, type: 'hello' }, origin)
    }
    void sendFavorites()
    return
  }
  if (!pending || message.requestId !== pending.id) return
  if (message.type === 'saved') {
    for (const id of pending.ids) sent.add(id)
    clearPending()
    shikeSyncStatus.value = message.added > 0 ? `已同步到拾课。${connectedMessage}` : connectedMessage
    void sendFavorites()
  } else if (message.type === 'failed') {
    clearPending()
    retryAt = Date.now() + 15_000
    shikeSyncStatus.value = '公式暂未同步。请检查拾课登录状态，打开的标签页会继续重试。'
  }
}

function waitForConnection() {
  window.clearTimeout(connectTimer)
  shikeSyncStatus.value = '等待拾课连接，请在新标签页完成登录。'
  connectTimer = window.setTimeout(() => {
    if (!shikeLinked.value) shikeSyncStatus.value = '请保持数学二与拾课同步标签页打开，登录后可重新连接。'
  }, 15_000)
}

export function startShikeSync() {
  window.addEventListener('message', receive)
  try { key = sessionStorage.getItem(sessionKey) || '' } catch { /* 当前标签页仍可同步。 */ }
  if (key) {
    watchFavorites()
    waitForConnection()
  }
  window.addEventListener('focus', () => {
    if (popup?.closed) connectionLost()
  })
}

export function connectShike() {
  const nextKey = crypto.randomUUID()
  const target = window.open(origin + '/math-formula-sync?key=' + nextKey, 'shike-math-formula-sync')
  if (!target) {
    shikeSyncStatus.value = '浏览器拦截了新标签页。允许打开后，再点连接拾课。'
    return
  }
  clearPending()
  popup = target
  setKey(nextKey)
  sent = new Set()
  retryAt = 0
  shikeLinked.value = false
  watchFavorites()
  waitForConnection()
}

export function disconnectShike() {
  window.clearTimeout(connectTimer)
  clearPending()
  popup?.close()
  popup = null
  setKey('')
  sent.clear()
  shikeLinked.value = false
  shikeSyncStatus.value = instruction
}
