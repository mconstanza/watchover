import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/Profile'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/profile/:platform/:region/:battletag/',
      name: 'Profile',
      component: Profile,
      props: true
    }
  ]
})
