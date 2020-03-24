
import McForm from './form';
import DEFAULT_CONFIGS, { componentMap } from './configs';
import { setRequest } from './http/instance';
import { isObject, deepClone, hasOwn, isEmptyValue, firstUpperCase, error } from './utils';
// 默认输出
export default McForm;

// 修改默认配置
export function setDefaultConfigs(path, value) {
  let configs = path;

  if (!isObject(configs)) {
    configs = { [path]: value };
  }

  Object.keys(configs).forEach(key => {
    let config = configs[key];

    if (key === 'request') {
      return setRequest(config);
    }

    if (hasOwn(DEFAULT_CONFIGS, key)) {
      let defaultConfig = DEFAULT_CONFIGS[key];

      Object.keys(config).forEach(prop => {
        defaultConfig[prop] = deepClone(config[prop]);
      });
    }
  });
};

// 安装mc-form全局组件
export function installComponent(option) {
  let { type, name, component } = option;

  if (isEmptyValue(type)) {
    return error('"type" is required');
  }

  if (isEmptyValue(component)) {
    return error('"component" is required');
  }

  name = name || component.name || `Mc${firstUpperCase(type)}`;

  if (!isEmptyValue(componentMap[name])) {
    return error(`component ${name} already exists`);
  }

  let defaultConfig = option.config || {};

  componentMap[type] = name;
  McForm.components[name] = component;
  DEFAULT_CONFIGS[type] = deepClone(defaultConfig);
}
