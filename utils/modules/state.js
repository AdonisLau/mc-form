import { hasOwn } from './object';
import { isArray, isObject, isEmptyValue } from './type';

const SYMBOL_RE = /[->&@]/;

function isSymbolField(field) {
  return !isEmptyValue(field) && SYMBOL_RE.test(field);
}

const SET_SYMBOLS_FROM_NORMALS_INTERATORS = [
  /**
   * @param {String} field
   * @param {Object} state
   * @description 范围字段设置，例如: state['a-b'] = [ state.a, state.b ]，主要应用于range相关的组件
   */
  function(field, state) {
    let isRange = field.indexOf('-') > 0;

    if (!isRange) {
      return false;
    }

    let fields = field.split('-');

    if (!hasOwn(state, fields[0]) && !hasOwn(state, fields[1])) {
      return true;
    }

    let endValue = state[fields[1]];
    let startValue = state[fields[0]];

    // 对于空值的 统一为空
    if (isEmptyValue(startValue) && isEmptyValue(endValue)) {
      state[field] = null;
    } else {
      state[field] = [ startValue, endValue ];
    }

    return true;
  },

  /**
   * @param {String} field
   * @param {Object} state
   * @description 路径字段设置，例如state['a>b'] = state.a.b
   */
  function(field, state) {
    let isPath = field.indexOf('>') > 0;

    if (!isPath) {
      return false;
    }

    let data = state;
    let paths = field.split('>');

    if (!hasOwn(state, paths[0])) {
      return true;
    }

    let end = paths.length - 1;

    for (let i = 0; i < end; i++) {
      data = data[paths[i]];

      if (isEmptyValue(data)) {
        state[field] = null;
        return true;
      }
    }

    let value = data[paths[end]];

    if (isEmptyValue(value)) {
      state[field] = null;
    } else {
      state[field] = value;
    }

    return true;
  },
  /**
   * @param {String} field
   * @param {Object} state
   * @description 设置关联字段为数组
   * 例如字段 tagIds@tagNames, state = {tagIds: [1,2,3], tagNames: ['刘', '伟', '健']}
   * 会被设置为 state['tagIds@tagNames'] = [{id: 1, name: '刘'}, {id: 2, name: '伟'}, {id: 3, name: '健'}]
   */
  function(field, state) {
    let isLinked = field.indexOf('@') > 0;

    if (!isLinked) {
      return false;
    }

    let fields = field.split('@');

    if (!hasOwn(state, fields[0]) && !hasOwn(state, fields[1])) {
      return true;
    }

    let ids = state[fields[0]];
    let names = state[fields[1]];

    if (isEmptyValue(ids) && isEmptyValue(names)) {
      state[field] = null;
      return true;
    }

    let ary = state[field] = [];

    if (isArray(ids) && isArray(names)) {
      ids.forEach((id, i) => ary.push({ id, name: names[i] }));
      return true;
    }

    ids = isEmptyValue(ids) ? null : ids;
    names = isEmptyValue(names) ? null : names;

    ary.push({ id: ids, name: names });

    return true;
  },
  /**
   * @param {String} field
   * @param {Object} state
   * @description 设置关联字段为对象
   * 例如字段 tagId&tagName, state = {tagId: 1, tagName: '刘伟健'}
   * 会被设置为 state['tagId&tagName'] = { id: 1, name: '刘伟健' }
   */
  function(field, state) {
    let isLinked = field.indexOf('&') > 0;

    if (!isLinked) {
      return false;
    }

    let fields = field.split('&');

    if (!hasOwn(state, fields[0]) && !hasOwn(state, fields[1])) {
      return true;
    }

    let id = state[fields[0]];
    let name = state[fields[1]];

    if (isEmptyValue(id) && isEmptyValue(name)) {
      state[field] = null;
      return true;
    }

    id = isEmptyValue(id) ? null : id;
    name = isEmptyValue(name) ? null : name;

    state[field] = { id, name };

    return true;
  }
];
/**
 * @param {String} properties
 * @param {Object} state
 * @description 从普通字段中获取值并赋值到符号字段中
 */
export function setSymbolsFromNormals(state) {
  this.config.properties.forEach(({ field }) => {
    if (isSymbolField(field)) {
      SET_SYMBOLS_FROM_NORMALS_INTERATORS.some(interator => interator(field, state));
    }
  });

  return state;
}

const SET_NORMALS_FROM_SYMBOLS_INTERATORS = [
  /**
   * 处理state的范围字段
   * 例如：state['a-b'] = [1, 2]， 会被处理成state.a = 1, state.b = 2
   */
  /**
   * @param {String} field
   * @param {Object} state
   * @description 处理state的范围字段
   * 例如：state['a-b'] = [1, 2]， 会被处理成state.a = 1, state.b = 2
   */
  function(field, state) {
    let isRange = field.indexOf('-') > 0;

    if (!isRange) {
      return false;
    }

    let ary = state[field];

    if (!isArray(ary)) {
      ary = [ary, ary];
    }

    let fields = field.split('-');

    state[fields[0]] = ary[0];
    state[fields[1]] = ary[1];

    delete state[field];

    return true;
  },
  /**
   * 处理state的路径字段
   * 例如：state['a>b'] = 10 会被处理成 state.a = {b: 10};
   */
  function(field, state) {
    let isPath = field.indexOf('>') > 0;

    if (!isPath) {
      return false;
    }

    let data = state;
    let value = state[field];
    let paths = field.split('>');
    let end = paths.length - 1;

    for (let i = 0; i < end; i++) {
      let path = paths[i];

      if (!isObject(data[path]) && !isArray(data[path])) {
        data[path] = {};
      }

      data = data[path];
    }

    data[paths[end]] = value;

    delete state[field];

    return true;
  },
  /**
   * @param {String} field
   * @param {Object} state
   * @description
   * 将关联字段单个数组处理为多个数组
   * 例如 state['tagIds@tagNames'] = [{id: 1, name: '刘'}, {id: 2, name: '伟'}, {id: 3, name: '健'}]
   * 会被设置为 state.tagIds = [1,2,3], state.tagNames = ['刘', '伟', '健']
   */
  function(field, state) {
    let isLinked = field.indexOf('@') > 0;

    if (!isLinked) {
      return false;
    }

    let ary = state[field];
    let fields = field.split('@');

    if (!isArray(ary)) {
      ary = [];
    }

    state[fields[0]] = ary.map(v => v.id);
    state[fields[1]] = ary.map(v => v.name);

    delete state[field];

    return true;
  },

  /**
   * @param {String} field
   * @param {Object} state
   * @description
   * 将关联字段对象处理成单个字段
   * 例如 state['tagId&tagName'] = { id: 1, name: '刘伟健' }
   * 会被设置为 state.tagId = 1, state.tagName = '刘伟健'
   */
  function(field, state) {
    let isLinked = field.indexOf('&') > 0;

    if (!isLinked) {
      return false;
    }

    let object = state[field];
    let fields = field.split('&');

    if (isEmptyValue(object)) {
      object = { id: null, name: null };
    }

    state[fields[0]] = object.id;
    state[fields[1]] = object.name;

    delete state[field];

    return true;
  }
];
/**
 * @param {Object} state
 * @description 从符号字段中获取值赋值到普通字段中，并删除符号字段
 */
export function setNormalsFromSymbols(state) {
  Object.keys(state).forEach(field => {
    if (isSymbolField(field)) {
      SET_NORMALS_FROM_SYMBOLS_INTERATORS.some(interator => interator(field, state));
    }
  });

  return state;
}
