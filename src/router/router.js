import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/pagesFront/home'
import contact from '@/components/pagesFront/contact'
import photos from '@/components/pagesFront/photos'
import offres from '@/components/pagesFront/offres'

import cgv from '@/components/pagesFront/cgv'
import mentionsLegales from '@/components/pagesFront/mentionsLegales'
import partenariats from '@/components/pagesFront/partenariats'

import signup from '@/components/pagesFront/signup'
import signin from '@/components/pagesFront/signin'

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
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    }
  ]
})

export default router
