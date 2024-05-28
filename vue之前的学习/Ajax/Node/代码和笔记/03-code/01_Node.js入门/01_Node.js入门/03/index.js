/**
 * 目标：在 Node.js 环境的代码中，应使用绝对路径
 * 原因：代码的相对路径是以终端所在文件夹为起点，而不是 Vscode 资源管理器
 *  容易造成目标文件找不到的错误
 */
const fs = require('fs')
// 1. 引入 path 模块对象
const path = require('path')
// 2. 调用 path.join() 配合 __dirname 组成目标文件的绝对路径
// 注意: path.join()会使用特定于平台的分隔符，作为定界符，将所有给定的路径片段连接在一起

//D:\桌面\all of homework\前端\Ajax\Node\代码和笔记\03-code\01_Node.js入门\01_Node.js入门\03
console.log(__dirname)//  返回的是当前模块文件所在目录的绝对路径。

const lbd = path.join(__dirname, '../test.txt')// 将当前目录上移一级，然后加上 test.txt
console.log(lbd)//D:\桌面\all of homework\前端\Ajax\Node\代码和笔记\03-code\01_Node.js入门\01_Node.js入门\test.txt

fs.readFile(lbd, (err, data) => {
  if (err) console.log(err)
  else console.log(data.toString())
})


// path.join( '03', 'dist/js ', 'index.js ')i
// / windows : '03\ dist\js \index.js '
// / mac: '03/ dist/js/index.js '
