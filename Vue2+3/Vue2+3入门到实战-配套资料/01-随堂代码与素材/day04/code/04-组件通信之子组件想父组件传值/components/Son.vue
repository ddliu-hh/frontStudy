<template>
  <div class="son" style="border: 3px solid #000; margin: 10px">
    我是Son组件 {{ title }}
    <button @click="changeFn">修改title</button>
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  props: ['title'],
  methods: {
    changeFn() {
      // 通过this.$emit() 向父组件发送通知
      // changTitle是你要传给父组件的监听的自定义类型，父组件那边要监听这个类型。然后 传智教育 就是你想传过去的值了
      this.$emit('changTitle', '传智教育')
    },
  },
}
</script>

<style></style>