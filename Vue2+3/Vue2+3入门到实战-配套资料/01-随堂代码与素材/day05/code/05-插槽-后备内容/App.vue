<template>
  <div>
    <MyDialog></MyDialog>

    <MyDialog>
      你确认要退出么
    </MyDialog>
  </div>
</template>
<!-- 
  插槽后备内容:封装组件时，可以为预留的`<slot>`插槽提供后备内容（默认内容）。
假如组件什么都不传时就会显示默认内容
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