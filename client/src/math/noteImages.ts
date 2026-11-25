const imageStore = 'images'
const imageId = '[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}'
const imageReference = new RegExp(`^note-image:(${imageId})$`)
const supportedTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/gif']
export const noteImageLimit = 12 * 1024 * 1024
export const noteBackupLimit = 100 * 1024 * 1024

export function noteImageId(href: string): string | undefined {
  return href.match(imageReference)?.[1]
}

export function noteImageIds(notes: Iterable<string>): string[] {
  const references = new RegExp(`!\\[[^\\]\\n]*\\]\\(note-image:(${imageId})\\)`, 'g')
  return [...new Set(Array.from(notes).flatMap(note => [...note.matchAll(references)].map(match => match[1])))]
}

export function supportedNoteImage(blob: Blob): boolean {
  return supportedTypes.includes(blob.type) && blob.size > 0 && blob.size <= noteImageLimit
}

async function useImageStore<T>(mode: IDBTransactionMode, action: (store: IDBObjectStore) => T): Promise<T> {
  const db = await new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('math2-practice-note-images', 1)
    request.onupgradeneeded = () => request.result.createObjectStore(imageStore)
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
  try {
    return await new Promise<T>((resolve, reject) => {
      const transaction = db.transaction(imageStore, mode)
      transaction.onerror = () => reject(transaction.error)
      transaction.onabort = () => reject(transaction.error)
      const result = action(transaction.objectStore(imageStore))
      transaction.oncomplete = () => resolve(result)
    })
  } finally {
    db.close()
  }
}

export function readNoteImages(ids: string[]): Promise<Map<string, Blob>> {
  if (!ids.length) return Promise.resolve(new Map())
  return useImageStore('readonly', store => {
    const images = new Map<string, Blob>()
    for (const id of ids) {
      const request = store.get(id)
      request.onsuccess = () => { if (request.result instanceof Blob) images.set(id, request.result) }
    }
    return images
  })
}

export async function saveNoteImages(images: Map<string, Blob>): Promise<void> {
  if (!images.size) return
  await useImageStore('readwrite', store => {
    for (const [id, image] of images) {
      const existing = store.getKey(id)
      existing.onsuccess = () => { if (existing.result === undefined) store.add(image, id) }
    }
  })
}

export async function backupNoteImages(notes: Iterable<string>): Promise<Record<string, string> | undefined> {
  const ids = noteImageIds(notes)
  if (!ids.length) return
  const stored = await readNoteImages(ids)
  const entries = await Promise.all([...stored].map(([id, blob]) => new Promise<[string, string]>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve([id, String(reader.result)])
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(blob)
  })))
  return Object.fromEntries(entries)
}

export async function restoreNoteImages(backup: unknown, notes: Iterable<string>): Promise<void> {
  if (backup === undefined) return
  if (!backup || typeof backup !== 'object' || Array.isArray(backup)) throw new Error('Invalid image backup')
  const entries = backup as Record<string, unknown>
  const images = new Map<string, Blob>()
  for (const id of noteImageIds(notes)) {
    if (!Object.hasOwn(entries, id)) continue
    const data = entries[id]
    const match = typeof data === 'string' && data.match(/^data:(image\/(?:png|jpeg|webp|gif));base64,([A-Za-z0-9+/]+={0,2})$/)
    if (!match || match[2].length > Math.ceil(noteImageLimit / 3) * 4) throw new Error('Invalid image backup')
    const bytes = Uint8Array.from(atob(match[2]), character => character.charCodeAt(0))
    const blob = new Blob([bytes], { type: match[1] })
    if (!supportedNoteImage(blob)) throw new Error('Invalid image backup')
    images.set(id, blob)
  }
  await saveNoteImages(images)
}
