<template>
  <div>
    <!-- 2.准备导航链接，配置路由出口(匹配的组件展示的位置)  -->
    <div class="footer_wrap">
      <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/friend">朋友</a>
    </div>
    <div class="top">
      <!-- 路由出口 → 匹配的组件所展示的位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<!-- 
  VueRouter的使用(5+2)5个基础步骤(固定)
1.下载:下载VueRouter模块到当前工程，版本3.6.5
yarn add vue-router@3.6.5
2.引入
import VueRouter from 'vue-router'
3.安装注册
Vue.use(VueRouter)
4.创建路由对象
const router = new VueRouter()
5.注入，将路由对象注入到new Vue实例中，建立关联
new Vue({
render: h => h(App),
router
}).$mount( ' #app)

// 2个核心步骤
// 1. 创建组件(views目录)，配置路由规则，一般组件是放到components目录下的，但是路由的话则是放到views目录
// 2. 准备导航链接，配置路由出口(匹配的组件展示的位置) 
 -->
<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}

.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}

.footer_wrap a:hover {
  background-color: #555;
}
</style>