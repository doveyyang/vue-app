import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Cart from '@/components/cart'
import Category from '@/components/category'
import Find from '@/components/find'
import Mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
