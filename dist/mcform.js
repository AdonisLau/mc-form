module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./configs/index.js":
/*!**************************!*\
  !*** ./configs/index.js ***!
  \**************************/
/*! exports provided: inputs, pickers, componentMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./configs/map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"inputs\", function() { return _map__WEBPACK_IMPORTED_MODULE_0__[\"inputs\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pickers\", function() { return _map__WEBPACK_IMPORTED_MODULE_0__[\"pickers\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"componentMap\", function() { return _map__WEBPACK_IMPORTED_MODULE_0__[\"componentMap\"]; });\n\n // 动态加载所有默认配置\n\nvar configs = {};\n\nvar files = __webpack_require__(\"./configs/modules sync \\\\.js$\");\n\nfiles.keys().forEach(function (key) {\n  var prop = key.replace(/(?:^\\.\\/|\\.js$)/g, '');\n  configs[prop] = files(key)[\"default\"];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (configs);\n\n//# sourceURL=webpack://McForm/./configs/index.js?");

/***/ }),

/***/ "./configs/map.js":
/*!************************!*\
  !*** ./configs/map.js ***!
  \************************/
/*! exports provided: inputs, pickers, componentMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputs\", function() { return inputs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pickers\", function() { return pickers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"componentMap\", function() { return componentMap; });\nvar inputs = 'text|number|password|textarea'.split('|');\nvar pickers = 'year|month|date|dates|week|datetime|datetimerange|daterange|monthrange'.split('|');\nvar componentMap = {\n  tree: 'mc-tree',\n  title: 'mc-title',\n  radio: 'mc-radio',\n  select: 'mc-select',\n  upload: 'mc-upload',\n  plaintext: 'mc-text',\n  time: 'mc-time-picker',\n  selector: 'mc-selector',\n  checkbox: 'mc-checkbox',\n  inputrange: 'mc-input-range',\n  inputnumber: 'mc-input-number',\n  component: 'mc-component'\n};\ninputs.forEach(function (name) {\n  componentMap[name] = 'mc-input';\n});\npickers.forEach(function (name) {\n  componentMap[name] = 'mc-date-picker';\n});\n\n//# sourceURL=webpack://McForm/./configs/map.js?");

/***/ }),

/***/ "./configs/modules sync \\.js$":
/*!*************************************************!*\
  !*** ./configs/modules sync nonrecursive \.js$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./input.js\": \"./configs/modules/input.js\",\n\t\"./inputnumber.js\": \"./configs/modules/inputnumber.js\",\n\t\"./inputrange.js\": \"./configs/modules/inputrange.js\",\n\t\"./options.js\": \"./configs/modules/options.js\",\n\t\"./picker.js\": \"./configs/modules/picker.js\",\n\t\"./plaintext.js\": \"./configs/modules/plaintext.js\",\n\t\"./select.js\": \"./configs/modules/select.js\",\n\t\"./selector.js\": \"./configs/modules/selector.js\",\n\t\"./tree.js\": \"./configs/modules/tree.js\",\n\t\"./ui.js\": \"./configs/modules/ui.js\",\n\t\"./upload.js\": \"./configs/modules/upload.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./configs/modules sync \\\\.js$\";\n\n//# sourceURL=webpack://McForm/./configs/modules_sync_nonrecursive_\\.js$?");

/***/ }),

/***/ "./configs/modules/input.js":
/*!**********************************!*\
  !*** ./configs/modules/input.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * input选项的默认值\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // 输入框行数，只对 type=\"textarea\" 有效\n  rows: 2,\n  // 自适应内容高度，只对 type=\"textarea\" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }\n  autosize: false\n});\n\n//# sourceURL=webpack://McForm/./configs/modules/input.js?");

/***/ }),

/***/ "./configs/modules/inputnumber.js":
/*!****************************************!*\
  !*** ./configs/modules/inputnumber.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // 设置计数器允许的最小值\n  min: -Infinity,\n  // 设置计数器允许的最大值\n  max: Infinity,\n  // 计数器步长\n  step: 1,\n  // 是否只能输入 step 的倍数\n  stepStrictly: false,\n  // 数值精度\n  precision: void 0,\n  // 是否使用控制按钮\n  controls: true,\n  // 控制按钮位置\n  controlsPosition: ''\n});\n\n//# sourceURL=webpack://McForm/./configs/modules/inputnumber.js?");

/***/ }),

/***/ "./configs/modules/inputrange.js":
/*!***************************************!*\
  !*** ./configs/modules/inputrange.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * inputrange的默认值\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // 范围选择时开始日期的占位内容\n  startPlaceholder: '',\n  // 范围选择时结束日期的占位内容\n  endPlaceholder: '',\n  // 选择范围时的分隔符\n  rangeSeparator: '-',\n  // 类型\n  type: 'number'\n});\n\n//# sourceURL=webpack://McForm/./configs/modules/inputrange.js?");

/***/ }),

/***/ "./configs/modules/options.js":
/*!************************************!*\
  !*** ./configs/modules/options.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * options选项的默认值\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: [],\n  // 默认data的 键 映射\n  label: 'label',\n  // 默认data的 值 映射\n  value: 'value'\n});\n\n//# sourceURL=webpack://McForm/./configs/modules/options.js?");

/***/ }),

/***/ "./configs/modules/picker.js":
/*!***********************************!*\
  !*** ./configs/modules/picker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * picker的默认值，包括date-picker time-picker\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // 文本框可输入\n  editable: false,\n  // 范围选择时开始日期的占位内容\n  startPlaceholder: '',\n  // 范围选择时结束日期的占位内容\n  endPlaceholder: '',\n  // 显示在输入框中的格式\n  format: null,\n  // 选择范围时的分隔符\n  rangeSeparator: '-',\n  // 值的展示格式化参数\n  valueFormat: 'timestamp',\n  // 当前时间日期选择器特有的选项\n  pickerOptions: {},\n  // 是否为时间范围选择，仅对<el-time-picker>有效\n  isRange: false,\n  // 是否使用箭头进行时间选择，仅对<el-time-picker>有效\n  arrowControl: false,\n  // 选中日期后的默认具体时刻 非范围选择时：string / 范围选择时：string[]\n  defaultTime: ['00:00:00', '00:00:00']\n});\n\n//# sourceURL=webpack://McForm/./configs/modules/picker.js?");

/***/ }),

/***/ "./configs/modules/plaintext.js":
/*!**************************************!*\
  !*** ./configs/modules/plaintext.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * plaintext选项默认值\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // 文字对齐方式\n  align: 'center',\n  // 显示文本 支持dx表达式\n  text: '',\n  // 文本css classname\n  clsName: ''\n});\n\n//# sourceURL=webpack://McForm/./configs/modules/plaintext.js?");

/***/ }),

/***/ "./configs/modules/select.js":
/*!***********************************!*\
  !*** ./configs/modules/select.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * select选项默认值\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // 是否可搜索\n  filterable: false,\n  // 是否对选\n  multiple: false,\n  // 是否为远程搜索\n  remote: false\n});\n\n//# sourceURL=webpack://McForm/./configs/modules/select.js?");

/***/ }),

/***/ "./configs/modules/selector.js":
/*!*************************************!*\
  !*** ./configs/modules/selector.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // 展示标签字段，对应value数组值的键\n  label: 'label',\n  //  按钮类型\n  type: 'primary',\n  // 按钮显示文本\n  text: '选择',\n  // 标签的size\n  size: 'medium',\n  // 触发的事件名称\n  event: 'click',\n  // 标签是否允许删除\n  closable: true\n});\n\n//# sourceURL=webpack://McForm/./configs/modules/selector.js?");

/***/ }),

/***/ "./configs/modules/tree.js":
/*!*********************************!*\
  !*** ./configs/modules/tree.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * 树选项的默认值\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // 展示数据\n  data: null,\n  // 内容为空的时候展示的文本\n  emptyText: '暂无数据',\n  // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的\n  nodeKey: 'id',\n  // 配置选项\n  props: {\n    label: 'label',\n    children: 'children'\n  },\n  // 是否高亮当前选中节点，默认值是 false\n  highlightCurrent: false,\n  // 是否默认展开所有节点\n  defaultExpandAll: false,\n  // 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点\n  expandOnClickNode: true,\n  // 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点\n  checkOnClickNode: false,\n  // 展开子节点的时候是否自动展开父节点\n  autoExpandParent: true,\n  // 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false\n  checkStrictly: false,\n  // 是否每次只打开一个同级树节点展开\n  accordion: false,\n  // 是否懒加载子节点，需与 load 方法结合使用 暂未实现\n  lazy: false,\n  // 动态获取数据接口相关 暂未实现\n  ajax: null,\n  // 是否只获取选中的叶子节点\n  leafOnly: false,\n  // 是否包含半选节点\n  includeHalfChecked: false,\n  // 是否设置子节点\n  deep: false\n});\n\n//# sourceURL=webpack://McForm/./configs/modules/tree.js?");

/***/ }),

/***/ "./configs/modules/ui.js":
/*!*******************************!*\
  !*** ./configs/modules/ui.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  /**\n   * 通用项，所有组件通用\n   */\n  // 所占栏数，总共24栏\n  column: 24,\n  // 大小\n  size: 'mini',\n  // 强制换行，无视内部的排列规则\n  wrap: false,\n  // 表单组件 是否等宽 如果是 将减去labelWidth\n  aequilate: false,\n  // 是否占位，此处用于与前一个构成if-else，若为false，不进行column计算\n  occupation: true,\n  // 是否隐藏 支持dx表达式\n  hidden: false,\n  // 是否disabled 支持dx表达式\n  disabled: false,\n  // 是否readonly 支持dx表达式\n  readonly: false,\n  // 是否可清空\n  clearable: false,\n  // 占位\n  placeholder: '',\n  // label宽度\n  labelWidth: ''\n});\n\n//# sourceURL=webpack://McForm/./configs/modules/ui.js?");

/***/ }),

/***/ "./configs/modules/upload.js":
/*!***********************************!*\
  !*** ./configs/modules/upload.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * upload默认选项\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  // 接受上传的文件类型（thumbnail-mode 模式下此参数无效）\n  accept: 'image/jpeg,image/jpg,image/png',\n  // 必选参数，上传的地址\n  action: '',\n  // 设置上传的请求头部\n  headers: {},\n  // 上传时附带的额外参数\n  data: {},\n  // 是否支持多选文件\n  multiple: false,\n  // 上传的文件字段名\n  name: 'file',\n  // 最大允许上传个数\n  limit: 0,\n  // tip\n  tip: '',\n  // 文件列表的类型\n  listType: 'picture-card',\n  // 文件大小限制\n  limitSize: 1,\n  // 请求完成后执行的回调，返回一个对象。success: 是否上传成功，message: 失败后的提示语，uri: 文件上传路径\n  onSuccess: function onSuccess(res) {\n    return {\n      success: res.code === 200,\n      message: res.chnDesc,\n      uri: res.content\n    };\n  }\n});\n\n//# sourceURL=webpack://McForm/./configs/modules/upload.js?");

/***/ }),

/***/ "./form.vue":
/*!******************!*\
  !*** ./form.vue ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_vue_vue_type_template_id_73d8f352___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=73d8f352& */ \"./form.vue?vue&type=template&id=73d8f352&\");\n/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ \"./form.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _form_vue_vue_type_template_id_73d8f352___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _form_vue_vue_type_template_id_73d8f352___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"form.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://McForm/./form.vue?");

/***/ }),

/***/ "./form.vue?vue&type=script&lang=js&":
/*!*******************************************!*\
  !*** ./form.vue?vue&type=script&lang=js& ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./form.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://McForm/./form.vue?");

/***/ }),

/***/ "./form.vue?vue&type=template&id=73d8f352&":
/*!*************************************************!*\
  !*** ./form.vue?vue&type=template&id=73d8f352& ***!
  \*************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_73d8f352___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=73d8f352& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./form.vue?vue&type=template&id=73d8f352&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_73d8f352___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_73d8f352___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://McForm/./form.vue?");

/***/ }),

/***/ "./http/instance.js":
/*!**************************!*\
  !*** ./http/instance.js ***!
  \**************************/
/*! exports provided: setRequest, getRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setRequest\", function() { return setRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRequest\", function() { return getRequest; });\nvar request = null;\nfunction setRequest(instance) {\n  request = instance;\n}\nfunction getRequest() {\n  return request;\n}\n\n//# sourceURL=webpack://McForm/./http/instance.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default, setDefaultConfigs, installComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDefaultConfigs\", function() { return setDefaultConfigs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"installComponent\", function() { return installComponent; });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./form.vue\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs */ \"./configs/index.js\");\n/* harmony import */ var _http_instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http/instance */ \"./http/instance.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./utils/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // 默认输出\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); // 修改默认配置\n\nfunction setDefaultConfigs(path, value) {\n  var configs = path;\n\n  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isObject\"])(configs)) {\n    configs = _defineProperty({}, path, value);\n  }\n\n  Object.keys(configs).forEach(function (key) {\n    var config = configs[key];\n\n    if (key === 'request') {\n      return Object(_http_instance__WEBPACK_IMPORTED_MODULE_2__[\"setRequest\"])(config);\n    }\n\n    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"hasOwn\"])(_configs__WEBPACK_IMPORTED_MODULE_1__[\"default\"], key)) {\n      var defaultConfig = _configs__WEBPACK_IMPORTED_MODULE_1__[\"default\"][key];\n      Object.keys(config).forEach(function (prop) {\n        if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"hasOwn\"])(defaultConfig, prop)) {\n          defaultConfig[prop] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(config[prop]);\n        }\n      });\n    }\n  });\n}\n; // 安装mc-form全局组件\n\nfunction installComponent(option) {\n  var type = option.type,\n      name = option.name,\n      component = option.component;\n\n  if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyValue\"])(type)) {\n    return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"error\"])('\"type\" is required');\n  }\n\n  if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyValue\"])(component)) {\n    return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"error\"])('\"component\" is required');\n  }\n\n  name = name || component.name || \"Mc\".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"firstUpperCase\"])(type));\n\n  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyValue\"])(_configs__WEBPACK_IMPORTED_MODULE_1__[\"componentMap\"][name])) {\n    return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"error\"])(\"component \".concat(name, \" already exists\"));\n  }\n\n  var defaultConfig = option.config || {};\n  _configs__WEBPACK_IMPORTED_MODULE_1__[\"componentMap\"][type] = name;\n  _form__WEBPACK_IMPORTED_MODULE_0__[\"default\"].components[name] = component;\n  _configs__WEBPACK_IMPORTED_MODULE_1__[\"default\"][type] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(defaultConfig);\n}\n\n//# sourceURL=webpack://McForm/./index.js?");

/***/ }),

/***/ "./mixins/index.js":
/*!*************************!*\
  !*** ./mixins/index.js ***!
  \*************************/
/*! exports provided: OPTIONS_MIXIN, PROPS_MIXIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ \"./mixins/options.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"OPTIONS_MIXIN\", function() { return _options__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props */ \"./mixins/props.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PROPS_MIXIN\", function() { return _props__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://McForm/./mixins/index.js?");

/***/ }),

/***/ "./mixins/options.js":
/*!***************************!*\
  !*** ./mixins/options.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./props */ \"./mixins/props.js\");\n/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extend */ \"./utils/extend.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * 这里针对选项 select checkbox radio 作处理\n */\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mixins: [_props__WEBPACK_IMPORTED_MODULE_0__[\"default\"]],\n  data: function data() {\n    return {\n      once: false,\n      options: []\n    };\n  },\n  created: function created() {\n    var opts = this.config.options;\n    var ajax = opts.ajax;\n\n    if (ajax) {\n      this.init();\n    }\n  },\n  watch: {\n    hidden: function hidden() {\n      this.init();\n    }\n  },\n  methods: {\n    genData: function genData(object) {\n      var _this = this;\n\n      var ret = {};\n\n      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"isObject\"])(object)) {\n        return ret;\n      }\n\n      Object.keys(object).forEach(function (key) {\n        try {\n          ret[key] = object[key](_this.state);\n        } catch (e) {\n          Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"error\"])(e.message);\n          ret[key] = null;\n        }\n      });\n      return ret;\n    },\n    beforeSend: function beforeSend(ajax) {\n      var beforeSend = ajax.beforeSend;\n\n      if (!beforeSend) {\n        return true;\n      }\n\n      try {\n        return beforeSend(this.state);\n      } catch (e) {\n        Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"error\"])(e.message);\n      }\n\n      return false;\n    },\n    fetchOptions: function fetchOptions(priority) {\n      var _this2 = this;\n\n      var opts = this.config.options;\n      var ajax = opts.ajax;\n\n      if (!ajax) {\n        return Promise.reject(new Error('options.ajax is required'));\n      }\n\n      this.options = [];\n\n      if (!this.beforeSend(ajax)) {\n        return Promise.resolve([]);\n      }\n\n      this.loading = true;\n      var data = this.genData(ajax.data);\n      var params = this.genData(ajax.params);\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"isObject\"])(priority)) {\n        Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"isObject\"])(priority.data) && Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, priority.data);\n        Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"isObject\"])(priority.params) && Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params, priority.params);\n      }\n\n      var promise = null;\n\n      if (ajax.request) {\n        promise = ajax.request(data, params);\n      } else {\n        var request = this.getRequest();\n        promise = request({\n          data: data,\n          params: params,\n          url: ajax.url,\n          method: ajax.method || 'get'\n        });\n      }\n\n      return promise.then(function (res) {\n        var path = ajax.path || 'recordList || content';\n        var paths = path.split(/\\s*\\|\\|\\s*/);\n        var data = null;\n        paths.some(function (prop) {\n          data = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getJsonValue\"])(res, prop);\n\n          if (data) {\n            return true;\n          }\n        });\n        _this2.loading = false; // 这里对额外参数进行处理\n\n        _this2.options = data || [];\n      })[\"catch\"](function (e) {\n        _this2.options = [];\n        _this2.loading = false;\n        return Promise.reject(e);\n      });\n    },\n    // 处理额外的选项 只针对异步获取的选项\n    handleAdditional: function handleAdditional(options) {\n      var config = this.config;\n      var opts = config.options;\n      var additional = opts.additional;\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"isObject\"])(additional)) {\n        var _options$unshift;\n\n        options = options.slice();\n        options.unshift((_options$unshift = {}, _defineProperty(_options$unshift, opts.label, additional.label), _defineProperty(_options$unshift, opts.value, additional.value), _options$unshift));\n      }\n\n      return options;\n    },\n    getOptions: function getOptions() {\n      var opts = this.config.options;\n      var options = opts.ajax ? this.options : opts.data; // 处理store\n\n      if (typeof options === 'string') {\n        options = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getJsonValue\"])(this.$store, options) || [];\n      }\n\n      var include = opts.include;\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"isFunction\"])(include) && Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"isArray\"])(include = include(this.state))) {\n        options = options.filter(function (option) {\n          return include.some(function (val) {\n            return val === option[opts.value];\n          });\n        });\n      }\n\n      var exclude = opts.exclude;\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"isFunction\"])(exclude) && Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"isArray\"])(exclude = exclude(this.state))) {\n        options = options.filter(function (option) {\n          return exclude.every(function (val) {\n            return val !== option[opts.value];\n          });\n        });\n      }\n\n      options = this.handleAdditional(options);\n      return options;\n    },\n    init: function init() {\n      // 已经初始化的 或者已经隐藏的 不再做初始化处理\n      if (this.once || this.hidden) {\n        return;\n      }\n\n      this.once = true;\n      var ajax = this.config.options.ajax; // 远程搜索 或者 设置非自动获取 就不管了\n\n      if (!ajax || !!ajax.remote || ajax.auto === false) {\n        return;\n      }\n\n      this.fetchOptions()[\"catch\"](function (e) {\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"error\"])('fetch options failed');\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://McForm/./mixins/options.js?");

/***/ }),

/***/ "./mixins/props.js":
/*!*************************!*\
  !*** ./mixins/props.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    state: {\n      type: Object,\n      required: true\n    },\n    config: {\n      type: Object,\n      required: true\n    },\n    value: {\n      type: null,\n      required: true\n    },\n    rules: {\n      type: Object\n    },\n    gutter: {\n      type: Number\n    },\n    getRequest: {\n      type: Function\n    }\n  },\n  computed: {\n    hidden: function hidden() {\n      return this.config.ui.hidden(this.state);\n    },\n    disabled: function disabled() {\n      return this.config.ui.disabled(this.state);\n    },\n    readonly: function readonly() {\n      return this.config.ui.readonly(this.state);\n    }\n  }\n});\n\n//# sourceURL=webpack://McForm/./mixins/props.js?");

/***/ }),

/***/ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=[\"attrs\",\"props\",\"domProps\"],toArrayMerge=[\"class\",\"style\",\"directives\"],functionalMerge=[\"on\",\"nativeOn\"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if(\"hook\"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;\n\n\n//# sourceURL=webpack://McForm/./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _packages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packages */ \"./packages/index.js\");\n/* harmony import */ var _http_instance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http/instance */ \"./http/instance.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configs */ \"./configs/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./utils/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McForm',\n  props: {\n    config: {\n      type: Object,\n      required: true,\n      \"default\": function _default(_) {\n        return {};\n      }\n    }\n  },\n  data: function data() {\n    var config = this.config;\n    var symbol = !!config.symbol;\n    var gutter = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyValue\"])(config.gutter) ? 20 : config.gutter;\n    var labelWidth = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyValue\"])(config.labelWidth) ? '80px' : config.labelWidth;\n\n    var _this$process = this.process(config, labelWidth),\n        state = _this$process.state,\n        rows = _this$process.rows,\n        rules = _this$process.rules;\n\n    return {\n      rows: rows,\n      state: state,\n      rules: rules,\n      // 不做响应\n      symbol: symbol,\n      gutter: gutter,\n      labelWidth: labelWidth,\n      getRequest: _http_instance__WEBPACK_IMPORTED_MODULE_1__[\"getRequest\"],\n      // 组件映射\n      componentMap: _configs__WEBPACK_IMPORTED_MODULE_2__[\"componentMap\"]\n    };\n  },\n  provide: function provide() {\n    return {\n      dangerousState: this.state\n    };\n  },\n  methods: {\n    setSymbolsFromNormals: _utils__WEBPACK_IMPORTED_MODULE_3__[\"setSymbolsFromNormals\"],\n    setNormalsFromSymbols: _utils__WEBPACK_IMPORTED_MODULE_3__[\"setNormalsFromSymbols\"],\n\n    /**\n     * set [field] to [value] if undefined\n     */\n    processState: function processState(state, property) {\n      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"fieldIsUnnecessary\"])(property.type)) {\n        var field = property.field;\n\n        if (field && Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isUndef\"])(state[field])) {\n          this.$set(state, field, property.value);\n        }\n      } // 删掉\n\n\n      delete property.value;\n    },\n\n    /**\n     * set [field] to [rules]\n     */\n    processRules: function processRules(rules, property) {\n      var _this = this;\n\n      var field = property.field;\n      var _rules = property.rules;\n      delete property.rules;\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyValue\"])(field) || Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"fieldIsUnnecessary\"])(property.type) || !Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isArray\"])(_rules)) {\n        return;\n      }\n\n      _rules.forEach(function (rule) {\n        if (!rule.validator) {\n          return;\n        }\n\n        var old = rule.validator;\n        var props = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"genStateProps\"])(old);\n\n        if (!props.length) {\n          return;\n        } // 此处会对validator作特殊处理，只传递必要的state\n\n\n        rule.validator = function (rule, value, callback) {\n          var state = {};\n          props.forEach(function (prop) {\n            return state[prop] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(_this.state[prop]);\n          });\n          return old(rule, value, callback, state);\n        };\n      });\n\n      this.$set(rules, field, _rules);\n    },\n\n    /**\n     * 处理关联字段，绑定到watch，由于存在特殊字符，会在created中使用$watch监测\n     */\n    processLinkeds: function processLinkeds(property) {\n      var field = property.field;\n      var linkeds = property.linkeds;\n      delete property.linkeds;\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyValue\"])(field) || !Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isArray\"])(linkeds)) {\n        return;\n      }\n\n      this._watches_ || (this._watches_ = {});\n      var watches = this._watches_[field] = {};\n      linkeds.forEach(function (linked) {\n        watches[linked.path] = {\n          refresh: !!linked.refresh,\n          value: Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"genFn\"])(linked.value)\n        };\n      });\n    },\n\n    /**\n     * 这里对各种选项做默认处理\n     */\n    processDefaultConfig: function processDefaultConfig(option, property) {\n      var type = property.type;\n      var upper = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"firstUpperCase\"])(option);\n      var types = {\n        isInput: _utils__WEBPACK_IMPORTED_MODULE_3__[\"isInput\"],\n        isPicker: _utils__WEBPACK_IMPORTED_MODULE_3__[\"isPicker\"],\n        isOptions: _utils__WEBPACK_IMPORTED_MODULE_3__[\"isOptions\"]\n      };\n\n      if (option !== 'ui' && option !== type && (!types['is' + upper] || !types['is' + upper](type))) {\n        delete property[option];\n        return;\n      }\n\n      var opts = property[option];\n\n      if (!opts) {\n        opts = property[option] = {};\n      }\n\n      Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"setDefaultValue\"])(opts, _configs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][option]);\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isOptions\"])(type)) {\n        this.processOptions(opts);\n      }\n    },\n\n    /**\n     * 处理options\n     */\n    processOptions: function processOptions(opts) {\n      // include exclude支持dx表达式\n      ['include', 'exclude'].forEach(function (prop) {\n        var value = opts[prop];\n\n        if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyValue\"])(value)) {\n          return;\n        }\n\n        if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isDxExpr\"])(value)) {\n          opts[prop] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"genFn\"])(value);\n        } else {\n          value = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(value);\n\n          opts[prop] = function (_) {\n            return value;\n          };\n        }\n      });\n      var ajax = opts.ajax;\n\n      if (ajax) {\n        // 转换为函数\n        Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"genFns\"])(ajax.data);\n        Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"genFns\"])(ajax.params);\n\n        if (ajax.beforeSend) {\n          ajax.beforeSend = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"genFn\"])(ajax.beforeSend);\n        }\n      }\n    },\n\n    /**\n     * 将disabled readonly hidden closable转换为函数\n     */\n    processReactives: function processReactives(property) {\n      var ui = property.ui;\n      ['disabled', 'readonly', 'hidden'].forEach(function (prop) {\n        ui[prop] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"genFn\"])(ui[prop]);\n      });\n      var selector = property.selector;\n\n      if (selector) {\n        selector.closable = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"genFn\"])(selector.closable);\n      }\n\n      var plaintext = property.plaintext;\n\n      if (plaintext) {\n        plaintext.text = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"genFn\"])(plaintext.text);\n      }\n    },\n    handleChange: function handleChange(field, value) {\n      if (!field) {\n        return;\n      }\n\n      this.state[field] = value; // 如果有事件绑定\n\n      if (this.$listeners.change) {\n        this.$emit('change', {\n          field: field,\n          value: Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(value)\n        });\n      }\n    },\n\n    /**\n     * 处理事件\n     */\n    handleClick: function handleClick(event, args) {\n      this.$emit(event, args);\n    },\n\n    /**\n     * 生成field的快速映射 便于查找\n     */\n    fieldToProperty: function fieldToProperty(property) {\n      var field = property.field;\n\n      if (!field) {\n        return;\n      }\n\n      var map = this._map_ || (this._map_ = {});\n      map[field] = property;\n    },\n\n    /**\n     * 配置项分组 用于后续排版使用\n     */\n    join: function join(properties, property) {\n      if (!properties.length) {\n        properties.push([property]);\n        return;\n      }\n\n      var COLS = 24; // 赋值默认参数\n\n      var ui = property.ui;\n      var newline = false;\n      var last = properties[properties.length - 1]; // 不占位的 不需要换行\n\n      if (ui.occupation) {\n        // 强制换行\n        if (ui.wrap) {\n          newline = true;\n        } else {\n          // 排除掉不占位的计算总栏数\n          var cols = last.filter(function (a) {\n            return a.ui.occupation;\n          }).reduce(function (a, b) {\n            return a + b.ui.column;\n          }, 0);\n          newline = ui.column + cols > COLS;\n        }\n      }\n\n      newline ? properties.push([property]) : last.push(property);\n    },\n    setLabelWidth: function setLabelWidth(property, labelWidth) {\n      // 这里添加labelWidth\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyValue\"])(property.ui.labelWidth)) {\n        property.ui.labelWidth = labelWidth;\n      }\n    },\n    processProperty: function processProperty(property, rows, rules, state, labelWidth) {\n      var _this2 = this;\n\n      var type = property.type;\n\n      if (!type) {\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"error\"])('property.type is required');\n      }\n\n      if (!_configs__WEBPACK_IMPORTED_MODULE_2__[\"componentMap\"][type]) {\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"error\"])(\"property.type: \".concat(type, \", is not supported yet\"));\n      }\n\n      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"fieldIsUnnecessary\"])(type) && Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyValue\"])(property.field)) {\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"error\"])(\"property.type: \".concat(type, \", 'field' is required\"));\n      }\n\n      property = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(property);\n      this.processLinkeds(property);\n      this.processState(state, property);\n      this.processRules(rules, property); // 处理各种相关配置\n\n      Object.keys(_configs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).forEach(function (option) {\n        _this2.processDefaultConfig(option, property);\n      });\n      this.setLabelWidth(property, labelWidth);\n      this.processReactives(property);\n      this.fieldToProperty(property);\n      this.join(rows, property);\n    },\n\n    /**\n     * 处理配置config\n     */\n    process: function process(config, labelWidth) {\n      var _this3 = this;\n\n      var rows = [];\n      var rules = {};\n      var state = config.state ? Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(config.state) : {};\n      config.properties.forEach(function (property) {\n        _this3.processProperty(property, rows, rules, state, labelWidth);\n      }); // 存放原始state\n\n      this._rawState = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(state);\n      return {\n        state: state,\n        rules: rules,\n        rows: rows\n      };\n    },\n    processWatches: function processWatches() {\n      var _this4 = this;\n\n      var watches = this._watches_;\n\n      if (!watches) {\n        return;\n      } // 手动watch 因为字段有时候不符合规范\n\n\n      Object.keys(watches).forEach(function (field) {\n        _this4.$watch(function () {\n          return this.state[field];\n        }, function () {\n          this.notice(watches[field]);\n        });\n      });\n      delete this._watches_;\n    },\n\n    /**\n     * 操作数组\n     */\n    updateArray: function updateArray(array, method) {\n      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n        args[_key - 2] = arguments[_key];\n      }\n\n      array[method].apply(array, args);\n    },\n\n    /**\n     * 操作对象\n     */\n    updateObject: function updateObject(object, field, value) {\n      var _this5 = this;\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isObject\"])(field)) {\n        Object.keys(field).forEach(function (prop) {\n          return _this5.$set(object, prop, field[prop]);\n        });\n        return;\n      }\n\n      this.$set(object, field, value);\n    },\n\n    /**\n     * 1、更新state\n     * 2、触发选项获取\n     */\n    notice: function notice(linkeds) {\n      var _this6 = this;\n\n      var state = this.state;\n      var map = this._state_map_;\n      Object.keys(linkeds).forEach(function (key) {\n        var linked = linkeds[key]; // 如果state存在的话，就不重新设置\n\n        if (!map || !map[key]) {\n          try {\n            _this6.$set(state, key, linked.value(state));\n          } catch (e) {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"error\"])(e.message);\n            return;\n          }\n        }\n\n        var components = _this6.$refs[key];\n\n        if (linked.refresh && components && components.length) {\n          // 这里加个nextTick 因为子组件的数据尚未更新\n          _this6.$nextTick(function (_) {\n            components.forEach(function (component) {\n              component.fetchOptions()[\"catch\"](function (_) {\n                return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"error\"])('fetch options failed');\n              });\n            });\n          });\n        }\n      });\n    },\n\n    /**\n     * 对外api 获取state\n     */\n    getState: function getState(field) {\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyValue\"])(field)) {\n        var state = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(this.state);\n\n        if (this.symbol) {\n          this.setNormalsFromSymbols(state);\n        }\n\n        return state;\n      }\n\n      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(this.state[field]);\n    },\n\n    /**\n     * 对外api 校验表单\n     * @returns { Promise }\n     */\n    validate: function validate() {\n      return this.$refs.form.validate();\n    },\n\n    /**\n     * 对外api 移除验证效果\n     */\n    clear: function clear() {\n      return this.$refs.form.clearValidate();\n    },\n\n    /**\n     * 对外api 设置state\n     */\n    setState: function setState(field, value, reset) {\n      var _this7 = this;\n\n      var state = null;\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isObject\"])(field)) {\n        reset = value;\n        state = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(field);\n      } else {\n        state = _defineProperty({}, field, Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(value));\n      }\n\n      reset = !!reset;\n\n      if (this.symbol) {\n        this.setSymbolsFromNormals(state);\n      }\n\n      var keys = Object.keys(state); // 生成map 后续使用\n\n      this._state_map_ = keys.reduce(function (o, k) {\n        return (o[k] = true) && o;\n      }, {});\n\n      if (reset) {\n        var map = this._state_map_; // 删掉不存在的\n\n        Object.keys(this.state).forEach(function (key) {\n          if (!map[key]) {\n            _this7.$delete(_this7.state, key);\n          }\n        });\n        /**\n         * 为什么不直接赋值？\n         * 直接赋值后，provide便失效\n         */\n        // this.state = state;\n      }\n\n      keys.forEach(function (key) {\n        _this7.$set(_this7.state, key, state[key]);\n      });\n      this.$nextTick(function (_) {\n        return _this7._state_map_ = null;\n      });\n    },\n\n    /**\n     * 对外api，设置disabled, readonly, hidden, closable\n     * {\n     *   name: {\n     *     hidden: false\n     *   }\n     * }\n     */\n    setEditable: function setEditable(field, prop, expr) {\n      var map = this._map_;\n      var property = map && map[field];\n      var props = ['disabled', 'readonly', 'hidden', 'closable'];\n\n      if (!property || !props.some(function (p) {\n        return p === prop;\n      })) {\n        return;\n      }\n\n      var opt = prop === 'closable' ? property.selector : property.ui; // 表达式一样的 没必要重新赋值\n\n      if (!opt || !opt[prop] || opt[prop].__expr__ === expr) {\n        return;\n      }\n\n      this.$set(opt, prop, Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"genFn\"])(expr));\n    },\n\n    /**\n     * 对外api 设置options选项\n     */\n    setOptions: function setOptions(field, prop, options) {\n      var map = this._map_;\n      var property = map && map[field];\n      var props = ['data', 'include', 'exclude'];\n\n      if (!property || props.indexOf(prop) < 0 || !Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isOptions\"])(property.type)) {\n        return;\n      }\n\n      if (prop === 'data') {\n        this.$set(property.options, prop, Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(options));\n        return;\n      }\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"isDxExpr\"])(options)) {\n        this.$set(property.options, prop, Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"genFn\"])(options));\n      } else {\n        options = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"])(options);\n        this.$set(property.options, prop, function (_) {\n          return options;\n        });\n      }\n    },\n\n    /**\n     * 对外api 重置表单\n     */\n    reset: function reset() {\n      this.setState(this._rawState, true);\n      this.$nextTick(this.clear);\n    }\n  },\n  created: function created() {\n    this.processWatches(); // 标识是否在setState\n\n    this._state_map_ = null;\n  },\n  components: _objectSpread({}, _packages__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n});\n\n//# sourceURL=webpack://McForm/./form.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/modules/component.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./packages/modules/component.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McComponent',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__[\"PROPS_MIXIN\"]],\n  methods: {\n    updateObject: function updateObject() {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      this.$emit.apply(this, ['update:object'].concat(args));\n    },\n    updateArray: function updateArray() {\n      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      this.$emit.apply(this, ['update:array'].concat(args));\n    }\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/component.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/modules/inputrange.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./packages/modules/inputrange.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./utils/index.js\");\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/**\n * input-range组件\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McInputRange',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_1__[\"PROPS_MIXIN\"]],\n  computed: {\n    range0: {\n      get: function get() {\n        var value = this.value;\n\n        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(value)) {\n          return null;\n        }\n\n        return value[0];\n      },\n      set: function set(v) {\n        this.$emit('input', [v, this.range1]);\n      }\n    },\n    range1: {\n      get: function get() {\n        var value = this.value;\n\n        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(value)) {\n          return null;\n        }\n\n        return value[1];\n      },\n      set: function set(v) {\n        this.$emit('input', [this.range0, v]);\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/inputrange.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/modules/upload.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./packages/modules/upload.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./utils/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nvar FILE_NAME_RE = /((?:[^./]+)\\.(?:[^.]+))$/;\n\nfunction getFileName(url) {\n  if (FILE_NAME_RE.test(url)) {\n    return RegExp.$1;\n  }\n\n  return '';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McUpload',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__[\"PROPS_MIXIN\"]],\n  data: function data() {\n    return {\n      files: []\n    };\n  },\n  computed: {\n    multiple: function multiple() {\n      return this.config.upload.multiple;\n    }\n  },\n  watch: {\n    value: {\n      immediate: true,\n      handler: function handler(fileList) {\n        // 来自自身的emit 不做修改 避免二次渲染\n        if (this._equal) {\n          return;\n        } // 空就清空\n\n\n        if (!fileList) {\n          this.files = [];\n          return;\n        }\n\n        var files = [];\n\n        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isArray\"])(fileList)) {\n          fileList = [fileList];\n        }\n\n        fileList.forEach(function (file) {\n          if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isObject\"])(file)) {\n            files.push({\n              url: file.url,\n              uri: file.uri,\n              name: file.name\n            });\n          } else {\n            files.push({\n              url: file,\n              uri: file,\n              name: getFileName(file)\n            });\n          }\n        });\n        this.files = files;\n      }\n    }\n  },\n  methods: {\n    notice: function notice(files) {\n      var _this = this;\n\n      var multiple = this.multiple;\n      files = files.filter(function (file) {\n        return !!file.uri;\n      });\n\n      if (multiple) {\n        files = files.map(function (file) {\n          return file.uri;\n        });\n      } else {\n        files = !files.length ? null : files[0].uri;\n      }\n\n      this._equal = true;\n      this.$emit('input', files);\n      var component = this.$refs.item;\n      component.$emit('el.form.change');\n      this.$nextTick(function (_) {\n        return _this._equal = false;\n      });\n    },\n    handleRemove: function handleRemove(_, files) {\n      this.notice(files);\n    },\n    handleBeforeUpload: function handleBeforeUpload(blob) {\n      var config = this.config.upload;\n      var limitSize = config.limitSize;\n\n      if (limitSize) {\n        var lt = limitSize < blob.size / 1024 / 1024;\n\n        if (lt) {\n          return Promise.reject(new Error(\"\\u4E0A\\u4F20\\u6587\\u4EF6\\u5927\\u5C0F\\u4E0D\\u80FD\\u8D85\\u8FC7 \".concat(limitSize, \"MB!\")));\n        }\n      }\n\n      return Promise.resolve();\n    },\n    beforeUpload: function beforeUpload(blob) {\n      var _this2 = this;\n\n      var promise = null;\n      var config = this.config.upload;\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isFunction\"])(config.beforeUpload)) {\n        var ret = config.beforeUpload(blob);\n\n        if (ret === false) {\n          return false;\n        }\n\n        if (ret && Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isFunction\"])(ret.then) && Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isFunction\"])(ret[\"catch\"])) {\n          promise = ret;\n        }\n      }\n\n      return (promise || Promise.resolve()).then(function (_) {\n        return _this2.handleBeforeUpload(blob);\n      })[\"catch\"](function (e) {\n        _this2.$message.error(e.message);\n\n        return Promise.reject(e);\n      });\n    },\n    handleSuccess: function handleSuccess(res, file, files) {\n      var index = files.indexOf(file);\n      var ret = this.config.upload.onSuccess(res);\n\n      if (!ret.success) {\n        this.$message.error(ret.message);\n        files.splice(index, 1);\n        return;\n      }\n\n      file.uri = ret.uri;\n\n      if (!this.multiple) {\n        files = [file];\n        this.files = [file];\n      }\n\n      this.notice(files);\n    },\n    handleError: function handleError() {\n      this.$message.error('上传失败');\n    },\n    handleExceed: function handleExceed() {\n      return this.$message.error(\"\\u6700\\u591A\\u53EA\\u80FD\\u4E0A\\u4F20\".concat(this.config.upload.limit, \"\\u4EFD\\u6587\\u4EF6\"));\n    }\n  },\n  created: function created() {\n    this._equal = false;\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/upload.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./form.vue?vue&type=template&id=73d8f352&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=73d8f352& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"el-form\",\n    {\n      ref: \"form\",\n      staticClass: \"mc-form\",\n      attrs: {\n        rules: _vm.rules,\n        model: _vm.state,\n        \"label-width\": _vm.labelWidth,\n        inline: true\n      },\n      nativeOn: {\n        submit: function($event) {\n          $event.preventDefault()\n        }\n      }\n    },\n    _vm._l(_vm.rows, function(row, index) {\n      return _c(\n        \"el-row\",\n        { key: index, attrs: { gutter: _vm.gutter } },\n        _vm._l(row, function(config, key) {\n          return _c(_vm.componentMap[config.type], {\n            key: key,\n            ref: config.field || \"__no_field__\",\n            refInFor: true,\n            tag: \"component\",\n            attrs: {\n              state: _vm.state,\n              rules: _vm.rules,\n              config: config,\n              gutter: _vm.gutter,\n              \"get-request\": _vm.getRequest,\n              value: config.field ? _vm.state[config.field] : null\n            },\n            on: {\n              input: function(value) {\n                return _vm.handleChange(config.field, value)\n              },\n              click: _vm.handleClick,\n              \"update:array\": _vm.updateArray,\n              \"update:object\": _vm.updateObject\n            }\n          })\n        }),\n        1\n      )\n    }),\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://McForm/./form.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/modules/component.vue?vue&type=template&id=6aff2e61&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/modules/component.vue?vue&type=template&id=6aff2e61& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return !_vm.hidden\n    ? _c(\n        \"el-col\",\n        { attrs: { span: _vm.config.ui.column } },\n        [\n          _vm.config.component\n            ? _c(_vm.config.component, {\n                tag: \"component\",\n                attrs: {\n                  gutter: _vm.gutter,\n                  state: _vm.state,\n                  config: _vm.config\n                },\n                on: {\n                  \"update:object\": _vm.updateObject,\n                  \"update:array\": _vm.updateArray\n                }\n              })\n            : _vm._e()\n        ],\n        1\n      )\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://McForm/./packages/modules/component.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/modules/inputrange.vue?vue&type=template&id=96535602&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/modules/inputrange.vue?vue&type=template&id=96535602& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return !_vm.hidden\n    ? _c(\n        \"el-col\",\n        { attrs: { span: _vm.config.ui.column } },\n        [\n          _c(\n            \"el-form-item\",\n            {\n              staticClass: \"mc-form-item\",\n              attrs: {\n                prop: _vm.config.field,\n                \"label-width\": _vm.config.ui.labelWidth,\n                label: _vm.config.label\n              }\n            },\n            [\n              _c(\n                \"div\",\n                {\n                  staticClass: \"range-input-editor\",\n                  class: _vm.disabled ? \"disabled\" : \"\"\n                },\n                [\n                  _c(\"el-input\", {\n                    attrs: {\n                      size: _vm.config.ui.size,\n                      readonly: _vm.readonly,\n                      disabled: _vm.disabled,\n                      type: _vm.config.inputrange.type,\n                      clearable: _vm.config.ui.clearable,\n                      placeholder: _vm.config.inputrange.startPlaceholder\n                    },\n                    model: {\n                      value: _vm.range0,\n                      callback: function($$v) {\n                        _vm.range0 = $$v\n                      },\n                      expression: \"range0\"\n                    }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"span\", { staticClass: \"separator\" }, [\n                    _vm._v(_vm._s(_vm.config.inputrange.rangeSeparator))\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"el-input\", {\n                    attrs: {\n                      size: _vm.config.ui.size,\n                      readonly: _vm.readonly,\n                      disabled: _vm.disabled,\n                      type: _vm.config.inputrange.type,\n                      clearable: _vm.config.ui.clearable,\n                      placeholder: _vm.config.inputrange.endPlaceholder\n                    },\n                    model: {\n                      value: _vm.range1,\n                      callback: function($$v) {\n                        _vm.range1 = $$v\n                      },\n                      expression: \"range1\"\n                    }\n                  })\n                ],\n                1\n              )\n            ]\n          )\n        ],\n        1\n      )\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://McForm/./packages/modules/inputrange.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/modules/upload.vue?vue&type=template&id=4d0e964d&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/modules/upload.vue?vue&type=template&id=4d0e964d& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return !_vm.hidden\n    ? _c(\n        \"el-col\",\n        { attrs: { span: _vm.config.ui.column } },\n        [\n          _c(\n            \"el-form-item\",\n            {\n              ref: \"item\",\n              staticClass: \"mc-form-item\",\n              attrs: {\n                prop: _vm.config.field,\n                \"label-width\": _vm.config.ui.labelWidth,\n                label: _vm.config.label\n              }\n            },\n            [\n              _c(\n                \"el-upload\",\n                {\n                  staticClass: \"uploader\",\n                  class: { \"uploader-readonly\": _vm.disabled || _vm.readonly },\n                  attrs: {\n                    data: _vm.config.upload.data,\n                    action: _vm.config.upload.action,\n                    accept: _vm.config.upload.accept,\n                    headers: _vm.config.upload.headers,\n                    disabled: _vm.disabled || _vm.readonly,\n                    \"show-file-list\": true,\n                    \"file-list\": _vm.files,\n                    multiple: _vm.multiple,\n                    name: _vm.config.upload.name,\n                    \"list-type\": _vm.config.upload.listType,\n                    \"auto-upload\": true,\n                    limit: _vm.config.upload.limit,\n                    \"on-remove\": _vm.handleRemove,\n                    \"on-error\": _vm.handleError,\n                    \"on-success\": _vm.handleSuccess,\n                    \"on-exceed\": _vm.handleExceed,\n                    \"before-upload\": _vm.beforeUpload\n                  }\n                },\n                [\n                  _vm.config.upload.listType === \"picture-card\"\n                    ? _c(\"i\", { staticClass: \"el-icon-plus\" })\n                    : _c(\n                        \"el-button\",\n                        {\n                          attrs: { size: _vm.config.ui.size, type: \"primary\" }\n                        },\n                        [_vm._v(\"点击上传\")]\n                      ),\n                  _vm._v(\" \"),\n                  _vm.config.upload.tip\n                    ? _c(\n                        \"div\",\n                        {\n                          staticClass: \"el-upload__tip\",\n                          attrs: { slot: \"tip\" },\n                          slot: \"tip\"\n                        },\n                        [_vm._v(_vm._s(_vm.config.upload.tip))]\n                      )\n                    : _vm._e()\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://McForm/./packages/modules/upload.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://McForm/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./packages/index.js":
/*!***************************!*\
  !*** ./packages/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 动态加载所有组件\nvar COMPONENTS = {};\n\nvar files = __webpack_require__(\"./packages/modules sync (?:\\\\.js|\\\\.vue)$\");\n\nfiles.keys().forEach(function (key) {\n  var component = files(key)[\"default\"];\n  COMPONENTS[component.name] = component;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (COMPONENTS);\n\n//# sourceURL=webpack://McForm/./packages/index.js?");

/***/ }),

/***/ "./packages/modules sync (?:\\.js|\\.vue)$":
/*!************************************************************!*\
  !*** ./packages/modules sync nonrecursive (?:\.js|\.vue)$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./checkbox.js\": \"./packages/modules/checkbox.js\",\n\t\"./component.vue\": \"./packages/modules/component.vue\",\n\t\"./date.js\": \"./packages/modules/date.js\",\n\t\"./input.js\": \"./packages/modules/input.js\",\n\t\"./inputnumber.js\": \"./packages/modules/inputnumber.js\",\n\t\"./inputrange.vue\": \"./packages/modules/inputrange.vue\",\n\t\"./plaintext.js\": \"./packages/modules/plaintext.js\",\n\t\"./radio.js\": \"./packages/modules/radio.js\",\n\t\"./select.js\": \"./packages/modules/select.js\",\n\t\"./selector.js\": \"./packages/modules/selector.js\",\n\t\"./time.js\": \"./packages/modules/time.js\",\n\t\"./tree.js\": \"./packages/modules/tree.js\",\n\t\"./upload.vue\": \"./packages/modules/upload.vue\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./packages/modules sync (?:\\\\.js|\\\\.vue)$\";\n\n//# sourceURL=webpack://McForm/./packages/modules_sync_nonrecursive_(?");

/***/ }),

/***/ "./packages/modules/checkbox.js":
/*!**************************************!*\
  !*** ./packages/modules/checkbox.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./utils/index.js\");\n\n\n/**\n * input组件\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McCheckbox',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__[\"OPTIONS_MIXIN\"]],\n  data: function data() {\n    return {\n      loading: false\n    };\n  },\n  methods: {\n    handleCheckAllChange: function handleCheckAllChange(checked) {\n      if (!checked) {\n        return this.handleCheckChange([]);\n      }\n\n      var options = this.getOptions();\n      var opts = this.config.options;\n      this.handleCheckChange(options.map(function (opt) {\n        return opt[opts.value];\n      }));\n    },\n    handleCheckChange: function handleCheckChange(value) {\n      this.$emit('input', value);\n    }\n  },\n  render: function render(h) {\n    if (this.hidden) {\n      return null;\n    }\n\n    var checkAll = false;\n    var indeterminate = false;\n    var config = this.config;\n    var ui = config.ui;\n    var opts = config.options;\n    var options = this.getOptions(); // 添加一个全选 有点头疼\n\n    if (opts.checkAll && Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isArray\"])(this.value)) {\n      var map = this.value.reduce(function (m, v) {\n        return (m[v] = true) && m;\n      }, {});\n      checkAll = options.every(function (opt) {\n        return map[opt[opts.value]] >= 0;\n      });\n      indeterminate = !checkAll && options.some(function (opt) {\n        return map[opt[opts.value]] >= 0;\n      });\n    }\n\n    return h(\"el-col\", {\n      \"attrs\": {\n        \"span\": ui.column\n      }\n    }, [h(\"el-form-item\", {\n      \"attrs\": {\n        \"prop\": config.field,\n        \"labelWidth\": ui.labelWidth,\n        \"label\": config.label\n      },\n      \"class\": \"mc-form-item\"\n    }, [opts.checkAll && !!options.length && h(\"div\", {\n      \"class\": \"mc-check-all\"\n    }, [h(\"el-checkbox\", {\n      \"attrs\": {\n        \"readonly\": this.readonly,\n        \"disabled\": this.disabled,\n        \"value\": checkAll,\n        \"indeterminate\": indeterminate\n      },\n      \"on\": {\n        \"input\": this.handleCheckAllChange\n      }\n    }, [\"\\u5168\\u9009\"])]), h(\"el-checkbox-group\", {\n      \"class\": \"mc-checkbox-group\",\n      \"attrs\": {\n        \"size\": ui.size,\n        \"value\": this.value,\n        \"readonly\": this.readonly,\n        \"disabled\": this.disabled\n      },\n      \"on\": {\n        \"input\": this.handleCheckChange\n      }\n    }, [options.map(function (option, index) {\n      return h(\"el-checkbox\", {\n        \"key\": index,\n        \"attrs\": {\n          \"label\": option[opts.value]\n        }\n      }, [option[opts.label]]);\n    })])])]);\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/checkbox.js?");

/***/ }),

/***/ "./packages/modules/component.vue":
/*!****************************************!*\
  !*** ./packages/modules/component.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_vue_vue_type_template_id_6aff2e61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.vue?vue&type=template&id=6aff2e61& */ \"./packages/modules/component.vue?vue&type=template&id=6aff2e61&\");\n/* harmony import */ var _component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.vue?vue&type=script&lang=js& */ \"./packages/modules/component.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _component_vue_vue_type_template_id_6aff2e61___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _component_vue_vue_type_template_id_6aff2e61___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"packages/modules/component.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://McForm/./packages/modules/component.vue?");

/***/ }),

/***/ "./packages/modules/component.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./packages/modules/component.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./component.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/modules/component.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://McForm/./packages/modules/component.vue?");

/***/ }),

/***/ "./packages/modules/component.vue?vue&type=template&id=6aff2e61&":
/*!***********************************************************************!*\
  !*** ./packages/modules/component.vue?vue&type=template&id=6aff2e61& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_template_id_6aff2e61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./component.vue?vue&type=template&id=6aff2e61& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/modules/component.vue?vue&type=template&id=6aff2e61&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_template_id_6aff2e61___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_vue_vue_type_template_id_6aff2e61___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://McForm/./packages/modules/component.vue?");

/***/ }),

/***/ "./packages/modules/date.js":
/*!**********************************!*\
  !*** ./packages/modules/date.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./utils/index.js\");\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\n\n\n/**\n * date-picker组件\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McDatePicker',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_1__[\"PROPS_MIXIN\"]],\n  methods: {\n    isRange: function isRange(type) {\n      return type.slice(-5) === 'range';\n    }\n  },\n  render: function render(h) {\n    var _this = this;\n\n    if (this.hidden) {\n      return null;\n    }\n\n    var _this$config = this.config,\n        ui = _this$config.ui,\n        picker = _this$config.picker,\n        field = _this$config.field,\n        label = _this$config.label,\n        type = _this$config.type;\n    var defaultTime = picker.defaultTime;\n    return h(\"el-col\", {\n      \"attrs\": {\n        \"span\": ui.column\n      }\n    }, [h(\"el-form-item\", {\n      \"attrs\": {\n        \"prop\": field,\n        \"labelWidth\": ui.labelWidth,\n        \"label\": label\n      },\n      \"class\": \"mc-form-item\"\n    }, [h(\"el-date-picker\", {\n      \"attrs\": {\n        \"size\": ui.size,\n        \"value\": this.value,\n        \"type\": type,\n        \"editable\": picker.editable,\n        \"readonly\": this.readonly,\n        \"disabled\": this.disabled,\n        \"clearable\": ui.clearable,\n        \"placeholder\": ui.placeholder,\n        \"startPlaceholder\": picker.startPlaceholder,\n        \"endPlaceholder\": picker.endPlaceholder,\n        \"format\": picker.format,\n        \"rangeSeparator\": picker.rangeSeparator,\n        \"valueFormat\": picker.valueFormat,\n        \"pickerOptions\": picker.pickerOptions,\n        \"defaultTime\": this.isRange(type) ? defaultTime : Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"])(defaultTime) ? defaultTime[0] : defaultTime\n      },\n      \"on\": {\n        \"input\": function input(value) {\n          return _this.$emit('input', value);\n        }\n      }\n    })])]);\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/date.js?");

/***/ }),

/***/ "./packages/modules/input.js":
/*!***********************************!*\
  !*** ./packages/modules/input.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\n\n/**\n * input组件\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McInput',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__[\"PROPS_MIXIN\"]],\n  render: function render(h) {\n    var _this = this;\n\n    if (this.hidden) {\n      return null;\n    }\n\n    var _this$config = this.config,\n        ui = _this$config.ui,\n        input = _this$config.input,\n        field = _this$config.field,\n        label = _this$config.label,\n        type = _this$config.type;\n    return h(\"el-col\", {\n      \"attrs\": {\n        \"span\": ui.column\n      }\n    }, [h(\"el-form-item\", {\n      \"attrs\": {\n        \"prop\": field,\n        \"labelWidth\": ui.labelWidth,\n        \"label\": label\n      },\n      \"class\": \"mc-form-item\"\n    }, [h(\"el-input\", {\n      \"attrs\": {\n        \"rows\": input.rows,\n        \"size\": ui.size,\n        \"type\": type,\n        \"value\": this.value,\n        \"readonly\": this.readonly,\n        \"disabled\": this.disabled,\n        \"clearable\": ui.clearable,\n        \"placeholder\": ui.placeholder\n      },\n      \"on\": {\n        \"input\": function input(value) {\n          return _this.$emit('input', value);\n        }\n      }\n    })])]);\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/input.js?");

/***/ }),

/***/ "./packages/modules/inputnumber.js":
/*!*****************************************!*\
  !*** ./packages/modules/inputnumber.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\n\n/**\n * input组件\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McInputNumber',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__[\"PROPS_MIXIN\"]],\n  render: function render(h) {\n    var _this = this;\n\n    if (this.hidden) {\n      return null;\n    }\n\n    var _this$config = this.config,\n        ui = _this$config.ui,\n        inputnumber = _this$config.inputnumber,\n        field = _this$config.field,\n        label = _this$config.label;\n    return h(\"el-col\", {\n      \"attrs\": {\n        \"span\": ui.column\n      }\n    }, [h(\"el-form-item\", {\n      \"attrs\": {\n        \"prop\": field,\n        \"labelWidth\": ui.labelWidth,\n        \"label\": label\n      },\n      \"class\": \"mc-form-item\"\n    }, [h(\"el-input-number\", {\n      \"attrs\": {\n        \"size\": ui.size,\n        \"value\": this.value || 0,\n        \"min\": inputnumber.min,\n        \"max\": inputnumber.max,\n        \"step\": inputnumber.step,\n        \"stepStrictly\": inputnumber.stepStrictly,\n        \"precision\": inputnumber.precision,\n        \"controls\": inputnumber.controls,\n        \"controlsPosition\": inputnumber.controlsPosition,\n        \"readonly\": this.readonly,\n        \"disabled\": this.disabled,\n        \"clearable\": ui.clearable,\n        \"placeholder\": ui.placeholder\n      },\n      \"on\": {\n        \"input\": function input(value) {\n          return _this.$emit('input', value);\n        }\n      }\n    })])]);\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/inputnumber.js?");

/***/ }),

/***/ "./packages/modules/inputrange.vue":
/*!*****************************************!*\
  !*** ./packages/modules/inputrange.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _inputrange_vue_vue_type_template_id_96535602___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputrange.vue?vue&type=template&id=96535602& */ \"./packages/modules/inputrange.vue?vue&type=template&id=96535602&\");\n/* harmony import */ var _inputrange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputrange.vue?vue&type=script&lang=js& */ \"./packages/modules/inputrange.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _inputrange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _inputrange_vue_vue_type_template_id_96535602___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _inputrange_vue_vue_type_template_id_96535602___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"packages/modules/inputrange.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://McForm/./packages/modules/inputrange.vue?");

/***/ }),

/***/ "./packages/modules/inputrange.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./packages/modules/inputrange.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_inputrange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./inputrange.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/modules/inputrange.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_inputrange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://McForm/./packages/modules/inputrange.vue?");

/***/ }),

/***/ "./packages/modules/inputrange.vue?vue&type=template&id=96535602&":
/*!************************************************************************!*\
  !*** ./packages/modules/inputrange.vue?vue&type=template&id=96535602& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inputrange_vue_vue_type_template_id_96535602___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./inputrange.vue?vue&type=template&id=96535602& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/modules/inputrange.vue?vue&type=template&id=96535602&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inputrange_vue_vue_type_template_id_96535602___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inputrange_vue_vue_type_template_id_96535602___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://McForm/./packages/modules/inputrange.vue?");

/***/ }),

/***/ "./packages/modules/plaintext.js":
/*!***************************************!*\
  !*** ./packages/modules/plaintext.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\n\n/**\n * 纯文本组件\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McText',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__[\"PROPS_MIXIN\"]],\n  render: function render(h) {\n    if (this.hidden) {\n      return null;\n    }\n\n    var state = this.state;\n    var _this$config = this.config,\n        ui = _this$config.ui,\n        label = _this$config.label,\n        plaintext = _this$config.plaintext;\n    var TextComponent = h(\"div\", {\n      \"class\": 'mc-form-text align-' + plaintext.align + (plaintext.clsName ? \" \".concat(plaintext.clsName) : '')\n    }, [h(\"span\", [plaintext.text(state)])]);\n    return h(\"div\", {\n      \"class\": \"mc-col\"\n    }, [label != null ? h(\"el-form-item\", {\n      \"attrs\": {\n        \"label\": label,\n        \"labelWidth\": ui.labelWidth\n      },\n      \"class\": \"mc-form-item\"\n    }, [TextComponent]) : TextComponent]);\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/plaintext.js?");

/***/ }),

/***/ "./packages/modules/radio.js":
/*!***********************************!*\
  !*** ./packages/modules/radio.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\n\n/**\n * radio组件\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McRadio',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__[\"OPTIONS_MIXIN\"]],\n  data: function data() {\n    return {\n      loading: false\n    };\n  },\n  render: function render(h) {\n    var _this = this;\n\n    if (this.hidden) {\n      return null;\n    }\n\n    var config = this.config;\n    var ui = config.ui;\n    var opts = config.options;\n    var options = this.getOptions();\n    return h(\"el-col\", {\n      \"attrs\": {\n        \"span\": ui.column\n      }\n    }, [h(\"el-form-item\", {\n      \"attrs\": {\n        \"prop\": config.field,\n        \"labelWidth\": ui.labelWidth,\n        \"label\": config.label\n      },\n      \"class\": \"mc-form-item\"\n    }, [h(\"el-radio-group\", {\n      \"attrs\": {\n        \"size\": ui.size,\n        \"value\": this.value,\n        \"readonly\": this.readonly,\n        \"disabled\": this.disabled\n      },\n      \"on\": {\n        \"input\": function input(value) {\n          return _this.$emit('input', value);\n        }\n      }\n    }, [options.map(function (option, index) {\n      return h(\"el-radio\", {\n        \"key\": index,\n        \"attrs\": {\n          \"label\": option[opts.value]\n        }\n      }, [option[opts.label]]);\n    })])])]);\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/radio.js?");

/***/ }),

/***/ "./packages/modules/select.js":
/*!************************************!*\
  !*** ./packages/modules/select.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./utils/index.js\");\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/**\n * select组件\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McSelect',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_1__[\"OPTIONS_MIXIN\"]],\n  data: function data() {\n    return {\n      loading: false\n    };\n  },\n  computed: {\n    remote: function remote() {\n      var ajax = this.config.options.ajax;\n      return !!(ajax && ajax.remote);\n    }\n  },\n  methods: {\n    handleRemote: function handleRemote(kw) {\n      if (!kw) {\n        this.options = [];\n        return;\n      }\n\n      var ajax = this.config.options.ajax;\n      var key = ajax.remote;\n      var q = {};\n      var method = (ajax.method || 'get').toLowerCase();\n\n      if (method === 'post') {\n        q.data = _defineProperty({}, key, kw);\n      } else {\n        q.params = _defineProperty({}, key, kw);\n      }\n\n      this.fetchOptions(q)[\"catch\"](function (e) {\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"error\"])('fetch options failed');\n      });\n    }\n  },\n  render: function render(h) {\n    var _this = this;\n\n    if (this.hidden) {\n      return null;\n    }\n\n    var config = this.config;\n    var ui = config.ui;\n    var opts = config.options;\n    var select = config.select;\n    var options = this.getOptions();\n    return h(\"el-col\", {\n      \"attrs\": {\n        \"span\": ui.column\n      }\n    }, [h(\"el-form-item\", {\n      \"attrs\": {\n        \"prop\": config.field,\n        \"labelWidth\": ui.labelWidth,\n        \"label\": config.label\n      },\n      \"class\": \"mc-form-item\"\n    }, [h(\"el-select\", {\n      \"attrs\": {\n        \"size\": ui.size,\n        \"value\": this.value,\n        \"remote\": this.remote,\n        \"loading\": this.loading,\n        \"multiple\": select.multiple,\n        \"readonly\": this.readonly,\n        \"disabled\": this.disabled,\n        \"clearable\": ui.clearable,\n        \"filterable\": select.filterable,\n        \"placeholder\": ui.placeholder,\n        \"remote-method\": this.handleRemote\n      },\n      \"on\": {\n        \"input\": function input(value) {\n          return _this.$emit('input', value);\n        }\n      }\n    }, [options.map(function (option, index) {\n      return h(\"el-option\", {\n        \"key\": index,\n        \"attrs\": {\n          \"label\": option[opts.label],\n          \"value\": option[opts.value]\n        }\n      });\n    })])])]);\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/select.js?");

/***/ }),

/***/ "./packages/modules/selector.js":
/*!**************************************!*\
  !*** ./packages/modules/selector.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./utils/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/**\n * selector组件\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McSelector',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__[\"PROPS_MIXIN\"]],\n  computed: {\n    closable: function closable() {\n      return this.config.selector.closable(this.state);\n    },\n    tags: function tags() {\n      var tags = this.value;\n\n      if (!tags) {\n        return [];\n      }\n\n      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isArray\"])(tags)) {\n        tags = [tags];\n      }\n\n      var label = this.config.selector.label;\n      return tags.map(function (tag) {\n        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isObject\"])(tag)) {\n          tag = _defineProperty({}, label, tag);\n        }\n\n        return tag;\n      });\n    }\n  },\n  methods: {\n    genValue: function genValue(tags) {\n      var val = null;\n      var selector = this.config.selector;\n\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isArray\"])(this.value)) {\n        val = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"deepClone\"])(tags);\n      } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isObject\"])(this.value)) {\n        tags.length && (val = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"deepClone\"])(tags[0]));\n      } else {\n        tags.length && (val = tags[0][selector.label]);\n      }\n\n      return val;\n    },\n    handleClose: function handleClose(index) {\n      var tags = this.tags.filter(function (_, i) {\n        return i !== index;\n      });\n      this.$emit('input', this.genValue(tags));\n    },\n    handleClick: function handleClick() {\n      var config = this.config;\n      this.$emit('click', config.selector.event, {\n        field: config.field,\n        value: this.genValue(this.tags)\n      });\n    }\n  },\n  render: function render(h) {\n    var _this = this;\n\n    if (this.hidden) {\n      return null;\n    }\n\n    var config = this.config;\n    var ui = config.ui,\n        selector = config.selector;\n    var editable = !(this.disabled || this.readonly);\n    var closable = editable && this.closable;\n    return h(\"el-col\", {\n      \"attrs\": {\n        \"span\": ui.column\n      },\n      \"style\": ui.aequilate ? {\n        width: \"calc(\".concat(ui.column / 24 * 100 + '%', \" - \").concat(ui.labelWidth, \")\")\n      } : {}\n    }, [h(\"el-form-item\", {\n      \"attrs\": {\n        \"prop\": config.field,\n        \"labelWidth\": ui.labelWidth,\n        \"label\": config.label\n      },\n      \"class\": \"mc-form-item\"\n    }, [this.tags.map(function (tag, index) {\n      return h(\"el-tag\", {\n        \"class\": \"mc-selector-tag\",\n        \"key\": index,\n        \"attrs\": {\n          \"size\": selector.size,\n          \"closable\": closable,\n          \"disableTransitions\": true\n        },\n        \"on\": {\n          \"close\": function close(_) {\n            return _this.handleClose(index);\n          }\n        }\n      }, [tag[selector.label]]);\n    }), editable && h(\"el-button\", {\n      \"class\": \"mc-selector-btn\",\n      \"attrs\": {\n        \"size\": ui.size,\n        \"type\": selector.type,\n        \"icon\": selector.icon ? selector.icon : ''\n      },\n      \"on\": {\n        \"click\": function click(_) {\n          return _this.handleClick();\n        }\n      }\n    }, [selector.text])])]);\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/selector.js?");

/***/ }),

/***/ "./packages/modules/time.js":
/*!**********************************!*\
  !*** ./packages/modules/time.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\n\n/**\n * time-picker组件\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McTimePicker',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_0__[\"PROPS_MIXIN\"]],\n  render: function render(h) {\n    var _this = this;\n\n    if (this.hidden) {\n      return null;\n    }\n\n    var _this$config = this.config,\n        ui = _this$config.ui,\n        picker = _this$config.picker,\n        field = _this$config.field,\n        label = _this$config.label;\n    return h(\"el-col\", {\n      \"attrs\": {\n        \"span\": ui.column\n      }\n    }, [h(\"el-form-item\", {\n      \"attrs\": {\n        \"prop\": field,\n        \"labelWidth\": ui.labelWidth,\n        \"label\": label\n      },\n      \"class\": \"mc-form-item\"\n    }, [h(\"el-time-picker\", {\n      \"attrs\": {\n        \"size\": ui.size,\n        \"value\": this.value,\n        \"editable\": picker.editable,\n        \"readonly\": this.readonly,\n        \"disabled\": this.disabled,\n        \"clearable\": ui.clearable,\n        \"placeholder\": ui.placeholder,\n        \"startPlaceholder\": ui.startPlaceholder,\n        \"endPlaceholder\": ui.endPlaceholder,\n        \"format\": ui.format || null,\n        \"rangeSeparator\": ui.rangeSeparator,\n        \"valueFormat\": ui.valueFormat || null,\n        \"pickerOptions\": ui.pickerOptions,\n        \"isRange\": ui.isRange,\n        \"arrowControl\": ui.arrowControl\n      },\n      \"on\": {\n        \"input\": function input(value) {\n          return _this.$emit('input', value);\n        }\n      }\n    })])]);\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/time.js?");

/***/ }),

/***/ "./packages/modules/tree.js":
/*!**********************************!*\
  !*** ./packages/modules/tree.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ \"./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js\");\n/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins */ \"./mixins/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ \"./utils/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'McTree',\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_1__[\"PROPS_MIXIN\"]],\n  props: {\n    value: {\n      type: Array,\n      required: true,\n      \"default\": function _default() {\n        return [];\n      }\n    }\n  },\n  watch: {\n    value: 'setCheckedKeys'\n  },\n  methods: {\n    notice: function notice(keys) {\n      var _this = this;\n\n      this._equal = true;\n      this.$emit('input', keys);\n      this.$nextTick(function (_) {\n        return _this._equal = false;\n      });\n    },\n    handleChange: function handleChange() {\n      var tree = this.$refs.tree;\n      var config = this.config.tree;\n      var nodes = tree.getCheckedNodes(config.leafOnly, config.includeHalfChecked);\n      var keys = nodes.map(function (node) {\n        return node[config.nodeKey];\n      });\n      this.notice(keys);\n    },\n    setCheckedKeys: function setCheckedKeys(keys) {\n      // 来自自身的emit 不做修改 避免二次渲染\n      if (this._equal) {\n        return;\n      }\n\n      if (!keys) {\n        keys = [];\n      }\n\n      var tree = this.$refs.tree;\n      var config = this.config.tree; // 清空原来的选中\n\n      tree.setCheckedKeys([]); // 再重新设置\n\n      keys.forEach(function (key) {\n        return tree.setChecked(key, true, config.deep);\n      });\n    },\n    getTreeData: function getTreeData() {\n      var data = this.config.tree.data; // 处理store\n\n      if (typeof data === 'string') {\n        data = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getJsonValue\"])(this.$store, data) || [];\n      }\n\n      return data;\n    }\n  },\n  render: function render() {\n    var h = arguments[0];\n\n    if (this.hidden) {\n      return null;\n    }\n\n    var config = this.config;\n    var ui = config.ui,\n        tree = config.tree;\n    var data = this.getTreeData();\n    return h(\"el-col\", {\n      \"attrs\": {\n        \"span\": ui.column\n      }\n    }, [h(\"el-form-item\", {\n      \"attrs\": {\n        \"prop\": config.field,\n        \"label-width\": config.ui.labelWidth,\n        \"label\": config.label\n      },\n      \"class\": \"mc-form-item\"\n    }, [h(\"div\", {\n      \"class\": \"form-tree\"\n    }, [h(\"el-tree\", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{\n      \"ref\": \"tree\",\n      \"attrs\": {\n        \"show-checkbox\": true,\n        \"data\": data\n      }\n    }, {\n      \"props\": tree.props\n    }, {\n      \"attrs\": {\n        \"node-key\": tree.nodeKey,\n        \"accordion\": tree.accordion,\n        \"empty-text\": tree.emptyText,\n        \"check-strictly\": tree.checkStrictly,\n        \"highlight-current\": tree.highlightCurrent,\n        \"default-expand-all\": tree.defaultExpandAll,\n        \"auto-expand-parent\": config.tree.autoExpandParent,\n        \"check-on-click-node\": tree.checkOnClickNode,\n        \"expand-on-click-node\": tree.expandOnClickNode\n      },\n      \"on\": {\n        \"check\": this.handleChange\n      }\n    }]))])])]);\n  },\n  mounted: function mounted() {\n    var _this2 = this;\n\n    this._equal = false;\n    this.$nextTick(function (_) {\n      return _this2.setCheckedKeys(_this2.value);\n    });\n  }\n});\n\n//# sourceURL=webpack://McForm/./packages/modules/tree.js?");

/***/ }),

/***/ "./packages/modules/upload.vue":
/*!*************************************!*\
  !*** ./packages/modules/upload.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _upload_vue_vue_type_template_id_4d0e964d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.vue?vue&type=template&id=4d0e964d& */ \"./packages/modules/upload.vue?vue&type=template&id=4d0e964d&\");\n/* harmony import */ var _upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.vue?vue&type=script&lang=js& */ \"./packages/modules/upload.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _upload_vue_vue_type_template_id_4d0e964d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _upload_vue_vue_type_template_id_4d0e964d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"packages/modules/upload.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://McForm/./packages/modules/upload.vue?");

/***/ }),

/***/ "./packages/modules/upload.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./packages/modules/upload.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./upload.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./packages/modules/upload.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://McForm/./packages/modules/upload.vue?");

/***/ }),

/***/ "./packages/modules/upload.vue?vue&type=template&id=4d0e964d&":
/*!********************************************************************!*\
  !*** ./packages/modules/upload.vue?vue&type=template&id=4d0e964d& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_4d0e964d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./upload.vue?vue&type=template&id=4d0e964d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./packages/modules/upload.vue?vue&type=template&id=4d0e964d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_4d0e964d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_4d0e964d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://McForm/./packages/modules/upload.vue?");

/***/ }),

/***/ "./utils/extend.js":
/*!*************************!*\
  !*** ./utils/extend.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return extend; });\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar hasOwn = Object.prototype.hasOwnProperty;\nvar toStr = Object.prototype.toString;\nvar defineProperty = Object.defineProperty;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar isArray = function isArray(arr) {\n  if (typeof Array.isArray === 'function') {\n    return Array.isArray(arr);\n  }\n\n  return toStr.call(arr) === '[object Array]';\n};\n\nvar isPlainObject = function isPlainObject(obj) {\n  if (!obj || toStr.call(obj) !== '[object Object]') {\n    return false;\n  }\n\n  var hasOwnConstructor = hasOwn.call(obj, 'constructor');\n  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf'); // Not own constructor property must be Object\n\n  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {\n    return false;\n  } // Own properties are enumerated firstly, so to speed up,\n  // if last one is own, then all properties are own.\n\n\n  var key;\n\n  for (key in obj) {\n    /**/\n  }\n\n  return typeof key === 'undefined' || hasOwn.call(obj, key);\n}; // If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target\n\n\nvar setProperty = function setProperty(target, options) {\n  if (defineProperty && options.name === '__proto__') {\n    defineProperty(target, options.name, {\n      enumerable: true,\n      configurable: true,\n      value: options.newValue,\n      writable: true\n    });\n  } else {\n    target[options.name] = options.newValue;\n  }\n}; // Return undefined instead of __proto__ if '__proto__' is not an own property\n\n\nvar getProperty = function getProperty(obj, name) {\n  if (name === '__proto__') {\n    if (!hasOwn.call(obj, name)) {\n      return void 0;\n    } else if (gOPD) {\n      // In early versions of node, obj['__proto__'] is buggy when obj has\n      // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.\n      return gOPD(obj, name).value;\n    }\n  }\n\n  return obj[name];\n};\n\nfunction extend() {\n  var options, name, src, copy, copyIsArray, clone;\n  var target = arguments[0];\n  var i = 1;\n  var length = arguments.length;\n  var deep = false; // Handle a deep copy situation\n\n  if (typeof target === 'boolean') {\n    deep = target;\n    target = arguments[1] || {}; // skip the boolean and the target\n\n    i = 2;\n  }\n\n  if (target == null || _typeof(target) !== 'object' && typeof target !== 'function') {\n    target = {};\n  }\n\n  for (; i < length; ++i) {\n    options = arguments[i]; // Only deal with non-null/undefined values\n\n    if (options != null) {\n      // Extend the base object\n      for (name in options) {\n        src = getProperty(target, name);\n        copy = getProperty(options, name); // Prevent never-ending loop\n\n        if (target !== copy) {\n          // Recurse if we're merging plain objects or arrays\n          if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {\n            if (copyIsArray) {\n              copyIsArray = false;\n              clone = src && isArray(src) ? src : [];\n            } else {\n              clone = src && isPlainObject(src) ? src : {};\n            } // Never move original objects, clone them\n\n\n            setProperty(target, {\n              name: name,\n              newValue: extend(deep, clone, copy)\n            }); // Don't bring in undefined values\n          } else if (typeof copy !== 'undefined') {\n            setProperty(target, {\n              name: name,\n              newValue: copy\n            });\n          }\n        }\n      }\n    }\n  } // Return the modified object\n\n\n  return target;\n}\n;\n\n//# sourceURL=webpack://McForm/./utils/extend.js?");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: slice, arrayToMap, getJsonValue, setJsonValue, hasOwn, setDefaultValue, firstUpperCase, isType, isObject, isString, isNumber, isDate, isFunction, isArray, isUndef, isEmptyValue, deepClone, isPrimitive, isOptions, isPicker, isInput, fieldIsUnnecessary, addFieldIsUnnecessary, isValidDxExpr, isDxExpr, genFn, genFns, genStateProps, error, setSymbolsFromNormals, setNormalsFromSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/array */ \"./utils/modules/array.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_0__[\"slice\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"arrayToMap\", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_0__[\"arrayToMap\"]; });\n\n/* harmony import */ var _modules_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/object */ \"./utils/modules/object.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getJsonValue\", function() { return _modules_object__WEBPACK_IMPORTED_MODULE_1__[\"getJsonValue\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setJsonValue\", function() { return _modules_object__WEBPACK_IMPORTED_MODULE_1__[\"setJsonValue\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hasOwn\", function() { return _modules_object__WEBPACK_IMPORTED_MODULE_1__[\"hasOwn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setDefaultValue\", function() { return _modules_object__WEBPACK_IMPORTED_MODULE_1__[\"setDefaultValue\"]; });\n\n/* harmony import */ var _modules_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/string */ \"./utils/modules/string.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"firstUpperCase\", function() { return _modules_string__WEBPACK_IMPORTED_MODULE_2__[\"firstUpperCase\"]; });\n\n/* harmony import */ var _modules_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/type */ \"./utils/modules/type.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isType\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isObject\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isNumber\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isDate\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isDate\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isFunction\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isArray\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isUndef\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isUndef\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEmptyValue\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyValue\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"deepClone\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isPrimitive\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isPrimitive\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isOptions\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isOptions\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isPicker\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isPicker\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isInput\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"isInput\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fieldIsUnnecessary\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"fieldIsUnnecessary\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addFieldIsUnnecessary\", function() { return _modules_type__WEBPACK_IMPORTED_MODULE_3__[\"addFieldIsUnnecessary\"]; });\n\n/* harmony import */ var _modules_dx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dx */ \"./utils/modules/dx.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isValidDxExpr\", function() { return _modules_dx__WEBPACK_IMPORTED_MODULE_4__[\"isValidDxExpr\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isDxExpr\", function() { return _modules_dx__WEBPACK_IMPORTED_MODULE_4__[\"isDxExpr\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"genFn\", function() { return _modules_dx__WEBPACK_IMPORTED_MODULE_4__[\"genFn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"genFns\", function() { return _modules_dx__WEBPACK_IMPORTED_MODULE_4__[\"genFns\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"genStateProps\", function() { return _modules_dx__WEBPACK_IMPORTED_MODULE_4__[\"genStateProps\"]; });\n\n/* harmony import */ var _modules_console__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/console */ \"./utils/modules/console.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return _modules_console__WEBPACK_IMPORTED_MODULE_5__[\"error\"]; });\n\n/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/state */ \"./utils/modules/state.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setSymbolsFromNormals\", function() { return _modules_state__WEBPACK_IMPORTED_MODULE_6__[\"setSymbolsFromNormals\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setNormalsFromSymbols\", function() { return _modules_state__WEBPACK_IMPORTED_MODULE_6__[\"setNormalsFromSymbols\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://McForm/./utils/index.js?");

/***/ }),

/***/ "./utils/modules/array.js":
/*!********************************!*\
  !*** ./utils/modules/array.js ***!
  \********************************/
/*! exports provided: slice, arrayToMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayToMap\", function() { return arrayToMap; });\nvar _slice = Array.prototype.slice;\nfunction slice(arrayLike) {\n  return _slice.call(arrayLike, 0);\n}\n/**\n * @param {Array} ary\n * @param {String} labelKey default label\n * @param {String} valueKey default value\n * @return {Object}\n * @description 将数组[{}, {}, {}, {}]转换为{[valueKey]: [labelKey]}\n */\n\nfunction arrayToMap(ary) {\n  var labelKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'label';\n  var valueKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';\n  return ary.reduce(function (ret, item) {\n    ret[item[valueKey]] = item[labelKey];\n    return ret;\n  }, {});\n}\n\n//# sourceURL=webpack://McForm/./utils/modules/array.js?");

/***/ }),

/***/ "./utils/modules/console.js":
/*!**********************************!*\
  !*** ./utils/modules/console.js ***!
  \**********************************/
/*! exports provided: error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\nvar hasConsole = typeof console !== 'undefined';\nfunction error(msg) {\n  if (hasConsole) {\n    console.error(msg);\n  }\n}\n\n//# sourceURL=webpack://McForm/./utils/modules/console.js?");

/***/ }),

/***/ "./utils/modules/dx.js":
/*!*****************************!*\
  !*** ./utils/modules/dx.js ***!
  \*****************************/
/*! exports provided: isValidDxExpr, isDxExpr, genFn, genFns, genStateProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidDxExpr\", function() { return isValidDxExpr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDxExpr\", function() { return isDxExpr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genFn\", function() { return genFn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genFns\", function() { return genFns; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genStateProps\", function() { return genStateProps; });\n/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console */ \"./utils/modules/console.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ \"./utils/modules/type.js\");\n\n\n/**\n * @param {String} expr\n * @return {Boolean}\n * @description 检验表达式是否合法，不允许赋值\n */\n\nfunction isValidDxExpr(expr) {\n  var inSingle = false;\n  var inDouble = false;\n\n  for (var i = 0; i < expr.length; i++) {\n    var ch = expr.charAt(i);\n    var before = expr.charAt(i - 2);\n    var prev = expr.charAt(i - 1);\n    var next = expr.charAt(i + 1);\n\n    switch (ch) {\n      case '\"':\n        if (prev === '\\\\') {\n          break;\n        }\n\n        inDouble = !inDouble;\n        break;\n\n      case '\\'':\n        if (prev === '\\\\') {\n          break;\n        }\n\n        inSingle = !inSingle;\n        break;\n\n      case '=':\n        if (inSingle || inDouble) {\n          break;\n        } // 对赋值操作做处理 = -= += *= /= >>= >>>= <<=\n\n\n        if (prev === '=' || next === '=' || prev === '!' || prev === '<' && before !== '<' || prev === '>' && before !== '>') {\n          break;\n        }\n\n        return false;\n\n      case '+':\n      case '-':\n        if (inSingle || inDouble) {\n          break;\n        } // 对赋值操作做处理 ++ --\n\n\n        if (prev === ch || next === ch) {\n          return false;\n        }\n\n        break;\n    }\n  }\n\n  return !inSingle && !inDouble;\n}\n/**\n * @param {String} expr\n * @return {Boolean}\n * @description 检测是否为dx表达式\n */\n\nfunction isDxExpr(expr) {\n  return typeof expr === 'string' && expr.substring(0, 3) === 'dx:';\n}\n/**\n * genFn辅助函数\n */\n\nfunction returnNull() {\n  return null;\n}\n/**\n * genFn辅助函数 为fn添加expr 后续判断expr一致的话将不再产生新函数\n */\n\n\nfunction addExpr(fn, expr) {\n  if (fn.__expr__ !== expr) {\n    fn.__expr__ = expr;\n  }\n\n  return fn;\n}\n/**\n * @param {*} expr\n * @return {Function}\n * @description 将expr表达式转换为函数\n */\n\n\nfunction genFn(expr) {\n  function handleError(msg) {\n    Object(_console__WEBPACK_IMPORTED_MODULE_0__[\"error\"])(msg);\n    return addExpr(returnNull, null);\n  }\n\n  if (!isDxExpr(expr)) {\n    if (!Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isPrimitive\"])(expr)) {\n      return handleError('reference value must use dx expression just like: \"dx:{{ [] }}\"');\n    }\n\n    return addExpr(function gen() {\n      return expr;\n    }, expr);\n  }\n\n  var reg = /\\{\\{([\\s\\S]+?)\\}\\}/;\n\n  if (reg.test(expr)) {\n    var exp = RegExp.$1.trim();\n\n    if (!isValidDxExpr(exp)) {\n      return handleError(\"invalid expression: \".concat(expr));\n    }\n    /* eslint-disable no-new-func */\n\n\n    try {\n      return addExpr(new Function('$state', \"\\n            try {\\n              return (\".concat(exp, \");\\n            } catch (e) {\\n              throw new Error('invalid expression: \").concat(expr, \"');\\n            }\\n          \")), expr);\n    } catch (e) {\n      return handleError(\"invalid expression: \".concat(expr));\n    }\n  }\n\n  return handleError(\"invalid expression: \".concat(expr));\n}\nfunction genFns(object) {\n  if (!Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isObject\"])(object)) {\n    return;\n  }\n\n  Object.keys(object).forEach(function (key) {\n    object[key] = genFn(object[key]);\n  });\n}\nvar ESCAPE_RE = /[-.*+?^${}()|[\\]/\\\\]/g;\n/**\n * @param {String} raw\n * @returns {RegExp}\n * @description 正则转义\n */\n\nfunction escapeRE(raw) {\n  return raw.replace(ESCAPE_RE, '\\\\$&');\n}\n\nvar FN_EXP_RE = /^(?:[\\w$_]+|\\(([^)]*?)\\))\\s*=>|^function(?:\\s+[\\w$_]+)?\\s*\\(([^)]*?)\\)/;\n/**\n * @param {Function} validator\n * @returns {Array}\n * @description 根据检验函数，返回必要的字段\n */\n\nfunction genStateProps(validator) {\n  var string = validator.toString();\n  var ret = [];\n\n  if (!FN_EXP_RE.test(string)) {\n    return ret;\n  }\n\n  var args = RegExp.$1 || RegExp.$2;\n\n  if (!args) {\n    return ret;\n  }\n\n  args = args.split(/\\s*,\\s*/);\n\n  if (args.length <= 3) {\n    return ret;\n  }\n\n  var arg = escapeRE(args[3]);\n  var reg = new RegExp(\"\".concat(arg, \"(?:\\\\.([\\\\w$_]+)|\\\\[(?:'([^']+)'|\\\"([^\\\"]+)\\\")\\\\])\"), 'g');\n  var match = null;\n\n  while (match = reg.exec(string)) {\n    ret.push(match[1] || match[2] || match[3]);\n  }\n\n  return ret;\n}\n\n//# sourceURL=webpack://McForm/./utils/modules/dx.js?");

/***/ }),

/***/ "./utils/modules/object.js":
/*!*********************************!*\
  !*** ./utils/modules/object.js ***!
  \*********************************/
/*! exports provided: getJsonValue, setJsonValue, hasOwn, setDefaultValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getJsonValue\", function() { return getJsonValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setJsonValue\", function() { return setJsonValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasOwn\", function() { return hasOwn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDefaultValue\", function() { return setDefaultValue; });\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ \"./utils/modules/type.js\");\n\n\nfunction formatPath(path) {\n  return path.replace(/\\[([\\w$'\"]+)\\]/g, function (_, prop) {\n    return '.' + prop.replace(/['\"]/g, '');\n  });\n}\n/**\n * @param {Object} json\n * @param {String} path\n * @returns {Any}\n * @description 根据path获取json里面的值\n */\n\n\nfunction getJsonValue(json, path) {\n  if (json == null) {\n    return json;\n  }\n\n  path = formatPath(path);\n  var paths = path.split('.');\n\n  for (var i = 0; i < paths.length; i++) {\n    json = json[paths[i]];\n\n    if (json == null) {\n      return json;\n    }\n  }\n\n  return json;\n}\n/**\n * @param {Object} json\n * @param {String} path\n * @param {Ang} value\n * @returns {Any}\n * @description 根据path获取json里面的值\n */\n\nfunction setJsonValue(json, path, value) {\n  if (json == null) {\n    return false;\n  }\n\n  path = formatPath(path);\n  var paths = path.split('.');\n  var prop = paths.pop();\n\n  for (var i = 0; i < paths.length; i++) {\n    json = json[paths[i]];\n\n    if (json == null) {\n      return false;\n    }\n  }\n\n  json[prop] = value;\n  return true;\n}\nvar _hasOwn = Object.prototype.hasOwnProperty;\n/**\n * @param {Object} obj\n * @param {String | Number} prop\n * @return {Boolean}\n * @description 判断对象是否拥有prop属性\n */\n\nfunction hasOwn(obj, prop) {\n  return _hasOwn.call(obj, prop);\n}\n/**\n * @param {Object} dest\n * @param {Object} src\n * @returns {undefined}\n * @description 当src存在 dest不存在时 src拷贝给dest\n */\n\nfunction setDefaultValue(dest, src) {\n  Object.keys(src).forEach(function (key) {\n    if (!hasOwn(dest, key)) {\n      dest[key] = Object(_type__WEBPACK_IMPORTED_MODULE_0__[\"deepClone\"])(src[key]);\n    }\n  });\n}\n\n//# sourceURL=webpack://McForm/./utils/modules/object.js?");

/***/ }),

/***/ "./utils/modules/state.js":
/*!********************************!*\
  !*** ./utils/modules/state.js ***!
  \********************************/
/*! exports provided: setSymbolsFromNormals, setNormalsFromSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSymbolsFromNormals\", function() { return setSymbolsFromNormals; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setNormalsFromSymbols\", function() { return setNormalsFromSymbols; });\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ \"./utils/modules/object.js\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ \"./utils/modules/type.js\");\n\n\nvar SYMBOL_RE = /[->&@]/;\n\nfunction isSymbolField(field) {\n  return !Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(field) && SYMBOL_RE.test(field);\n}\n\nvar SET_SYMBOLS_FROM_NORMALS_INTERATORS = [\n/**\n * @param {String} field\n * @param {Object} state\n * @description 范围字段设置，例如: state['a-b'] = [ state.a, state.b ]，主要应用于range相关的组件\n */\nfunction (field, state) {\n  var isRange = field.indexOf('-') > 0;\n\n  if (!isRange) {\n    return false;\n  }\n\n  var fields = field.split('-');\n\n  if (!Object(_object__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"])(state, fields[0]) && !Object(_object__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"])(state, fields[1])) {\n    return true;\n  }\n\n  var endValue = state[fields[1]];\n  var startValue = state[fields[0]]; // 对于空值的 统一为空\n\n  if (Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(startValue) && Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(endValue)) {\n    state[field] = null;\n  } else {\n    state[field] = [startValue, endValue];\n  }\n\n  return true;\n},\n/**\n * @param {String} field\n * @param {Object} state\n * @description 路径字段设置，例如state['a>b'] = state.a.b\n */\nfunction (field, state) {\n  var isPath = field.indexOf('>') > 0;\n\n  if (!isPath) {\n    return false;\n  }\n\n  var data = state;\n  var paths = field.split('>');\n\n  if (!Object(_object__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"])(state, paths[0])) {\n    return true;\n  }\n\n  var end = paths.length - 1;\n\n  for (var i = 0; i < end; i++) {\n    data = data[paths[i]];\n\n    if (Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(data)) {\n      state[field] = null;\n      return true;\n    }\n  }\n\n  var value = data[paths[end]];\n\n  if (Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(value)) {\n    state[field] = null;\n  } else {\n    state[field] = value;\n  }\n\n  return true;\n},\n/**\n * @param {String} field\n * @param {Object} state\n * @description 设置关联字段为数组\n * 例如字段 tagIds@tagNames, state = {tagIds: [1,2,3], tagNames: ['刘', '伟', '健']}\n * 会被设置为 state['tagIds@tagNames'] = [{id: 1, name: '刘'}, {id: 2, name: '伟'}, {id: 3, name: '健'}]\n */\nfunction (field, state) {\n  var isLinked = field.indexOf('@') > 0;\n\n  if (!isLinked) {\n    return false;\n  }\n\n  var fields = field.split('@');\n\n  if (!Object(_object__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"])(state, fields[0]) && !Object(_object__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"])(state, fields[1])) {\n    return true;\n  }\n\n  var ids = state[fields[0]];\n  var names = state[fields[1]];\n\n  if (Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(ids) && Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(names)) {\n    state[field] = null;\n    return true;\n  }\n\n  var ary = state[field] = [];\n\n  if (Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isArray\"])(ids) && Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isArray\"])(names)) {\n    ids.forEach(function (id, i) {\n      return ary.push({\n        id: id,\n        name: names[i]\n      });\n    });\n    return true;\n  }\n\n  ids = Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(ids) ? null : ids;\n  names = Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(names) ? null : names;\n  ary.push({\n    id: ids,\n    name: names\n  });\n  return true;\n},\n/**\n * @param {String} field\n * @param {Object} state\n * @description 设置关联字段为对象\n * 例如字段 tagId&tagName, state = {tagId: 1, tagName: '刘伟健'}\n * 会被设置为 state['tagId&tagName'] = { id: 1, name: '刘伟健' }\n */\nfunction (field, state) {\n  var isLinked = field.indexOf('&') > 0;\n\n  if (!isLinked) {\n    return false;\n  }\n\n  var fields = field.split('&');\n\n  if (!Object(_object__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"])(state, fields[0]) && !Object(_object__WEBPACK_IMPORTED_MODULE_0__[\"hasOwn\"])(state, fields[1])) {\n    return true;\n  }\n\n  var id = state[fields[0]];\n  var name = state[fields[1]];\n\n  if (Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(id) && Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(name)) {\n    state[field] = null;\n    return true;\n  }\n\n  id = Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(id) ? null : id;\n  name = Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(name) ? null : name;\n  state[field] = {\n    id: id,\n    name: name\n  };\n  return true;\n}];\n/**\n * @param {String} properties\n * @param {Object} state\n * @description 从普通字段中获取值并赋值到符号字段中\n */\n\nfunction setSymbolsFromNormals(state) {\n  this.config.properties.forEach(function (_ref) {\n    var field = _ref.field;\n\n    if (isSymbolField(field)) {\n      SET_SYMBOLS_FROM_NORMALS_INTERATORS.some(function (interator) {\n        return interator(field, state);\n      });\n    }\n  });\n  return state;\n}\nvar SET_NORMALS_FROM_SYMBOLS_INTERATORS = [\n/**\n * 处理state的范围字段\n * 例如：state['a-b'] = [1, 2]， 会被处理成state.a = 1, state.b = 2\n */\n\n/**\n * @param {String} field\n * @param {Object} state\n * @description 处理state的范围字段\n * 例如：state['a-b'] = [1, 2]， 会被处理成state.a = 1, state.b = 2\n */\nfunction (field, state) {\n  var isRange = field.indexOf('-') > 0;\n\n  if (!isRange) {\n    return false;\n  }\n\n  var ary = state[field];\n\n  if (!Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isArray\"])(ary)) {\n    ary = [ary, ary];\n  }\n\n  var fields = field.split('-');\n  state[fields[0]] = ary[0];\n  state[fields[1]] = ary[1];\n  delete state[field];\n  return true;\n},\n/**\n * 处理state的路径字段\n * 例如：state['a>b'] = 10 会被处理成 state.a = {b: 10};\n */\nfunction (field, state) {\n  var isPath = field.indexOf('>') > 0;\n\n  if (!isPath) {\n    return false;\n  }\n\n  var data = state;\n  var value = state[field];\n  var paths = field.split('>');\n  var end = paths.length - 1;\n\n  for (var i = 0; i < end; i++) {\n    var path = paths[i];\n\n    if (!Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isObject\"])(data[path]) && !Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isArray\"])(data[path])) {\n      data[path] = {};\n    }\n\n    data = data[path];\n  }\n\n  data[paths[end]] = value;\n  delete state[field];\n  return true;\n},\n/**\n * @param {String} field\n * @param {Object} state\n * @description\n * 将关联字段单个数组处理为多个数组\n * 例如 state['tagIds@tagNames'] = [{id: 1, name: '刘'}, {id: 2, name: '伟'}, {id: 3, name: '健'}]\n * 会被设置为 state.tagIds = [1,2,3], state.tagNames = ['刘', '伟', '健']\n */\nfunction (field, state) {\n  var isLinked = field.indexOf('@') > 0;\n\n  if (!isLinked) {\n    return false;\n  }\n\n  var ary = state[field];\n  var fields = field.split('@');\n\n  if (!Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isArray\"])(ary)) {\n    ary = [];\n  }\n\n  state[fields[0]] = ary.map(function (v) {\n    return v.id;\n  });\n  state[fields[1]] = ary.map(function (v) {\n    return v.name;\n  });\n  delete state[field];\n  return true;\n},\n/**\n * @param {String} field\n * @param {Object} state\n * @description\n * 将关联字段对象处理成单个字段\n * 例如 state['tagId&tagName'] = { id: 1, name: '刘伟健' }\n * 会被设置为 state.tagId = 1, state.tagName = '刘伟健'\n */\nfunction (field, state) {\n  var isLinked = field.indexOf('&') > 0;\n\n  if (!isLinked) {\n    return false;\n  }\n\n  var object = state[field];\n  var fields = field.split('&');\n\n  if (Object(_type__WEBPACK_IMPORTED_MODULE_1__[\"isEmptyValue\"])(object)) {\n    object = {\n      id: null,\n      name: null\n    };\n  }\n\n  state[fields[0]] = object.id;\n  state[fields[1]] = object.name;\n  delete state[field];\n  return true;\n}];\n/**\n * @param {Object} state\n * @description 从符号字段中获取值赋值到普通字段中，并删除符号字段\n */\n\nfunction setNormalsFromSymbols(state) {\n  Object.keys(state).forEach(function (field) {\n    if (isSymbolField(field)) {\n      SET_NORMALS_FROM_SYMBOLS_INTERATORS.some(function (interator) {\n        return interator(field, state);\n      });\n    }\n  });\n  return state;\n}\n\n//# sourceURL=webpack://McForm/./utils/modules/state.js?");

/***/ }),

/***/ "./utils/modules/string.js":
/*!*********************************!*\
  !*** ./utils/modules/string.js ***!
  \*********************************/
/*! exports provided: firstUpperCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstUpperCase\", function() { return firstUpperCase; });\n/**\n * @param {String} string\n * @returns {String}\n * @description 首字母大写\n */\nfunction firstUpperCase(string) {\n  return string.charAt(0).toUpperCase() + string.substring(1);\n}\n\n//# sourceURL=webpack://McForm/./utils/modules/string.js?");

/***/ }),

/***/ "./utils/modules/type.js":
/*!*******************************!*\
  !*** ./utils/modules/type.js ***!
  \*******************************/
/*! exports provided: isType, isObject, isString, isNumber, isDate, isFunction, isArray, isUndef, isEmptyValue, deepClone, isPrimitive, isOptions, isPicker, isInput, fieldIsUnnecessary, addFieldIsUnnecessary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isType\", function() { return isType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return isNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDate\", function() { return isDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUndef\", function() { return isUndef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmptyValue\", function() { return isEmptyValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone\", function() { return deepClone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPrimitive\", function() { return isPrimitive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isOptions\", function() { return isOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPicker\", function() { return isPicker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isInput\", function() { return isInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fieldIsUnnecessary\", function() { return fieldIsUnnecessary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFieldIsUnnecessary\", function() { return addFieldIsUnnecessary; });\n/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extend */ \"./utils/extend.js\");\n/* harmony import */ var _configs_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/map */ \"./configs/map.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar _toString = Object.prototype.toString;\n/**\n * @param {Any} type\n * @returns {Function}\n * @description 返回类型检测函数\n */\n\nfunction isType(type) {\n  return function _isType(o) {\n    return _toString.call(o) === \"[object \".concat(type, \"]\");\n  };\n}\nvar isObject = isType('Object');\nvar isString = isType('String');\nvar isNumber = isType('Number');\nvar isDate = isType('Date');\nvar isFunction = isType('Function');\nvar isArray = Array.isArray || isType('Array');\nfunction isUndef(v) {\n  return typeof v === 'undefined';\n}\n/**\n * @param {any} val\n * @return {Boolean}\n * @description 判断值是否为空值\n */\n\nfunction isEmptyValue(val) {\n  return val === '' || val == null;\n}\n/**\n * @param {Any} value\n * @returns {Any}\n * @description 深度拷贝\n */\n\nfunction deepClone(value) {\n  if (isArray(value)) {\n    value = Object(_extend__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true, [], value);\n  } else if (isObject(value)) {\n    value = Object(_extend__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true, {}, value);\n  }\n\n  return value;\n}\n/**\n * @param {Any} value\n * @returns {Boolean}\n * @description 判断是否为原始值\n */\n\nfunction isPrimitive(value) {\n  return typeof value === 'string' || typeof value === 'number' || value == null || typeof value === 'boolean' || _typeof(value) === 'symbol';\n}\n/**\n * @param {String} type\n * @returns {Boolean}\n * @description 判断是否为选项组件\n */\n\nfunction isOptions(type) {\n  return type === 'select' || type === 'radio' || type === 'checkbox';\n}\n/**\n * @param {String} type\n * @returns {Boolean}\n * @description 判断是否为日期组件\n */\n\nfunction isPicker(type) {\n  return _configs_map__WEBPACK_IMPORTED_MODULE_1__[\"pickers\"].indexOf(type) >= 0;\n}\n/**\n * @param {String} type\n * @returns {Boolean}\n * @description 判断是否为输入框组件\n */\n\nfunction isInput(type) {\n  return _configs_map__WEBPACK_IMPORTED_MODULE_1__[\"inputs\"].indexOf(type) >= 0;\n}\n/**\n * @param {String} type\n * @returns {Boolean}\n * @description 判断组件是否需要字段field，一些修饰型的组件不需要field字段\n */\n\nvar NO_FIELD_TYPES_MAP = Object.create(null);\n['plaintext', 'title', 'component'].forEach(function (type) {\n  return NO_FIELD_TYPES_MAP[type] = true;\n});\nfunction fieldIsUnnecessary(type) {\n  return !!NO_FIELD_TYPES_MAP[type];\n}\nfunction addFieldIsUnnecessary(type) {\n  NO_FIELD_TYPES_MAP[type] = true;\n}\n\n//# sourceURL=webpack://McForm/./utils/modules/type.js?");

/***/ })

/******/ });