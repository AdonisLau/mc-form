import { error } from './console';
import { isPrimitive, isObject } from './type';

/**
 * @param {String} expr
 * @return {Boolean}
 * @description 检验表达式是否合法，不允许赋值
 */
export function isValidDxExpr(expr) {
  let inSingle = false;
  let inDouble = false;

  for (let i = 0; i < expr.length; i++) {
    let ch = expr.charAt(i);
    let before = expr.charAt(i - 2);
    let prev = expr.charAt(i - 1);
    let next = expr.charAt(i + 1);

    switch (ch) {
    case '"':
      if (prev === '\\') {
        break;
      }

      inDouble = !inDouble;
      break;
    case '\'':
      if (prev === '\\') {
        break;
      }

      inSingle = !inSingle;
      break;
    case '=':
      if (inSingle || inDouble) {
        break;
      }

      // 对赋值操作做处理 = -= += *= /= >>= >>>= <<=
      if (prev === '=' || next === '=' || prev === '!' || (prev === '<' && before !== '<') || (prev === '>' && before !== '>')) {
        break;
      }

      return false;
    case '+':
    case '-':
      if (inSingle || inDouble) {
        break;
      }
      // 对赋值操作做处理 ++ --
      if (prev === ch || next === ch) {
        return false;
      }

      break;
    }
  }

  return !inSingle && !inDouble;
}
/**
 * @param {String} expr
 * @return {Boolean}
 * @description 检测是否为dx表达式
 */
export function isDxExpr(expr) {
  return typeof expr === 'string' && expr.substring(0, 3) === 'dx:';
}

/**
 * genFn辅助函数
 */
function returnNull() {
  return null;
}

/**
 * genFn辅助函数 为fn添加expr 后续判断expr一致的话将不再产生新函数
 */
function addExpr(fn, expr) {
  if (fn.__expr__ !== expr) {
    fn.__expr__ = expr;
  }

  return fn;
}
/**
 * @param {*} expr
 * @return {Function}
 * @description 将expr表达式转换为函数
 */
export function genFn(expr) {

  function handleError(msg) {
    error(msg);

    return addExpr(returnNull, null);
  }

  if (!isDxExpr(expr)) {
    if (!isPrimitive(expr)) {
      return handleError('reference value must use dx expression just like: "dx:{{ [] }}"');
    }

    return addExpr(function gen() {
      return expr;
    }, expr);
  }

  let reg = /\{\{([\s\S]+?)\}\}/;

  if (reg.test(expr)) {
    let exp = RegExp.$1.trim();

    if (!isValidDxExpr(exp)) {
      return handleError(`invalid expression: ${expr}`);
    }
    /* eslint-disable no-new-func */
    try {
      return addExpr(
        new Function(
          '$state',
          `
            try {
              return (${exp});
            } catch (e) {
              throw new Error('invalid expression: ${expr}');
            }
          `
        ),
        expr
      );
    } catch (e) {
      return handleError(`invalid expression: ${expr}`);
    }
  }

  return handleError(`invalid expression: ${expr}`);
}

export function genFns(object) {
  if (!isObject(object)) {
    return;
  }

  Object.keys(object).forEach(key => {
    object[key] = genFn(object[key]);
  });
}

const ESCAPE_RE = /[-.*+?^${}()|[\]/\\]/g;

/**
 * @param {String} raw
 * @returns {RegExp}
 * @description 正则转义
 */
function escapeRE(raw) {
  return raw.replace(ESCAPE_RE, '\\$&');
}

const FN_EXP_RE = /^(?:[\w$_]+|\(([^)]*?)\))\s*=>|^function(?:\s+[\w$_]+)?\s*\(([^)]*?)\)/;

/**
 * @param {Function} validator
 * @returns {Array}
 * @description 根据检验函数，返回必要的字段
 */
export function genStateProps(validator) {
  let string = validator.toString();
  let ret = [];

  if (!FN_EXP_RE.test(string)) {
    return ret;
  }

  let args = RegExp.$1 || RegExp.$2;

  if (!args) {
    return ret;
  }

  args = args.split(/\s*,\s*/);

  if (args.length <= 3) {
    return ret;
  }

  let arg = escapeRE(args[3]);
  let reg = new RegExp(`${arg}(?:\\.([\\w$_]+)|\\[(?:'([^']+)'|"([^"]+)")\\])`, 'g');
  let match = null;

  while ((match = reg.exec(string))) {
    ret.push(match[1] || match[2] || match[3]);
  }

  return ret;
}
