import type { App } from 'vue'
import { 
  createRouter,
   createWebHashHistory,
    RouteRecordRaw 
} from 'vue-router'
import Layout from '@/layouts/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'home-2-line',
      breadcrumbHidden: true,
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '首页',
          icon: 'home-2-line',
          noClosable: true,
        },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function setupRouter(app: App<Element>) {
  app.use(router)
  return router
}

export default router
