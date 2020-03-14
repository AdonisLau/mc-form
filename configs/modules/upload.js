/**
 * upload默认选项
 */

export default {
  // 接受上传的文件类型（thumbnail-mode 模式下此参数无效）
  accept: 'image/jpeg,image/jpg,image/png',
  // 必选参数，上传的地址
  action: '',
  // 设置上传的请求头部
  headers: {},
  // 上传时附带的额外参数
  data: {},
  // 是否支持多选文件
  multiple: false,
  // 上传的文件字段名
  name: 'file',
  // 最大允许上传个数
  limit: 0,
  // tip
  tip: '',
  // 文件列表的类型
  listType: 'picture-card',
  // 文件大小限制
  limitSize: 1,
  // 请求完成后执行的回调，返回一个对象。success: 是否上传成功，message: 失败后的提示语，uri: 文件上传路径
  onSuccess: res => ({ success: res.code === 200, message: res.chnDesc, uri: res.content })
};
