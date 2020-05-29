import { hasOwn } from './object';
import { isArray, isObject, isEmptyValue } from './type';

const SYMBOL_RE = /[->&@]/;

function isSymbolField(field) {
  return !isEmptyValue(field) && SYMBOL_RE.test(field);
}

/**
 * @param { Object } state
 * @param { String } field
 * @description 判断是否存在，支持路径属性
 */
function has(state, field) {
  let isPath = field.indexOf('>') >= 0;

  if (!isPath) {
    return hasOwn(state, field);
  }

  let fields = field.split('>');
  let last = fields.pop();

  for (let i = 0; i < fields.length; i++) {
    let prop = fields[i];

    if (!hasOwn(state, prop)) {
      return false;
    }

    state = state[prop];

    if (state == null) {
      return false;
    }
  }

  return hasOwn(state, last);
}

/**
 * @param {String} field
 * @param {Object} state
 * @description 路径字段获取，例如state['a>b'] = state.a.b
 */
function get(state, field) {
  let fields = field.split('>');
  let last = fields.pop();
  let data = state;

  for (let i = 0; i < fields.length; i++) {
    data = data[fields[i]];

    if (isEmptyValue(data)) {
      return null;
    }
  }

  let value = data[last];

  return isEmptyValue(value) ? null : value;
}

/**
 * 处理state的路径字段
 * 例如：state['a>b'] = 10 会被处理成 state.a = {b: 10};
 */
function set(state, field, value) {
  let fields = field.split('>');
  let last = fields.pop();
  let data = state;

  for (let i = 0; i < fields.length; i++) {
    let prop = fields[i];

    if (!isObject(data[prop]) && !isArray(data[prop])) {
      data[prop] = {};
    }

    data = data[prop];
  }

  data[last] = value;
}

const SET_SYMBOLS_FROM_NORMALS_INTERATORS = [
  /**
   * @param {String} field
   * @param {Object} state
   * @description 范围字段设置，例如: state['a-b'] = [ state.a, state.b ]，主要应用于range相关的组件
   */
  function(state, field) {
    let isRange = field.indexOf('-') > 0;

    if (!isRange) {
      return false;
    }

    let fields = field.split('-');

    if (!has(state, fields[0]) && !has(state, fields[1])) {
      return true;
    }

    let endValue = get(state, fields[1]);
    let startValue = get(state, fields[0]);

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
   * @description 设置关联字段为数组
   * 例如字段 tagIds@tagNames, state = {tagIds: [1,2,3], tagNames: ['刘', '伟', '健']}
   * 会被设置为 state['tagIds@tagNames'] = [{id: 1, name: '刘'}, {id: 2, name: '伟'}, {id: 3, name: '健'}]
   */
  function(state, field) {
    let isLinked = field.indexOf('@') > 0;

    if (!isLinked) {
      return false;
    }

    let fields = field.split('@');

    if (!has(state, fields[0]) && !has(state, fields[1])) {
      return true;
    }

    let ids = get(state, fields[0]);
    let names = get(state, fields[1]);

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
  function(state, field) {
    let isLinked = field.indexOf('&') > 0;

    if (!isLinked) {
      return false;
    }

    let fields = field.split('&');

    if (!has(state, fields[0]) && !has(state, fields[1])) {
      return true;
    }

    let id = get(state, fields[0]);
    let name = get(state, fields[1]);

    if (isEmptyValue(id) && isEmptyValue(name)) {
      state[field] = null;
      return true;
    }

    id = isEmptyValue(id) ? null : id;
    name = isEmptyValue(name) ? null : name;

    state[field] = { id, name };

    return true;
  },
  /**
   * @param {String} field
   * @param {Object} state
   * @description 路径字段设置，例如state['a>b'] = state.a.b
   */
  function(state, field) {
    let isPath = field.indexOf('>') > 0;

    if (!isPath) {
      return false;
    }

    if (!has(state, field)) {
      return true;
    }

    let value = get(state, field);

    state[field] = isEmptyValue(value) ? null : value;

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
      SET_SYMBOLS_FROM_NORMALS_INTERATORS.some(interator => interator(state, field));
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
  function(state, field) {
    let isRange = field.indexOf('-') > 0;

    if (!isRange) {
      return false;
    }

    let ary = state[field];

    if (!isArray(ary)) {
      ary = [ary, ary];
    }

    let fields = field.split('-');

    set(state, fields[0], ary[0]);
    set(state, fields[1], ary[1]);

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
  function(state, field) {
    let isLinked = field.indexOf('@') > 0;

    if (!isLinked) {
      return false;
    }

    let ary = state[field];
    let fields = field.split('@');

    if (!isArray(ary)) {
      ary = [];
    }

    set(state, fields[0], ary.map(v => v.id));
    set(state, fields[1], ary.map(v => v.name));

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
  function(state, field) {
    let isLinked = field.indexOf('&') > 0;

    if (!isLinked) {
      return false;
    }

    let object = state[field];
    let fields = field.split('&');

    if (isEmptyValue(object)) {
      object = { id: null, name: null };
    }

    set(state, fields[0], object.id);
    set(state, fields[1], object.name);

    delete state[field];

    return true;
  },
  /**
   * 处理state的路径字段
   * 例如：state['a>b'] = 10 会被处理成 state.a = {b: 10};
   */
  function(state, field) {
    let isPath = field.indexOf('>') > 0;

    if (!isPath) {
      return false;
    }

    set(state, field, state[field]);

    delete state[field];

    return true;
  },
];
/**
 * @param {Object} state
 * @description 从符号字段中获取值赋值到普通字段中，并删除符号字段
 */
export function setNormalsFromSymbols(state) {
  Object.keys(state).forEach(field => {
    if (isSymbolField(field)) {
      SET_NORMALS_FROM_SYMBOLS_INTERATORS.some(interator => interator(state, field));
    }
  });

  return state;
}
