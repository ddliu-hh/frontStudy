/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */
const creator = '播仔'
// 1.1 获取用户的数据
axios({
  url: 'http://hmajax.itheima.net/api/settings',
  params: {
    creator
  }
}).then(result => {

  const userObj = result.data.data
  // 1.2 回显数据到标签上
  // Object.keys() 是一个内置的 JavaScript 方法，它接受一个对象作为参数，并返回一个包含该对象所有可枚举属性（键）的数组
  //   .forEach(key => { ... })：forEach() 是数组的方法，用于遍历数组的每个元素，并对每个元素执行一个指定的操作。在这里，我们将其应用在由 Object.keys() 返回的属性键数组上。
  // key：key 是一个形参，它代表了当前遍历到的属性键（对象的属性名）。
  Object.keys(userObj).forEach(key => {
    if (key === 'avatar') {
      // 赋予默认头像
      // userObj[key] 这种写法是使用对象的属性访问符 [] 来获取对象的属性值的方式。虽然 userObj 不是数组，而是一个对象，但在 JavaScript 中，可以使用这种方式来访问对象的属性值。
      document.querySelector('.prew').src = userObj[key]
    } else if (key === 'gender') {
      // 赋予默认性别
      // 获取性别单选框：[男radio元素，女radio元素]
      const gRadioList = document.querySelectorAll('.gender')
      // 获取性别数字：0男，1女
      const gNum = userObj[key]
      // 通过性别数字，作为下标，找到对应性别单选框，设置选中状态
      gRadioList[gNum].checked = true
    } else {
      // 赋予默认内容
      document.querySelector(`.${key}`).value = userObj[key]
    }
  })
})

/**
 * 目标2：修改头像
 *  2.1 获取头像文件
 *  2.2 提交服务器并更新头像
 * */
// 文件选择元素->change事件
document.querySelector('.upload').addEventListener('change', e => {
  // 2.1 获取头像文件
  console.log(e.target.files[0])
  const fd = new FormData()
  fd.append('avatar', e.target.files[0])
  fd.append('creator', creator)
  // 2.2 提交服务器并更新头像
  axios({
    url: 'http://hmajax.itheima.net/api/avatar',
    method: 'PUT',
    data: fd
  }).then(result => {
    const imgUrl = result.data.data.avatar
    // 把新的头像回显到页面上
    document.querySelector('.prew').src = imgUrl
  })
})

/**
 * 目标3：提交表单
 *  3.1 收集表单信息
 *  3.2 提交到服务器保存
 */
/**
 * 目标4：结果提示
 *  4.1 创建toast对象
 *  4.2 调用show方法->显示提示框
 */
// 保存修改->点击
document.querySelector('.submit').addEventListener('click', () => {
  // 3.1 收集表单信息
  const userForm = document.querySelector('.user-form')
  const userObj = serialize(userForm, { hash: true, empty: true })
  userObj.creator = creator
  // 性别数字字符串，转成数字类型
  userObj.gender = +userObj.gender
  console.log(userObj)
  // 3.2 提交到服务器保存
  axios({
    url: 'http://hmajax.itheima.net/api/settings',
    method: 'PUT',
    data: userObj
  }).then(result => {
    // 4.1 创建toast对象
    const toastDom = document.querySelector('.my-toast')
    const toast = new bootstrap.Toast(toastDom)

    // 4.2 调用show方法->显示提示框
    toast.show()
  })
})