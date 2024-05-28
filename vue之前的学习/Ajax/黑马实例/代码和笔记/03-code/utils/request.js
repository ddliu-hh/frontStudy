// axios 公共配置
// 基地址
axios.defaults.baseURL = 'http://geek.itheima.net'


// 添加请求拦截器,axios请求拦截器:发起请求之前，触发的配置函数，对请求参数进行额外配置
// 在Axios 拦截器中，config 是一个参数，它代表了 Axios 请求的配置对象。
// 这个配置对象包含了发送HTTP请求时的各种设置，例如请求的URL、请求方法、请求头部、请求参数等等。
// 通过修改 config 对象，你可以控制请求的各个方面。在拦截器中，通常会修改 config 对象来添加一些额外的信息
// headers（对象）：请求头部的配置，可以包括自定义的请求头，如 'Authorization'
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 统一携带 token 令牌字符串在请求头上
  const token = localStorage.getItem('token')
  token && (config.headers.Authorization = `Bearer ${token}`)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器,axios响应拦截器:响应回到 then/catch 之前，触发的拦截函数，对响应结果统一处理
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么，例如：直接返回服务器的响应结果对象
  const result = response.data
  return result;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么，例如：统一对 401 身份验证失败情况做出处理
  console.dir(error)
  if (error?.response?.status === 401) {
    alert('身份验证失败，请重新登录')
    localStorage.clear()
    location.href = '../login/index.html'
  }
  return Promise.reject(error);
});

/*
使用了可选链操作符 (?.)，它是在 JavaScript 中的新语法中引入的，用于简化访问可能为 null 或 undefined 的属性的操作。
可选链操作符的作用是在访问属性之前检查对象是否存在，以防止访问不存在的属性时引发错误。

在你提到的代码中，error?.response?.status === 401 表示：

首先，检查 error 对象是否存在（不为 null 或 undefined）。如果 error 存在，那么继续执行后续的操作；如果 error 为 null 或 undefined，整个表达式将返回 undefined。

接着，它使用可选链操作符 ?. 检查 error 对象中是否存在 response 属性。如果 error.response 存在，继续执行后续的操作；如果不存在，整个表达式将返回 undefined。

最后，它检查 response 对象中的 status 属性是否等于 401。如果 status 存在且等于 401，则条件为真，执行后续的代码，否则条件为假。

这种写法在处理可能存在多层嵌套属性的对象时非常有用，因为它可以避免在链式访问属性时出现空指针错误。如果某个属性不存在，整个表达式会返回 undefined 而不会引发错误。
*/