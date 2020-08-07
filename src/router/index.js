import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/dashboard/Dashboard'

const Home = () => import('@/pages/Home/index.vue')
const Category = () => import('@/pages/Category/Category.vue')
const Eat = () => import('@/pages/Eat/Eat.vue')
const Cart = () => import('@/pages/Cart/Cart.vue')
const Mine = () => import('@/pages/Mine/Mine.vue') 

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        redirect: '/dashboard',
        // 是否数据缓存
        meta: {
            keepAlive: true
        },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children:[
        {
          path:'/dashboard',
          redirect:'/dashboard/home',
          meta: {
              keepAlive: true
          },
        },
        {
          path:'home',
          name:'home',
          component: Home,
          meta: {
              keepAlive: true
          }
        },
        {
          path:'category',
          name:'category',
          component: Category,
          meta: {
              keepAlive: true
          }
        },
        {
          path:'eat',
          name:'eat',
          component: Eat,
          meta: {
              keepAlive: true
          }
        },
        {
          path:'cart',
          name:'cart',
          component: Cart,
          meta: {
              keepAlive: true
          }
        },
        {
          path:'mine',
          name:'mine',
          component: Mine,
          meta: {
              keepAlive: true
          }
        },
      ]
    }
  ]
})
