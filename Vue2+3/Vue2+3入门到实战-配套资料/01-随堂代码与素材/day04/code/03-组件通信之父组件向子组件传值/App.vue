<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    <!--  -->
    <!-- 在父组件这边，你想给子组件传值时，需要给子组件标签，并添加属性方式传值 ，这样就传成功了，子组件那边用props接收-->
    <Son :title="myTitle"></Son>
  </div>
</template>

<!-- 
  父子通信流程:
1.父组件通过props将数据传递给子组件，子组件不能直接修改父组件传递过来的数据
2.子组件利用$emit通知父组件修改更新

 -->

<script>
import Son from './components/Son.vue'
export default {
  name: 'App',
  data() {
    return {
      myTitle: '学前端，就来黑马程序员',
    }
  },
  components: {
    Son,
  },
}
</script>

<style></style>