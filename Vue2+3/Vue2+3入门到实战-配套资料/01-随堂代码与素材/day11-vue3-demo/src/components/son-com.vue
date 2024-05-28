<script setup>
// 注意：由于写了 setup，所以无法直接配置 props 选项
// 所以：此处需要借助于 “编译器宏” 函数接收子组件传递的数据
// defineProps原理:就是编译阶段的一个标识，实际编译器解析时，遇到后会进行编译转换
const props = defineProps({
  car: String,
  money: Number
})


// 子组件不能直接修改父组件传过来的数据，要emit通知父组件改和怎么改
const emit = defineEmits(['changeMoney'])//得到emit时，这里要写明触发的是哪个函数
console.log(props.car)
console.log(props.money)

const buy = () => {
  // 需要 emit 触发事件
  emit('changeMoney', 5)
}
</script>

<template>
  <!-- 对于props传递过来的数据，模板中可以直接使用 -->
  <div class="son">
    我是子组件 - {{ car }} - {{ money }}
    <button @click="buy">花钱</button>
  </div>
</template>

<style scoped>
.son {
  border: 1px solid #000;
  padding: 30px;
}
</style>