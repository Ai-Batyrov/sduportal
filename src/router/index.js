import Home from '@/views/Home/Home'
import Schedule from '@/views/Home/Schedule'
import Attendance from '@/views/Home/Attendance'
import Main from '@/views/Main'
import { createRouter, createWebHistory } from 'vue-router'
import MyCurriculum from '@/views/MyCurriculum'
import Grades from '@/views/Grades'

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
      path: '/Attendance',
      name: 'Attendance',
      component: Attendance
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
    },
    {
      path: '/Grades',
      name: 'Grades',
      component: Grades
    }
  ]
})

export default router
