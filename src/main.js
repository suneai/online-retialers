// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入mockjs
import Mock from "mockjs";
Vue.prototype.$Mock = Mock;

//按需引入mint-ui
import { Swipe , SwipeItem } from "mint-ui";
Vue.component(Swipe.name , Swipe);
Vue.component(SwipeItem.name , SwipeItem);

//全局注册自定义的filters
import filters from "./filters/index";
for(let key in filters){
  Vue.filter(key , (val0 , val1 , val2) => {
    return filters[key](val0 , val1 , val2);
  })
}

Vue.config.productionTip = false

//页面导航的钩子,包含设置页面动态title和路由拦截
router.beforeEach((to ,from , next) => {
  typeof to.meta.pageTitle !== undefined && setDocumentTitle(to.meta.pageTitle);
  next();
})
// 兼容微信设置页面的title
let setDocumentTitle = function (title) {
  document.title = title;
  let ua = navigator.userAgent;
  if (/\bMicroMessenger\/([\d\.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
    var i = document.createElement('iframe');
    i.src = '/favicon.ico';
    i.style.display = 'none';
    i.onload = function () {
      setTimeout(function () {
        i.remove();
      }, 9);
    };
    document.body.appendChild(i);
  }
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template:'<App/>',
  components:{App},
});


