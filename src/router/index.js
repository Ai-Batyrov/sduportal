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
import ConsentRequests from '@/views/ConsentRequests'
import OnlineServices from '@/views/OnlineServices'
import Questionnaires from '@/views/Questionnaires'
import SystemCalendar from '@/views/SystemCalendar'
import ProfileSettings from '@/views/ProfileSettings'

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
    },
    {
      path: '/ConsentRequests',
      name: 'ConsentRequests',
      component: ConsentRequests
    },
    {
      path: '/OnlineServices',
      name: 'OnlineServices',
      component: OnlineServices
    },
    {
      path: '/Questionnaires',
      name: 'Questionnaires',
      component: Questionnaires
    },
    {
      path: '/SystemCalendar',
      name: 'SystemCalendar',
      component: SystemCalendar
    },
    {
      path: '/ProfileSettings',
      name: 'ProfileSettings',
      component: ProfileSettings
    }
  ]
})

export default router
