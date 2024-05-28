<template>
  <div>
    <!-- 2. 在使用组件时，组件标签内直接填入内容 -->
    <MyDialog>
      <div>你确认要删除么</div>
    </MyDialog>

    <MyDialog>
      <p>你确认要退出么</p>
    </MyDialog>
  </div>
</template>
<!-- 
  插槽–默认插槽
作用:让组件内部的一些结构支持自定义.注意，默认插槽只能定制一处结构，具名插槽可以定制多处
需求:要在页面中显示一个对话框,封装成一个组件


插槽–默认插槽插槽基本语法:
1.组件内需要定制的结构部分，改用<slot></slot>占位
2.使用组件时，<MyDialog></MyDialog>标签内部,传入结构替换slot

 -->
<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>