<template>
  <div class="base-chart-box" ref="baseChartBox">子组件</div>
</template>

<!-- 
  ref 和$refs
作用:利用ref 和$refs可以用于获取dom元素,或组件实例，组件实例的话可以用组件封装好的方法
特点:查找范围→当前组件内(更精确稳定)，挂载之后才用
 -->
<script>
import * as echarts from 'echarts'

export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    // document.querySelector 会查找项目中所有的元素，就是说因为子组件放到了父子件那里，如果用querySelector，那就会也搜索到父组件的内容
    // $refs只会在当前组件查找盒子
    // var myChart = echarts.init(document.querySelector('.base-chart-box'))
    var myChart = echarts.init(this.$refs.baseChartBox)
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    })
  },
}
</script>

<style scoped>
.base-chart-box {
  width: 400px;
  height: 300px;
  border: 3px solid #000;
  border-radius: 6px;
}
</style>