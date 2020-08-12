import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/dashboard/Dashboard'
import state from '../store/state';

const Home = () => import('@/pages/Home/index.vue')
const Category = () => import('@/pages/Category/Category.vue')
const Eat = () => import('@/pages/Eat/Eat.vue')
const Cart = () => import('@/pages/Cart/Cart.vue')
const Mine = () => import('@/pages/Mine/Mine.vue') 
const GoodsDetail = () => import('@/components/goodsDetail/GoodsDetail.vue')
const Login = ()=>import('@/pages/Login/Login.vue')
const Test = () => import('@/pages/Test/Test.vue')

Vue.use(Router)

const router = new Router({
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
              keepAlive: true,
              requireAuth: true,
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
        {
          path:'/goodsDetail',
          name:'goodsDetail',
          component: GoodsDetail,
          meta: {
              keepAlive: true
          }
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component: Login,
      meta: {
          keepAlive: true
      }
    },
    {
      path:'/test',
      name:'test',
      component: Test,
      meta: {
          keepAlive: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    if(state.userInfo.token){
      next()
    }else{
      next({
        path:'/login'
      })
    }
  }
  next()

})


export default router
