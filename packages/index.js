// 动态加载所有组件
let COMPONENTS = {};
let files = require.context('./modules', false, /(?:\.js|\.vue)$/);

files.keys().forEach(key => {
  let component = files(key).default;

  COMPONENTS[component.name] = component;
});

export default COMPONENTS;
