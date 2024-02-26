import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import { RouterView } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'home',
    component: AppLayout,
    redirect: '/mainMsg',
    children: [
      {
        path: "/mainMsg",
        name: "mainMsg",
        component: () => import("@/views/homeView/mainMsg.vue")
      },
      {
        path: "/home",
        name: "home",
        component:RouterView,
        children: [
          {
            path: "children1",
            name: "children1",
            component: () => import("@/views/homeView/children1.vue")
          },
          {
            path: "children2",
            name: "children2",
            component: () => import("@/views/homeView/children2.vue")
          }
        ]
      },
      {
        path: '/test2',
        name: 'test2',
        component:  () => import('@/views/test2.vue'),
      },
      {
        path: '/setting',
        name: "setting",
        redirect: '/personSet',
        children: [
          {
            path: "/personSet",
            name: "personSet",
            component: () =>import("@/views/setting/personSet.vue")
          },
          {
            path: "/deptSet",
            name: "deptSet",
            component: () =>import("@/views/setting/deptSet.vue")
          }
        ]
      }
    ]
  },
  {
    path: "/:catchAll(.*)", // 不识别的path自动匹配404
    redirect: '/home',
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
