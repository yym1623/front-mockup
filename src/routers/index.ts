import { createWebHistory, createRouter } from 'vue-router'


import DashBoard from "@/components/Dashboard.vue"

import SignIn from "@/components/Signin.vue"
import SignUp from '@/components/Signup.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/dashboard', component: DashBoard, name: 'DashBoard' },
    { path: '/signin', component: SignIn, name: 'SignIn' },
    { path: '/signup', component: SignUp, name: 'SignUp' }
  ],

  // scrollBehavior(to, from, savedPosition) {
  //   return { top : 0, behavior: 'smooth' }
  // },
})

export default router