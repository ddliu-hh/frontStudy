/**
 * 注意:Node.js 默认支持CommonJS标准语法
 * 如需使用ECMAScript标准语法，在运行模块所在文件夹新建package.json 文件
并设置{ "type" : "module" }

 * 
 * 目标：基于 ECMAScript 标准语法，"默认"导入，工具属性和方法使用
 */
// 默认导入,obj在这里相当于赋值，只是个变量名
import obj from './utils.js'
console.log(obj)
const result = obj.arraySum([10, 20, 30])
console.log(result)