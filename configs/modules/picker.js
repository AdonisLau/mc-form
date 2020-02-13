/**
 * picker的默认值，包括date-picker time-picker
 */

export default {
  // 文本框可输入
  editable: false,
  // 范围选择时开始日期的占位内容
  startPlaceholder: '',
  // 范围选择时结束日期的占位内容
  endPlaceholder: '',
  // 显示在输入框中的格式
  format: null,
  // 选择范围时的分隔符
  rangeSeparator: '-',
  // 值的展示格式化参数
  valueFormat: 'timestamp',
  // 当前时间日期选择器特有的选项
  pickerOptions: null,
  // 是否为时间范围选择，仅对<el-time-picker>有效
  isRange: false,
  // 是否使用箭头进行时间选择，仅对<el-time-picker>有效
  arrowControl: false,
};
