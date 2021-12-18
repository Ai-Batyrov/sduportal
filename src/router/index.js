import Home from '@/views/Home/Home'
import Schedule from '@/views/Home/Schedule'
import Main from '@/views/Main'
import { createRouter, createWebHistory } from 'vue-router'
import MyCurriculum from '@/views/MyCurriculum'
import 'animate.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/MyCurriculum',
      name: 'MyCurriculum',
      component: MyCurriculum
    }
  ]
})

export default router
