import { createRouter, createWebHistory } from 'vue-router'
// createRouter : 创建路由实例对象
// createWebHistory : 创建history模式路由

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'category',
          name: 'Category',
          component: Category
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
