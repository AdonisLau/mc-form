export default {

  /**
   * 通用项，所有组件通用
   */

  // 所占栏数，总共24栏
  column: 24,
  // 大小
  size: 'mini',
  // 强制换行，无视内部的排列规则
  wrap: false,
  // 表单组件 是否等宽 如果是 将减去labelWidth
  aequilate: false,
  // 是否占位，此处用于与前一个构成if-else，若为false，不进行column计算
  occupation: true,
  // 是否隐藏 支持dx表达式
  hidden: false,
  // 是否disabled 支持dx表达式
  disabled: false,
  // 是否readonly 支持dx表达式
  readonly: false,
  // 是否可清空
  clearable: false,
  // 占位
  placeholder: '',
  // label宽度
  labelWidth: ''
};
