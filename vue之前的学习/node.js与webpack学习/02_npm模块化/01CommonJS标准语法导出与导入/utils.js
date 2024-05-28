/**
 * 目标：基于 CommonJS 标准语法，封装属性和方法并导出
 */
const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

// 导出的格式，url和arraySum可以自己定义名字
module.exports = {
  url: baseURL,
  arraySum: getArraySum
}


// 这是导出的固定格式
// module.exports{

// }

