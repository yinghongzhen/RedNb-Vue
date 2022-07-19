import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(Antd)
app.use(ElementPlus)

setupStore(app)
setupRouter(app)
    .isReady()
    .then(() => app.mount('#app'))