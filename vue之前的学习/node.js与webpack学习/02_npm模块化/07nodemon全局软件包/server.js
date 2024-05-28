/**
 * 目标：使用 nodemon 全局软件包，检测文件变化，自动重启程序
 * 语法：
 *  1. 安装 nodemon 全局软件包，命令：npm i nodemon -g
 *  2. 使用 nodemon 来执行目标 js 文件
 * 体验：启动后，修改代码，保存后观察终端效果
 * 
 * 注意！！！！ nodemon只封装了命令和工具，没有封装属性和方法，还是要npm i 才能运行
 */

// 格式化日期
const dayjs = require('dayjs')
const nowDateStr = dayjs().format('YYYY-MM-DD')
console.log(nowDateStr)

// 求数组里最大值
const _ = require('lodash')
console.log(_.max([1, 10, 2, 3, 5, 56]))