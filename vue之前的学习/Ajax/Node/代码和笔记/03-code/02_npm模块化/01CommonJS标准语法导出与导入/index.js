/**
 * 目标：基于 CommonJS 标准语法，导入工具属性和方法使用
 */
// 导入: require('模块名或路径')。
// 模块名或路径:
// 1.内置模块:直接写名字（例如:fs,path,http)
// 2.自定义模块:写模块文件路径（例如: ./utils.js)

const obj = require('./utils.js')
console.log(obj)//{ url: 'http://hmajax.itheima.net', arraySum: [Function: getArraySum] }
const result = obj.arraySum([5, 1, 2, 3])
console.log(result)