import { createPinia } from 'pinia'
import { App } from 'vue'

const pinia = createPinia()

export function setupStore(app: App<Element>) {
  app.use(pinia)
}

export default pinia