/**
 * 
 * 模块:类似插件，封装了方法/属性
fs 模块:封装了与本机文件系统进行交互的，方法/属性

fs.writeFile 是用于写入文件内容的异步操作，而 fs.readFile 也是异步操作。由于 Node.js 是非阻塞的，这两个操作会被同时触发，而不会等待前一个操作完成。

*/
// 1. 加载 fs 模块对象
const { error } = require('console')
const fs = require('fs')

// 1. 写入文件内容
fs.writeFile('./test.txt', 'hello, Node.js', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('写入成功');

    // 2. 读取文件内容
    fs.readFile('./test.txt', (readErr, data) => {
      if (readErr) {
        console.log(readErr);
      } else {
        console.log(data.toString());
      }
    });
  }
});

