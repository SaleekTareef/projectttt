import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sidebar from '../components/sidebar'
import Dropdown from '../components/dropdownRow'
import Tables from '../components/tables'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/dropdown',
      name: 'Dropdown',
      component: Dropdown
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables
    }
  ]
})
