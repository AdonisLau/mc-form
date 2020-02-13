import DEFAULT_CONFIGS from './configs';
import { setInstance } from './http/instance';
import { isObject, deepClone, hasOwn } from './utils';
// 默认输出
export { default } from './form';
// 修改默认配置
export function setDefaultConfigs(path, value) {
  let configs = path;

  if (!isObject(configs)) {
    configs = { [path]: value };
  }

  Object.keys(configs).forEach(key => {
    let config = configs[key];

    if (key === 'request') {
      return setInstance(config);
    }

    if (hasOwn(DEFAULT_CONFIGS, key)) {
      let defaultConfig = DEFAULT_CONFIGS[key];

      Object.keys(config).forEach(prop => {
        if (hasOwn(defaultConfig, prop)) {
          defaultConfig[prop] = deepClone(config[prop]);
        }
      });
    }
  });
};
