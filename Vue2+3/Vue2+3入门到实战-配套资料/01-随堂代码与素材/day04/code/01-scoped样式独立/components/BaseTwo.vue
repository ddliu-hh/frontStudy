<template>
  <div class="base-one">
    BaseTwo
  </div>
</template>

<script>
export default {

}
</script>


<!-- 
  组件的样式冲突scoped
默认情况:写在组件中的样式会全局生效→因此很容易造成多个组件之间的样式冲突问题。
1．全局样式:默认组件中的样式会作用到全局
2．局部样式:可以给组件加上scoped属性,可以让样式只作用于当前组件

 -->
 
<style scoped>
div {
  border: 3px solid red;
  margin: 30px;
}
</style>