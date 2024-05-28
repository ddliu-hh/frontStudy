<template>
  <div class="base-one">
    BaseOne
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
/* 
  1.style中的样式 默认是作用到全局的
  2.加上scoped可以让样式变成局部样式

  组件都应该有独立的样式，推荐加scoped（原理）
  -----------------------------------------------------
  scoped原理：
  1.j加上scoped后，它会自动给当前组件模板的所有元素，都会添加上一个自定义属性  data-v-hash值  例如：data-v-5f6a9d56  用于区分开不同的组件
  2.css选择器后面，也被自动处理，添加上了属性选择器
  div[data-v-5f6a9d56]
*/
div {
  border: 3px solid blue;
  margin: 30px;
}
</style>