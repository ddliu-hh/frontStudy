import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
//   /search/:words 表示，必须要传参数。如果不传参数，也希望匹配，可以加个可选符"?"

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/search/:words?', component: Search }
  ]
})

export default router