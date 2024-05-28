import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
// 这是动态路由  path: '/search/:words'  例如：/search/黑马   这样的/后面的任意词都能匹配到
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/search/:words', component: Search }
  ]
})

export default router