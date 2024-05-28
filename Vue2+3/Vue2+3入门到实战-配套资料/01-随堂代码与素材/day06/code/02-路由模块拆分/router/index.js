import Find from '@/views/Find'
import My from '@/views/My'
import Friend from '@/views/Friend'
// 注意这里的@  这是指绝对路径，指的是所有文件在的那个目录，一般所有文件放在src下，所以@一般指src的绝对路径
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  // routes 路由规则们
  // route  一条路由规则 { path: 路径, component: 组件 }
  routes: [
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ]
})

export default router