<template>
  <div class="welcome-page">
    <h1>欢迎来到垃圾分类答题</h1>
    <p>点击下方按钮开始答题</p>
    <button @click="startQuiz" class="start-btn">开始答题</button>
  </div>
</template>

<script>
export default {
  methods: {
    startQuiz() {
      // 在这里执行路由跳转到答题页面
    }
  }
};
</script>

<style scoped>
/* 样式用于美化欢迎界面 */
.welcome-page {
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 100px;
}

.start-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.start-btn:hover {
  background-color: #0056b3;
}
</style>
