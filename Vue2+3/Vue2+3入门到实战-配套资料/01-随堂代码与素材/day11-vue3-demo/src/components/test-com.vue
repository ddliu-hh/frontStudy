<script setup>
const count = 999
const sayHi = () => {
  console.log('打招呼')
}

// 默认情况下在<script setup>语法糖下组件内部的属性和方法是不开放给父组件访问的，
// 可以通过defineExpose编译宏指定哪些属性和方法允许访问

defineExpose({
  count,
  sayHi
})
</script>

<template>
  <div>
    我是用于测试的组件 - {{ count }}
  </div>
</template>