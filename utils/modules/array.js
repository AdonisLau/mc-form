const _slice = Array.prototype.slice;

export function slice(arrayLike) {
  return _slice.call(arrayLike, 0);
}

/**
 * @param {Array} ary
 * @param {String} labelKey default label
 * @param {String} valueKey default value
 * @return {Object}
 * @description 将数组[{}, {}, {}, {}]转换为{[valueKey]: [labelKey]}
 */
export function arrayToMap(ary, labelKey = 'label', valueKey = 'value') {
  return ary.reduce((ret, item) => {
    ret[item[valueKey]] = item[labelKey];
    return ret;
  }, {});
}
