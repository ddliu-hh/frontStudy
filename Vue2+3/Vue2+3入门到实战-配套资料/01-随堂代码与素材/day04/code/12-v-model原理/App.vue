<template>
  <div class="app">
    <input type="text" v-model="msg1" />
    <br />
    <!-- v-model的底层其实就是：value和 @input的简写
    作用:提供数据的双向绑定
数据发生改变，页面会自动变  :value
页面输入改变，数据会自动变  @input
注意:$event用于在模板中，获取事件的形参

    -->
    <input type="text" :value="msg2" @input="msg2 = $event.target.value" />
    <!-- <input type="text" :value="msg2" @input="msg2 = $event.target.value"> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: '',
      msg2: '',
    }
  },
}
</script>

<style></style>