<template>
  <div>
    <h1>自定义指令</h1>
    <input v-focus ref="inp" type="text">
  </div>
</template>

<script>
export default {
  // mounted () {
  //   this.$refs.inp.focus()
  // }

  // 2. 局部注册指令,只能在当前组件使用
  directives: {
    // 指令名：指令的配置项
    focus: {
      inserted(el) {
        // el是指令绑定的那个元素
        el.focus()
      }
    }
  }


  //   directives: {
  //     lbd: {
  //       inserted (el) {
  //         console.log('lbd')
  //       }
  //     }
  //   }
}
</script>

<style></style>