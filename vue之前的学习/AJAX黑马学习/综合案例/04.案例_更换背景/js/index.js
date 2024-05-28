/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址
 *  3. 网页运行后，"获取"url网址使用
 * */
document.querySelector('.bg-ipt').addEventListener('change', e => {
  // 1. 选择图片上传，设置body背景
  console.log(e.target.files[0])
  const fd = new FormData()
  fd.append('img', e.target.files[0])
  axios({
    url: 'http://hmajax.itheima.net/api/uploadimg',
    method: 'POST',
    data: fd
  }).then(result => {
    const imgUrl = result.data.data.url
    // 要注意的是，如果直接将图片URL字符串分配给backgroundImage属性，而不包含url()函数，通常不会生效，因为它不符合CSS语法规则。所以，url()是必需的，以告诉浏览器这是一个图片路径。
    document.body.style.backgroundImage = `url(${imgUrl})`

    // 2. 上传成功时，"保存"图片url网址
    localStorage.setItem('bgImg', imgUrl)
  })
})

// 3. 网页运行后，"获取"url网址使用
const bgUrl = localStorage.getItem('bgImg')
console.log(bgUrl)

// 下面是运用了逻辑与的短路特性，注意要加(),因为与的优先级比=  要高
bgUrl && (document.body.style.backgroundImage = `url(${bgUrl})`)