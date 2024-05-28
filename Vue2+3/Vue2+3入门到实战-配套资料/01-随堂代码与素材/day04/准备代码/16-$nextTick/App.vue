<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<!-- 
$nextTick 是 Vue.js 提供的一个方法，它能让你在下次 DOM 更新循环之后执行延迟调用的操作。
在 Vue 中，当你修改了数据后，DOM 并不会立即更新，而是异步更新。
Vue 在更新 DOM 时是异步执行的，如果你想要在数据变化之后立即获取更新后的 DOM 状态或执行某些操作，这时就可以使用 $nextTick。
 -->
<script>
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
    handleEdit() {
      this.isShowEdit = true

      this.$nextTick(() => {
        this.$refs.inp.focus()
      })

    }

  },
}
</script>

<style></style>