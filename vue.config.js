const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 37.5   //设计稿等分之后的值，等分的比例同页面rem的比例是一致的
})

module.exports = {
  runtimeCompiler: true,
  // 关闭ESlint, 默认为true，编译后在控制台警告错误信息，但是不影响编译，
  // 设置为‘error’的时候在页面报错显示错误内容，设置为false关闭提示
  lintOnSave: false,
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
}