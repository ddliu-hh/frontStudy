<template>
  <div>
    <MyDialog>
      <!-- 需要通过template标签包裹需要分发的结构，包成一个整体 -->
      <template v-slot:head>
        <div>我是大标题</div>
      </template>

      <template v-slot:content>
        <div>我是内容</div>
      </template>

      <template #footer>
        <button>取消</button>
        <button>确认</button>
      </template>
    </MyDialog>
  </div>
</template>
<!-- 
  具名插槽简化语法:
1．多个slot使用name属性区分名字
2. template配合v-slot:名字来分发对应标签
3.v-slot:插槽名可以简化成  #插槽名

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