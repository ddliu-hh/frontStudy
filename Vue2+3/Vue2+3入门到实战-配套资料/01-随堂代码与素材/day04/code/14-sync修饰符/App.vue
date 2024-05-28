<template>
  <div class="app">
    <button @click="openDialog">退出按钮</button>
    <!-- isShow.sync  => :isShow="isShow" @update:isShow="isShow=$event" -->
    <BaseDialog :isShow.sync="isShow"></BaseDialog>
  </div>
</template>

<!-- 
  .sync修饰符
作用:可以实现子组件与父组件数据的双向绑定，简化代码
特点:prop属性名，可以自定义，非固定为value
场景:封装弹框类的基础组件， visible属性true显示false隐藏
本质:就是:属性名和@update:属性名合写

 -->
<script>
import BaseDialog from './components/BaseDialog.vue'
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    openDialog() {
      this.isShow = true
      // console.log(document.querySelectorAll('.box')); 
    },
  },
  components: {
    BaseDialog,
  },
}
</script>

<style></style>