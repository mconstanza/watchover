import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import HeroDetails from '@/components/HeroDetails'
import HeroCardContainer from '@/components/HeroCardContainer'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/:region/:platform/:battletag',
      component: Profile,
      props: true,
      children: [
        {
          path: '/',
          name: 'HeroCardContainer',
          component: HeroCardContainer,
          props: true
        },
        {
          path: ':hero',
          name: 'HeroDetails',
          component: HeroDetails,
          props: true
        }
      ]
    }
  ]
})
