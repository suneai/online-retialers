import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
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
        pageTitle:'登录注册页',
        top: false        
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/components/pages/Home'] , resolve),
      meta:{
        pageTitle:'首页',
        top: false        
      }
    },
    {
      path: '/productDetial',
      name: 'ProductDetial',
      component: resolve => require(['@/components/pages/ProductDetial'] , resolve),
      meta:{
        pageTitle:'商品详情',
        top: false        
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: resolve => require(['@/components/pages/Cart'] , resolve),
      meta:{
        pageTitle:'购物车',
        top: false        
      }
    },
    {
      path: '/map',
      name: 'Map',
      component: resolve => require(['@/components/map/Map'] , resolve),
      meta:{
        pageTitle:'地图',
        top: true        
      }
    },
  ]
})
