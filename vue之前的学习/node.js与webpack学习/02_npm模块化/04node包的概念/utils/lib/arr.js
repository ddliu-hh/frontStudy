/**
 * 目标：封装数组常用的方法
 */
// 数组求和函数
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)
/**
 * arr.reduce((sum, item) => sum += item, 0) 是数组的 reduce 方法的调用，用于计算数组元素的总和。

reduce 方法接收一个回调函数和一个初始值。回调函数中的 sum 参数表示累加器，item 参数表示数组中的每个元素。

在每次迭代中，将当前元素 item 加到累加器 sum 上。

0 是 reduce 方法的初始值，表示累加器的初始值为0。

reduce 方法最终返回累加的结果，即数组元素的总和。
 */
module.exports = {
  getArraySum
}