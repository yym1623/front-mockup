import { createWebHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    // { path: '/DashBoard', component: DashBoard, name: 'DashBoard' }
  ],

  // scrollBehavior(to, from, savedPosition) {
  //   return { top : 0, behavior: 'smooth' }
  // },
})

export default router