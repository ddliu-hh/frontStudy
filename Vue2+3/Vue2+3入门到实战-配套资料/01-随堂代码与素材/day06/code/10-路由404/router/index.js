import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/NotFound'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化


// Vue路由– 404
// 作用:当路径找不到匹配时，给个提示页面
// 位置:配在路由最后
// 语法: path:'*'(*表示任意路径),需要跳转的组件  ->前面所有路径都不匹配就会命中最后这个

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/search/:words?', component: Search },
    { path: '*', component: NotFound }
  ]
})

export default router