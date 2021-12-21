import Home from '@/views/Home/Home'
import Schedule from '@/views/Home/Schedule'
import Attendance from '@/views/Home/Attendance'
import Main from '@/views/Main'
import { createRouter, createWebHistory } from 'vue-router'
import MyCurriculum from '@/views/MyCurriculum'
import Grades from '@/views/Grades'
import Transcript from '@/views/Transcript'
import CourseRegistration from '@/views/CourseRegistration'
import Wishlist from '@/views/Wishlist'
import Withdrawals from '@/views/Withdrawals'

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
    },
    {
      path: '/Transcript',
      name: 'Transcript',
      component: Transcript
    },
    {
      path: '/CourseRegistration',
      name: 'CourseRegistration',
      component: CourseRegistration
    },
    {
      path: '/Wishlist',
      name: 'Wishlist',
      component: Wishlist
    },
    {
      path: '/Withdrawals',
      name: 'Withdrawals',
      component: Withdrawals
    }
  ]
})

export default router
