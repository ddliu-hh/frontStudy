<template>
  <div>
    <h1 v-color="color1">指令的值1测试</h1>
    <h1 v-color="color2">指令的值2测试</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: 'red',
      color2: 'orange'
    }
  },
  directives: {
    color: {
      // 1. inserted 提供的是元素被添加到页面中时的逻辑
      inserted(el, binding) {
        // console.log(el, binding.value);
        // binding.value 就是指令的值
        el.style.color = binding.value
      },
      // 2. update 指令的值修改的时候触发，提供值变化后，dom更新的逻辑
      update(el, binding) {
        console.log('指令的值修改了');
        el.style.color = binding.value
      }
    }
  }
}
</script>

<style></style>

<!-- 
  
在 Vue 自定义指令中，有五种不同的钩子函数。这些钩子函数可以用于控制指令在元素生命周期中的行为和操作：

bind：只调用一次，指令第一次绑定到元素时调用。这时可以执行一次性的初始化设置。

inserted：被绑定元素插入父节点时调用（只会触发一次），这时元素已经插入到父节点中。常用于初始化操作，或在元素被插入到 DOM 中后执行一些操作。

update：当绑定的元素更新时（但子元素尚未更新），会触发该钩子。比如所绑定的值发生变化时。常用于响应式更新，比如根据数据变化更新 DOM。

componentUpdated：被绑定元素所在的组件的 VNode 更新时调用。更新完成后触发。常用于需要获取更新后的 DOM 状态或执行一些只需在更新完成后才进行的操作。

unbind：只调用一次，指令与元素解绑时调用。这时可以执行清理操作，比如移除事件监听器等。
 -->