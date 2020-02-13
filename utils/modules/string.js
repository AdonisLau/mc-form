/**
 * @param {String} string
 * @returns {String}
 * @description 首字母大写
 */
export function firstUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}
