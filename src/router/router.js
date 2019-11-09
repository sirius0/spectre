import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/pages/home'
import contact from '@/components/pages/contact'
import photos from '@/components/pages/photos'
import offres from '@/components/pages/offres'

import cgv from '@/components/pages/cgv'
import mentionsLegales from '@/components/pages/mentionsLegales'
import partenariats from '@/components/pages/partenariats'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/photos',
      name: 'photos',
      component: photos
    },
    {
      path: '/offres',
      name: 'offres',
      component: offres
    },
    {
      path: '/mentionsLegales',
      name: 'mentionsLegales',
      component: mentionsLegales
    },
    {
      path: '/partenariats',
      name: 'partenariats',
      component: partenariats
    },
    {
      path: '/cgv',
      name: 'cgv',
      component: cgv
    }
  ]
})

export default router
