<template>
  <div class="app">
    <UserInfo :username="username" :age="age" :isSingle="isSingle" :car="car" :hobby="hobby"></UserInfo>
  </div>
</template>

<!-- 
  什么是prop
Prop定义:组件上注册的一些自定义属性
Prop 作用:向子组件传递数据特点:
可以传递任意数量的prop·可以传递任意类型的prop

 -->
<script>
import UserInfo from './components/UserInfo.vue'
export default {
  data() {
    return {
      username: '小帅',
      age: 28,
      isSingle: true,
      car: {
        brand: '宝马',
      },
      hobby: ['篮球', '足球', '羽毛球'],
    }
  },
  components: {
    UserInfo,
  },
}
</script>

<style></style>