import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
import StatusApi from '@/components/StatusApi'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/status',
      component: StatusApi
    }
  ]
})
