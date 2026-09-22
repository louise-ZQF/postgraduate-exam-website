import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'katex/dist/katex.min.css'
import './styles/main.css'

createApp(App).use(router).mount('#app')

try {
  window.sessionStorage.removeItem('math2-stale-assets-reload')
} catch {
  // Storage may be unavailable in private or embedded browsing contexts.
}
