export * from './map';
// 动态加载所有默认配置
let configs = {};
let files = require.context('./modules', false, /\.js$/);

files.keys().forEach(key => {
  let prop = key.replace(/(?:^\.\/|\.js$)/g, '');

  configs[prop] = files(key).default;
});

export default configs;
