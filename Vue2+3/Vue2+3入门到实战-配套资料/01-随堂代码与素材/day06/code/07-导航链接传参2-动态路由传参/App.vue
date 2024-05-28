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
  声明式导航–跳转传参目标:在跳转路由时，进行传值2．动态路由传参
1.配置动态路由
Const router =new VueRouter(i
routes: [
... ,
{
path: '/ search/ : words ' ,component: Search
}
]})
2.配置导航链接
to="/path/参数值"  这里的参数值要和动态路由的参数值一样，上面是 words
3.对应页面组件接收传递过来的值
$route.params.参数名

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

