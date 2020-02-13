import { deepClone } from './type';

function formatPath(path) {
  return path.replace(/\[([\w$'"]+)\]/g, (_, prop) => ('.' + prop.replace(/['"]/g, '')));
}
/**
 * @param {Object} json
 * @param {String} path
 * @returns {Any}
 * @description 根据path获取json里面的值
 */
export function getJsonValue(json, path) {
  if (json == null) {
    return json;
  }

  path = formatPath(path);

  let paths = path.split('.');

  for (let i = 0; i < paths.length; i++) {
    json = json[paths[i]];

    if (json == null) {
      return json;
    }
  }

  return json;
}

/**
 * @param {Object} json
 * @param {String} path
 * @param {Ang} value
 * @returns {Any}
 * @description 根据path获取json里面的值
 */

export function setJsonValue(json, path, value) {
  if (json == null) {
    return false;
  }

  path = formatPath(path);

  let paths = path.split('.');
  let prop = paths.pop();

  for (let i = 0; i < paths.length; i++) {
    json = json[paths[i]];

    if (json == null) {
      return false;
    }
  }

  json[prop] = value;

  return true;
}

const _hasOwn = Object.prototype.hasOwnProperty;
/**
 * @param {Object} obj
 * @param {String | Number} prop
 * @return {Boolean}
 * @description 判断对象是否拥有prop属性
 */
export function hasOwn(obj, prop) {
  return _hasOwn.call(obj, prop);
}

/**
 * @param {Object} dest
 * @param {Object} src
 * @returns {undefined}
 * @description 当src存在 dest不存在时 src拷贝给dest
 */
export function setDefaultValue(dest, src) {
  Object.keys(src).forEach(key => {
    if (!hasOwn(dest, key)) {
      dest[key] = deepClone(src[key]);
    }
  });
}
