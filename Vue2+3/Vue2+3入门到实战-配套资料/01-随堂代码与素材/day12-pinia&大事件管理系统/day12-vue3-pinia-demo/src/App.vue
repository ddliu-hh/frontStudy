<script setup>
import { storeToRefs } from 'pinia'
import Son1Com from '@/components/Son1Com.vue'
import Son2Com from '@/components/Son2Com.vue'
import { useCounterStore } from '@/store/counter'
import { useChannelStore } from './store/channel'
const counterStore = useCounterStore()//直接用模块内容
const channelStore = useChannelStore()

// 此时，直接解构，不处理，数据会丢失响应式，要用storeToRefs才能保持响应式
const { count, msg } = storeToRefs(counterStore)
const { channelList } = storeToRefs(channelStore)
const { getList } = channelStore
</script>

<template>
  <div>
    <h3>
      App.vue根组件 
      - {{ count }}
      - {{ msg }}
    </h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
    <hr>
    <button @click="getList">获取频道数据</button>
    <ul>
      <li v-for="item in channelList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
