const express = require('express');
const app = express();
const cors = require('cors');

// 处理跨域中间件
app.use(cors())
// 处理JSON表单格式中间件
app.use(express.json());
// const app = express();
// 处理application/x-www-form-urlencoded表单格式的中间件
app.use(express.urlencoded({ extended: false }))

// req.query  req.body为请求接口时用户端传递的参数  http://localhost:8080/
app.get('/', (req, res)=>{
const body = req.query
  res.send({
    status: 200,
    data: body,
    message: '请求成功'
  })
})

// 如果是post可以先随意传值，传的值会放到req.body里，浏览器不支持访问post，用postman
app.post('/my', (req, res)=>{
  const body = req.body
  res.send({
    status: 200,
    data: body,
    message: 'POST请求成功'
  })
})

// 启动服务器，并监听端口8080
app.listen(8080, () => {
  console.log('express server running at http://127.0.0.1')
})