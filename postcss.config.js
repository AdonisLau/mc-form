module.exports = {
  plugins : [
    require('autoprefixer')({
      overrideBrowserslist : ['last 10 versions']      //必须设置支持的浏览器才会自动添加添加浏览器兼容
    })
  ]
};
