import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/register',
    },
    {
      path: '/register',
      name: 'Register',
      component: resolve => require(['@/components/pages/Register'] , resolve),
      meta:{
        pageTitle:'登录注册页'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/components/pages/Home'] , resolve),
      meta:{
        pageTitle:'首页'
      }
    },
    {
      path: '/productDetial/:id',
      name: 'ProductDetial',
      component: resolve => require(['@/components/pages/ProductDetial'] , resolve),
      meta:{
        pageTitle:'商品详情'
      }
    },
  ]
})
