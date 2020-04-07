## 介绍 ##

> `mc-form`，一个表单通用组件，目的是通过一份配置文件生成一个表单，减少重复性的工作。[demo](https://codepen.io/AdonisLau/pen/bGdvxLQ)。

## 安装 ##

```shell
npm install mc-form -S
```

## 使用 ##

```javascript
// mc-form-installer.js
import Vue from 'vue';
import McForm from 'mc-form';
import 'mc-form/dist/assets/index.css';

// 组件安装
Vue.component(McForm.name, McForm);
```

## 组件属性: `config` ##

> `mc-form`的配置文件，根据该配置生成表单

```javascript
{
  // 是否开启特殊符号拼接的字段解析 后续详解
  symbol: false,
  // el-row的gutter
  gutter: 10,
  // el-form的label-width
  labelWidth: '80px',
  // 初始state
  state: {},
  // 各个表单项配置
  properties: []
}
```

## 表单项配置: `config.properties` ##

> `config.properties`为数组，里面包含了各种表单项的相关配置对象。通用字段如下：

```javascript
{
  // 表单项类型
  type: 'text|number|password|select|checkbox|radio|time|year|month|date|dates|week|datetime|datetimerange|daterange|monthrange|selector|editor|inputrange|upload|tree|component',
  // 字段名
  field: 'field',
  // 标签值
  label: 'label',
  // 字段初始值
  value: 'value',
  // ui
  ui: {
    // 所占栏数，总共24栏
    column: 24,
    // 大小
    size: 'mini',
    // 强制换行，无视内部的排列规则
    wrap: false,
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
  },

  // 关联字段，当当前字段的值发生变化是，会触发以下字段的更新，使用场景，省市区关联
  linkeds: [
    {
      // 路径
      path: 'field',
      // 值 支持dx表达式
      value: 'dx:{{ [] }}',
      // 是否需要刷新options.data(省市区多级联动之类的)
      refresh: true
    }
  ],

  // 校验规则，与el-form一致
  rules: [
    { required: true, message: '必填', trigger: 'change'}
  ]
}
```

### 1. 文本框 [demo](https://codepen.io/AdonisLau/pen/KKprNbx) ###

```javascript
{
  // 文本框类型
  type: 'text|number|password',
  // 字段
  field: 'field',
  //字段初始值
  value: null,
  // label
  label: '文本框'

  input: {
    // 支持所有el-input的相关属性，驼峰命名
  }
}
```

### 2. inputnumber [demo](https://codepen.io/AdonisLau/pen/poJQRWX) ###

```javascript
{
  // inputnumber
  type: 'inputnumber',
  // 字段
  field: 'field',
  //字段初始值
  value: null,
  // label
  label: '数量'

  inputnumber: {
    // 支持所有el-input-number的相关属性，驼峰命名
  }
}
```

### 3. 单选框 [demo](https://codepen.io/AdonisLau/pen/dyoQNeV?editors=0010) ##

```javascript
{
  // 单选框
  type: 'radio',
  // 字段
  field: 'field',
  //字段初始值
  value: null,
  // label
  label: '单选框',
  // 选项相关
  options: {
    // 选项，支持数组或者字符串，如果是字符串，到this.$store去获取
    data: [ { label: '是', value: 1 } ] || 'state.DICT.dict.vipLevels',
    // 键值字段相对于data选项的映射
    label: 'label',
    value: 'value',

    // 异步请求获取选项，当该选项存在时，data无效
    ajax: {
      // 自定义请求函数，当该值不存在时，使用全局配置的request
      request: (data, params) => Promise.reolve([]),
      // 请求链接
      url: '/url',
      // 拼在链接后的参数 值支持dx表达式
      params: {
        id: 'dx:{{ $state.id }}'
      }, 
      // request body的参数 值支持dx表达式
      data: {
        name: 'dx:{{ $state.name }}'
      },
      // 方法
      method: 'post',
      // 请求前判断，如果返回falsy，则不发送请求。 支持dx表达式
      beforeSend: 'dx:{{ !!$state.parentId }}',
      // 使用后端接口返回的结果，根据该路径去获取选项数据
      path: 'data.content'
    },
    // 包含的值 支持dx表达式
    include: [],
    // 排除的值 支持dx表达式
    exclude: []
  },
  // 单选框相关配置
  radio: {
    // 是否显示边框
    border: false,
    // 按钮形式的 Radio 激活时的文本颜色
    textColor: '#fff',
    // 按钮形式的 Radio 激活时的填充色和边框色
    fill: '#409EFF'
  }
}
```

### 4. 多选框 [demo](https://codepen.io/AdonisLau/pen/WNvYRaB) ##

```javascript
{
  // 多选框
  type: 'checkbox',
  // 字段
  field: 'field',
  //字段初始值
  value: null,
  // label
  label: '多选框',
  // 选项相关
  options: {
    // 选项，支持数组或者字符串，如果是字符串，到this.$store去获取
    data: [ { label: '是', value: 1 } ] || 'state.DICT.dict.vipLevels',
    // 键值字段相对于data选项的映射
    label: 'label',
    value: 'value',

    // 异步请求获取选项，当该选项存在时，data无效
    ajax: {
      // 自定义请求函数，当该值不存在时，使用全局配置的request
      request: (data, params) => Promise.reolve([]),
      // 请求链接
      url: '/url',
      // 拼在链接后的参数 值支持dx表达式
      params: {
        id: 'dx:{{ $state.id }}'
      }, 
      // request body的参数 值支持dx表达式
      data: {
        name: 'dx:{{ $state.name }}'
      },
      // 方法
      method: 'post',
      // 请求前判断，如果返回falsy，则不发送请求。 支持dx表达式
      beforeSend: 'dx:{{ !!$state.parentId }}',
      // 使用后端接口返回的结果，根据该路径去获取选项数据，使用||做或处理
      path: 'data.content'
    },
    // 包含的值
    include: [],
    // 排除的值
    exclude: [],
    // 额外添加一个全选功能
    checkAll: true
  },
}
```

### 5. 选择框 [demo](https://codepen.io/AdonisLau/pen/OJVapMY) ##

```javascript
{
  // 选择框
  type: 'select',
  // 字段
  field: 'field',
  //字段初始值
  value: null,
  // label
  label: '选择框',
  // 选项相关
  options: {
    // 选项，支持数组或者字符串，如果是字符串，到this.$store去获取
    data: [ { label: '是', value: 1 } ] || 'state.DICT.dict.vipLevels',
    // 键值字段相对于data选项的映射
    label: 'label',
    value: 'value',

    // 异步请求获取选项，当该选项存在时，data无效
    ajax: {
      // 开启远程搜索 值为请求参数名
      remote: 'name',
      // 自定义请求函数，当该值不存在时，使用全局配置的request
      request: (data, params) => Promise.reolve([]),
      // 请求链接
      url: '/url',
      // 拼在链接后的参数 值支持dx表达式
      params: {
        id: 'dx:{{ $state.id }}'
      }, 
      // request body的参数 值支持dx表达式
      data: {
        name: 'dx:{{ $state.name }}'
      },
      // 方法
      method: 'post',
      // 请求前判断，如果返回falsy，则不发送请求。 支持dx表达式
      beforeSend: 'dx:{{ !!$state.parentId }}',
      // 使用后端接口返回的结果，根据该路径去获取选项数据
      path: 'data.content'
    },
    // 包含的值
    include: [],
    // 排除的值
    exclude: [],
    // 额外选项，例如搜索框加个全部神马的
    additional: {
      [label]: 'label',
      [value]: 'value'
    }
  },
  // 针对选择框的配置
  select: {
    // 支持所有el-select的相关属性，驼峰命名
  }
}
```

### 6. 日期时间选择器 [demo](https://codepen.io/AdonisLau/pen/xxGQqOp) ###

```javascript
{
  // 选择器类型
  type: 'time|year|month|date|dates|week|datetime|datetimerange|daterange|monthrange',
  // 字段
  field: 'field',
  //字段初始值
  value: null,
  // label
  label: '日期选择器',
  // 针对选择器的配置选项
  picker: {
    // 支持所有el-date-picker el-time-picker的相关属性，驼峰命名
  }
}
```

### 7.选择器 [demo](https://codepen.io/AdonisLau/pen/dyoQvNq) ###

> 该组件是为了类似于`点击按钮，出现弹窗后选择`的类似需求，需要配合`setState`和`selector.event`使用。界面形式为左边`el-tag`，右边`el-button`

```javascript
{
  // 选择器
  type: 'selector',
  // 字段
  field: 'field',
  // 字段初始值
  value: null,
  // label
  label: '日期选择器',
  // 针对选择器的配置选项
  selector: {
    // el-tag展示字段，对应value数组值的键
    label: 'label',
    //  按钮类型
    type: 'primary',
    // 按钮显示文本
    text: '选择',
    // 标签的size
    size: 'medium',
    // 按钮触发的事件名称
    event: 'click',
    // 标签是否允许删除
    closable: true,
  }
}
```

### 8. 富文本 [demo](https://codepen.io/AdonisLau/pen/ZEGmeXK) ###

> 需要额外安装[mc-form-editor](https://github.com/AdonisLau/mc-form-editor)组件

```javascript
{
  // 富文本
  type: 'editor',
  // 字段
  field: 'field',
  // 字段初始值
  value: null,
  // label
  label: '富文本',
  // 针对富文本的配置选项
  editor:{
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
    zIndex: 9,
    // 使用后端接口返回的结果，根据该路径去获取图片上传路径
    path: 'content',
    // 额外参数
    data: {}
    // 上传接口
    action: null,
    // 自定义请求函数，当该值不存在时，使用全局配置的request
    request: (formData) => Promise.reolve({}),
    // 上传名称
    uploadFileName: 'file',
    uploadImgShowBase64: false,
    uploadImgMaxSize: 1 * 1024 * 1024,
    // 成功回调判断
    onSuccess: _ => ({ success: true })
  }
}
```

### 9. 文本框范围 [demo](https://codepen.io/AdonisLau/pen/rNVQmZR) ###

```javascript
{
  // 文本范围
  type: 'inputrange',
  // 字段
  field: 'field',
  // 字段初始值
  value: null,
  // label
  label: '文本框范围',
  // 针对文本范围的配置选项
  inputrange: {
    // 范围选择时开始日期的占位内容
    startPlaceholder: '',
    // 范围选择时结束日期的占位内容
    endPlaceholder: '',
    // 选择范围时的分隔符
    rangeSeparator: '-',
    // 文本框类型
    type: 'number'
  }
}
```

### 10. 文件上传 [demo](https://codepen.io/AdonisLau/pen/MWwzmzZ) ###

```javascript
{
  // 文件上传
  type: 'upload',
  // 字段
  field: 'field',
  // 字段初始值
  value: null,
  // label
  label: '文件上传',
  // 针对上传的配置选项
  upload: {
    // 接受上传的文件类型（thumbnail-mode 模式下此参数无效）
    accept: 'image/jpeg,image/jpg,image/png',
    // 必选参数，上传的地址
    action: '',
    // 设置上传的请求头部
    headers: {},
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
    // 文件大小限制 单位为M
    limitSize: 1,
    // 上传前校验
    beforeUpload: blob => Promise.reject(),
    // 请求完成后执行的回调，返回一个对象。success: 是否上传成功，message: 失败后的提示语，uri: 文件上传路径
    onSuccess: res => ({ success: res.code === 200, message: res.chnDesc, uri: res.content }),
  }
}
```

### 11. 树 ###

> 抱歉，尚未实现异步加载

```javascript
{
  // 树
  type: 'tree',
  // 字段
  field: 'field',
  // 字段初始值
  value: null,
  // label
  label: '树',
  // 针对树的配置选项
  tree: {
    // 展示数据
    data: [] || 'state.USER.user.permissionTree',
    // 内容为空的时候展示的文本
    emptyText: '暂无数据',
    // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
    nodeKey: 'id',
    // 配置选项
    props: {
      label: 'label',
      children: 'children'
    },
    // 是否高亮当前选中节点，默认值是 false
    highlightCurrent: false,
    // 是否默认展开所有节点
    defaultExpandAll: false,
    // 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点
    expandOnClickNode: true,
    // 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点
    checkOnClickNode: false,
    // 展开子节点的时候是否自动展开父节点
    autoExpandParent: true,
    // 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
    checkStrictly: false,
    // 是否每次只打开一个同级树节点展开
    accordion: false,
    // 是否只获取选中的叶子节点
    leafOnly: false,
    // 是否包含半选节点
    includeHalfChecked: false,
    // 是否设置子节点
    deep: false
  }
}
```

### 12. 纯文本 ###

> 纯文本，可用于写个表头或者描述性文本

```javascript
{
  type: 'plaintext',

  plaintext: {
    // 文字对齐方式
    align: 'center',
    // 显示文本 支持dx表达式
    text: '',
    // 文本css classname
    clsName: ''
  }
}
```

### 13. 自定义组件 [demo](https://codepen.io/AdonisLau/pen/mdJQmgm) ###

> 众所周知，产品的需求是相当骚的，为了实现某些骚操作，开放自定义组件的功能供开发者使用。

```javascript
{
  type: 'component',
  // component实例
  component: Component
}
```

> 使用自定义组件可接受以下 `props: ['state', 'gutter']`。同时，由于自组件不能修改父组件的数据，需要额外$emit，不能舒舒服服的用`v-model`，请自行衡量。

```javascript
// 修改对象属性值 this.$emit('update:object', 修改对象, 修改属姓名, 修改属性值);
this.$emit('update:object', this.state, 'name', '刘伟健');
// 或者
this.$emit('update:object', this.state, { name: '刘伟健' });
// 修改数组，增删 this.$emit('update:array', 修改数组, 数组方法名, 额外参数);
this.$emit('update:array', this.state.users, 'push', { name: null, sex: null });
```

## 修改默认配置 ##

> 由于默认配置不太适合于其他项目，所以提供一个可修改默认配置的方法。PS：请在`mc-form`注册前设置。

```javascript
import instance from '@http/instance';
import McForm, { setDefaultConfigs } from 'mc-form';

export default function install(Vue) {
  // 组件安装
  Vue.component(McForm.name, McForm);
  // 修改以上默认配置
  setDefaultConfigs({
    // options相关异步获取的全局配置实例
    request: instance,
    // 修改上传的成功处理
    upload: {
      onSuccess: res => ({ success: false, message: 'error' })
    };
  });
}
```

## 组件实例方法 ##

```javascript
{
  /**
   * @param { String | undefined } field 字段名，不传则返回整个state
   * @returns { Any }
   * @description 获取表单state
   */
  getState(field) {},

  /**
   * @returns { Promise }
   * @description 表单校验
   */
  validate() {},

  /**
   * @description 移除验证效果
   */
  clear() {},

  /**
   * @param { String | Object } field 字段名
   * @param { Any } value 字段值
   * @description 设置state
   */
  setState(field, value) {},

  /**
   * @param { Object } state
   * @description 替换state
   */
  replace(state) {},

  /**
   * @param { String } field 字段名
   * @param { String } prop 属性名: disabled, readonly, hidden, closable
   * @param { String | Boolean } expr 支持dx表达式
   * @description 设置可编辑性
   */
  setEditable(field, prop, expr) {},

  /**
   * @param { String } field 字段名
   * @param { String } prop 选项名: include, exclude, data
   * @param { Array } options
   * @description 设置options.data 或者 tree.data
   */
  setOptions(field, prop, options) {},

  /**
   * @description 重置表单
   */
  reset() {}
}
```

## 组件事件 ##

> 组件事件只针对内置组件做通知，自定义组件不会触发。回调参数为一个对象: `{ field, value }`，value视element-ui的相关组件的相关事件的回调参数而定。

* change: 值改变时触发，相当于`input`，历史原因，保留命名
* native-change: 相当于`change`
* blur: 失去焦点触发
* focus: 获取焦点触发

```html
<mc-form @change="handleChange"></mc-form>
```

## 关于dx表达式 [demo](https://codepen.io/AdonisLau/pen/NWqEgqB) ##

> dx表达式的存在是为了实现数据关联的效果。例如，当某字段为空时不允许编辑 `disabled: 'dx:{{ !$state.field }}'`，具有以下特点:

* 格式如：'dx:{{ expression }}'
* 特殊字段`$state`代表表单(`el-form`)的`model`对象
* 不允许赋值的存在，比如 'dx{{ $state.name = 1 }}'是不合法的

## 关于关联字段 [demo](https://codepen.io/AdonisLau/pen/NWqEgqB) ##

> 关联字段的存在是为了设置关联的字段值，和刷新相关的选项。

## 关于特殊符号拼接的字段 [demo](https://codepen.io/AdonisLau/pen/NWqEgqB) ##

> 为了更方便地获取和设置`mc-form`的`state`，可以使用`symbol: true`开启以下特殊符号在字段中的特殊作用

* `-`: 范围字段设置。例如: state['a-b'] = [ state.a, state.b ]，主要应用于range相关的组件
* `>`: 路径字段设置。例如: state['a>b'] = state.a.b
* `@`: 设置关联字段为数组。例如字段 tagIds@tagNames, state = {tagIds: [1,2,3], tagNames: ['刘', '伟', '健']}，会被设置为 state['tagIds@tagNames'] = [{id: 1, name: '刘'}, {id: 2, name: '伟'}, {id: 3, name: '健'}]
* `&`: 设置关联字段为对象。例如字段 tagId&tagName, state = {tagId: 1, tagName: '刘伟健'}，会被设置为 state['tagId&tagName'] = { id: 1, name: '刘伟健' }


## 关于请求缓存 ##

> 对于某些请求，例如获取省市区，我们希望能够缓存起来不做二次请求。考虑到`mc-form`不能进行全局缓存，所以便不支持。但是开发者者可以在`ajax.options.request`上做处理。以下为实现全局缓存的例子，仅供参考：

```javascript
/**
 * @param {Function} fn 执行函数，必须返回Promise对象
 * @param {String|Number} prop 缓存标识唯一的属性，从params[prop]中获取
 * @returns {Promise}
 * @description 创建多个缓存
 */
export function createCaches(fn, prop) {
  let caches = {};

  let cb = function _cache(params) {
    let key = params[prop];

    if (isEmptyValue(key)) {
      return Promise.reject(new Error(`params.${prop} is required`));
    }

    if (!caches[key]) {
      caches[key] = fn.call(this, params).catch(e => {
        delete caches[key];
        return Promise.reject(e);
      });
    }

    return caches[key];
  };
  // 清除缓存
  cb.clear = function(key) {
    isEmptyValue(key) ? (caches = {}) : (delete caches[key]);
  };

  return cb;
}

// 获取省市区
const requestRegions = createCaches(data => $http.post('/area', data.parentId === 'TOP' ? {} : data), 'parentId');

// config配置

const config = {
  properties: [
    {
      label: '省市区',
      type: 'select',
      field: 'provinceId',
      value: null,

      ui: {
        column: 8
      },

      options: {
        ajax: {
          request: requestRegions,
          data: {
            parentId: 'TOP'
          }
        },
        label: 'name',
        value: 'id'
      },

      linkeds: [
        {
          path: 'cityId',
          value: null,
          refresh: true
        }
      ]
    },

    {
      label: '',
      type: 'select',
      field: 'cityId',
      value: null,

      ui: {
        column: 4
      },

      options: {
        ajax: {
          request: requestRegions,
          data: {
            parentId: 'dx:{{ $state.provinceId }}'
          },
          beforeSend: 'dx:{{ !!$state.provinceId }}'
        },
        label: 'name',
        value: 'id'
      },

      linkeds: [
        {
          path: 'countyId',
          value: null,
          refresh: true
        }
      ]
    },

    {
      label: '',
      type: 'select',
      field: 'countyId',
      value: null,

      ui: {
        column: 4
      },

      options: {
        ajax: {
          request: requestRegions,
          data: {
            parentId: 'dx:{{ $state.cityId }}'
          },
          beforeSend: 'dx:{{ !!$state.cityId }}'
        },
        label: 'name',
        value: 'id'
      }
    }
  ]
}
```