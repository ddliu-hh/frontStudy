<template>
  <div id="app">
    <div class="link">
      <router-link to="/home">首页</router-link>
      <router-link to="/search">搜索页</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<!-- 
  编程式导航–路由传参
问题:点击搜索按钮，跳转需要传参如何实现?
两种传参方式:查询参数＋动态路由传参
两种跳转方式，对于两种传参方式都支持:
path路径跳转传参(query传参)
name命名路由跳转传参

 -->
<script>
export default {};
</script>

<style scoped>
.link {
  height: 50px;
  line-height: 50px;
  background-color: #495150;
  display: flex;
  margin: -8px -8px 0 -8px;
  margin-bottom: 50px;
}

.link a {
  display: block;
  text-decoration: none;
  background-color: #ad2a26;
  width: 100px;
  text-align: center;
  margin-right: 5px;
  color: #fff;
  border-radius: 5px;
}
</style>

