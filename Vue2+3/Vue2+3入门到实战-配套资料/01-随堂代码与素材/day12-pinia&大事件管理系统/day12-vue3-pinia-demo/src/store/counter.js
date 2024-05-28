import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// 定义store
// defineStore(仓库的唯一标识, () => { ... })
// export导出后其它模块引进就能直接用
export const useCounterStore = defineStore('counter', () => {
  // 声明数据 state - count
  const count = ref(100)

  // 声明操作数据的方法 action (普通函数)
  const addCount = () => count.value++
  const subCount = () => count.value--

  // 声明基于数据派生的计算属性 getters (computed)
  const double = computed(() => count.value * 2)

  // 声明数据 state - msg
  const msg = ref('hello pinia')
  return {
    count,
    double,
    addCount,
    subCount,

    msg,
  }
}, {
  // persist: true, // 开启当前模块的持久化,也就是把数据存在本地，方便获取而已，神神叨叨的

  // 一旦开启对象后，上面的就不用true了
  persist: {
    key: 'hm-counter', // 修改本地存储的唯一标识
    paths: ['count'] // 存储的是哪些数据
  }
})