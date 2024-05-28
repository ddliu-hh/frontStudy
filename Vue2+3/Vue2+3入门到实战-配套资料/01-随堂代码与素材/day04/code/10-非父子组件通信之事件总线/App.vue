<template>
  <div class="app">
    <BaseA></BaseA>
    <BaseB></BaseB>
    <BaseC></BaseC>
  </div>
</template>

<!-- 
  非父子通信(拓展) - event bus事件总线
作用:非父子组件之间，进行简易消息传递。(复杂场景就用Vuex)，注意，所有监听事件总线的接收方都会收到消息
1.创建一个都能访问到的事件总线(空Vue 实例)→ utils/EventBus.js
import Vue from 'vue'
const BuS = new Vue()
export default Bus

2.A组件(接收方)，监听Bus 实例的事件
created (){
Bus.$on( ' sendMsg ', (msg) =>{this.msg = msg
})
}
3.B组件(发送方)，触发Bus 实例的事件
Bus.$emit( 'sendMsg'，'这是一个消息)

 -->
<script>
import BaseA from './components/BaseA.vue'
import BaseB from './components/BaseB.vue'
import BaseC from './components/BaseC.vue'
export default {
  components: {
    BaseA,
    BaseB,
    BaseC
  }
}
</script>

<style></style>