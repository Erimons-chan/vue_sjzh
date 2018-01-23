import Vue from 'vue'
import Router from 'vue-router'
//import BiHome from '@/components/BIChange/BiCHome.vue'
import BiHome from '@/components/BI/BiHome.vue'
import RiHome from '@/components/RI/RiHome.vue'
import CiHome from '@/components/CI/CiHome.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BiHome',
      component: BiHome
    },
    {
      path: '/RiHome',
      name: 'RiHome',
      component: RiHome
    },
    {
      path: '/CiHome',
      name: 'CiHome',
      component: CiHome
    },
  ]
})
