export default {
  // 菜单
  menus: [
    'head',
    'bold',
    'fontSize',
    'fontName',
    'italic',
    'underline',
    'strikeThrough',
    'foreColor',
    'backColor',
    'list',
    'justify',
    'image'
  ],
  // 字体颜色
  colors: [
    '#000000',
    '#eeece0',
    '#1c487f',
    '#4d80bf',
    '#c24f4a',
    '#8baa4a',
    '#7b5ba1',
    '#46acc8',
    '#f9963b',
    '#ffffff'
  ],
  // 字体大小 暂不支持
  fontSizes: [
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '26px',
    '32px',
    '42px'
  ],

  zIndex: 9,
  // 使用后端接口返回的结果，根据该路径去获取图片上传路径
  path: 'content',
  // 上传接口
  uploadURL: null,
  // 上传名称
  uploadFileName: 'file',
  uploadImgShowBase64: false,
  uploadImgMaxSize: 1 * 1024 * 1024,
};
