<script setup>
import { defineModel } from 'vue'

// defineModel()是v-model的优化，可以直接接收父组件传过来的值，并且居然还允许直接改，不可思议
const modelValue = defineModel()
</script>

<template>
<div>
  <input 
    type="text" 
    :value="modelValue" 
    @input="e => modelValue = e.target.value"
  >
</div>
</template>



