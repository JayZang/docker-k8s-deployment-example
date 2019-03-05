import Vue from 'vue'
import Router from 'vue-router'
import OtherPage from '@/components/OtherPage'
import FibHome from '@/components/FibHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'FibHome',
    component: FibHome
  }, {
    path: '/:any',
    name: 'OtherPage',
    component: OtherPage
  }]
})
