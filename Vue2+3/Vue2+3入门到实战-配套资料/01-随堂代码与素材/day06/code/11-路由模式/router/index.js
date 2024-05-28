import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/NotFound'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// Vue路由–模式设置
// 问题:路由的路径看起来不自然,有#，能否切成真正路径形式? 只需要加个   mode: 'history'
// hash路由(默认)   例如: http:/ /localhost:8080/#/ home
// history路由(常用)  例如: http://localhost:8080/home(以后上线需要服务器端支持)

const router = new VueRouter({
  // 注意：一旦采用了 history 模式，地址栏就没有 #，需要后台配置访问规则
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { name: 'search', path: '/search/:words?', component: Search },
    { path: '*', component: NotFound }
  ]
})

export default router