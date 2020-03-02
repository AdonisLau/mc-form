<template>
  <el-form 
    @submit.native.prevent 
    :rules="rules" 
    :model="state"
    ref="form"
    class="mc-form"
    :label-width="labelWidth" 
    :inline="true">
    <el-row v-for="(row, index) in rows" :key="index" :gutter="gutter">
      <component 
        v-for="(config, key) in row"
        :key="key"
        :state="state"
        :rules="rules"
        :config="config"
        :gutter="gutter"
        :get-request="getRequest"
        :is="componentMap[config.type]"
        :ref="config.field || '__no_field__'"
        :value="config.field ? state[config.field] : null"
        @input="value => handleChange(config.field, value)"
        @click="handleClick"
        @update:array="updateArray"
        @update:object="updateObject"></component>
    </el-row>
  </el-form>
</template>


<script>
import COMPONENTS from './packages';
import { getRequest } from './http/instance';
import DEFAULT_CONFIGS, { componentMap } from './configs';
import {
  setSymbolsFromNormals, setNormalsFromSymbols,
  genStateProps, genFn, genFns, error, fieldIsUnnecessary, firstUpperCase, isDxExpr,
  setDefaultValue, isPicker, isInput, isOptions, isObject, isArray, isEmptyValue, isUndef, deepClone
} from './utils';

export default {
  name: 'McForm',

  props: {
    config: {
      type: Object,
      required: true,
      default: _ => ({})
    }
  },

  data() {
    let config = this.config;
    let symbol = !!config.symbol;
    let gutter = isEmptyValue(config.gutter) ? 20 : config.gutter;
    let labelWidth = isEmptyValue(config.labelWidth) ? '80px' : config.labelWidth;
    let { state, rows, rules } = this.process(config, labelWidth);

    return {
      rows,
      state,
      rules,
      // 不做响应
      symbol,
      gutter,
      labelWidth,
      getRequest,
      // 组件映射
      componentMap
    };
  },

  provide() {
    return {
      dangerousState: this.state
    };
  },

  methods: {
    setSymbolsFromNormals,
    setNormalsFromSymbols,
    /**
     * set [field] to [value] if undefined
     */
    processState(state, property) {
      let field = property.field;

      if (field && isUndef(state[field])) {
        this.$set(state, field, property.value);
      }
      // 删掉
      delete property.value;
    },
    /**
     * set [field] to [rules]
     */
    processRules(rules, property) {
      let _rules = property.rules;

      delete property.rules;

      if (!isArray(_rules)) {
        return;
      }

      _rules.forEach(rule => {
        if (!rule.validator) {
          return;
        }

        let old = rule.validator;
        let props = genStateProps(old);

        if (!props.length) {
          return;
        }

        // 此处会对validator作特殊处理，只传递必要的state
        rule.validator = (rule, value, callback) => {
          let state = {};

          props.forEach(prop => (state[prop] = deepClone(this.state[prop])));

          return old(rule, value, callback, state);
        };
      });

      this.$set(rules, property.field, _rules);
    },
    /**
     * 处理关联字段，绑定到watch，由于存在特殊字符，会在created中使用$watch监测
     */
    processLinkeds(property) {
      let field = property.field;
      let linkeds = property.linkeds;

      delete property.linkeds;

      if (isEmptyValue(field) || !isArray(linkeds)) {
        return;
      }

      this._watches_ || (this._watches_ = {});

      let watches = this._watches_[field] = {};

      linkeds.forEach(linked => {
        watches[linked.path] = {
          refresh: !!linked.refresh,
          value: genFn(linked.value),
        };
      });
    },
    /**
     * 这里对各种选项做默认处理
     */
    processDefaultConfig(option, property) {
      let type = property.type;
      let upper = firstUpperCase(option);
      let types = { isInput, isPicker, isOptions };

      if (
        option !== 'ui' &&
        option !== type &&
        (!types['is' + upper] || !types['is' + upper](type))
      ) {
        delete property[option];
        return;
      }

      let opts = property[option];

      if (!opts) {
        opts = property[option] = {};
      }

      setDefaultValue(opts, DEFAULT_CONFIGS[option]);

      if (isOptions(type)) {
        this.processOptions(opts);
      }
    },
    /**
     * 处理options
     */
    processOptions(opts) {
      // include exclude支持dx表达式
      (['include', 'exclude']).forEach(prop => {
        let value = opts[prop];

        if (isEmptyValue(value)) {
          return;
        }

        if (isDxExpr(value)) {
          opts[prop] = genFn(value);
        } else {
          value = deepClone(value);
          opts[prop] = _ => value;
        }
      });

      let ajax = opts.ajax;

      if (ajax) {
        // 转换为函数
        genFns(ajax.data);
        genFns(ajax.params);

        if (ajax.beforeSend) {
          ajax.beforeSend = genFn(ajax.beforeSend);
        }
      }
    },
    /**
     * 将disabled readonly hidden closable转换为函数
     */
    processReactives(property) {
      let ui = property.ui;

      (['disabled', 'readonly', 'hidden']).forEach(prop => {
        ui[prop] = genFn(ui[prop]);
      });

      let selector = property.selector;

      if (selector) {
        selector.closable = genFn(selector.closable);
      }

      let plaintext = property.plaintext;

      if (plaintext) {
        plaintext.text = genFn(plaintext.text);
      }
    },

    handleChange(field, value) {
      if (!field) {
        return;
      }

      this.state[field] = value;
      // 如果有事件绑定
      if (this.$listeners.change) {
        this.$emit('change', { field, value: deepClone(value) });
      }
    },
    /**
     * 处理事件
     */
    handleClick(event, args) {
      this.$emit(event, args);
    },
    /**
     * 生成field的快速映射 便于查找
     */
    fieldToProperty(property) {
      let field = property.field;

      if (!field) {
        return;
      }

      let map = this._map_ || (this._map_ = {});

      map[field] = property;
    },
    /**
     * 配置项分组 用于后续排版使用
     */
    join(properties, property) {

      if (!properties.length) {
        properties.push([property]);
        return;
      }

      const COLS = 24;
      // 赋值默认参数
      let ui = property.ui;
      let newline = false;
      let last = properties[properties.length - 1];
      // 不占位的 不需要换行
      if (ui.occupation) {
        // 强制换行
        if (ui.wrap) {
          newline = true;
        } else {
          // 排除掉不占位的计算总栏数
          let cols = last.filter(a => a.ui.occupation).reduce((a, b) => a + b.ui.column, 0);

          newline = ui.column + cols > COLS;
        }
      }

      newline ? properties.push([property]) : last.push(property);
    },

    setLabelWidth(property, labelWidth) {
      // 这里添加labelWidth
      if (isEmptyValue(property.ui.labelWidth)) {
        property.ui.labelWidth = labelWidth;
      }
    },

    processProperty(property, rows, rules, state, labelWidth) {
      let type = property.type;

      if (!type) {
        return error('property.type is required');
      }

      if (!componentMap[type]) {
        return error(`property.type: ${type}, is not supported yet`);
      }

      if (!fieldIsUnnecessary(type) && isEmptyValue(property.field)) {
        return error(`property.type: ${type}, 'field' is required`);
      }

      property = deepClone(property);

      this.processLinkeds(property);
      this.processState(state, property);
      this.processRules(rules, property);
      // 处理各种相关配置
      Object.keys(DEFAULT_CONFIGS).forEach(option => {
        this.processDefaultConfig(option, property);
      });

      this.setLabelWidth(property, labelWidth);
      this.processReactives(property);
      this.fieldToProperty(property);
      this.join(rows, property);
    },
    /**
     * 处理配置config
     */
    process(config, labelWidth) {
      let rows = [];
      let rules = {};
      let state = config.state ? deepClone(config.state) : {};

      config.properties.forEach(property => {
        this.processProperty(property, rows, rules, state, labelWidth);
      });
      // 存放原始state
      this._rawState = deepClone(state);

      return { state, rules, rows };
    },

    processWatches() {
      let watches = this._watches_;

      if (!watches) {
        return;
      }

      // 手动watch 因为字段有时候不符合规范
      Object.keys(watches).forEach(field => {
        this.$watch(
          function() {
            return this.state[field];
          },
          function() {
            this.notice(watches[field]);
          }
        );
      });

      delete this._watches_;
    },
    /**
     * 操作数组
     */
    updateArray(array, method, ...args) {
      array[method].apply(array, args);
    },
    /**
     * 操作对象
     */
    updateObject(object, field, value) {
      if (isObject(field)) {
        Object.keys(field).forEach(prop => this.$set(object, prop, field[prop]));
        return;
      }

      this.$set(object, field, value);
    },
    /**
     * 1、更新state
     * 2、触发选项获取
     */
    notice(linkeds) {
      let state = this.state;
      let map = this._state_map_;

      Object.keys(linkeds).forEach(key => {
        let linked = linkeds[key];
        // 如果state存在的话，就不重新设置
        if (!map || !map[key]) {
          try {
            state[key] = linked.value(state);
          } catch (e) {
            error(e.message);
            return;
          }
        }

        let components = this.$refs[key];

        if (
          linked.refresh &&
          components &&
          components.length
        ) {
          // 这里加个nextTick 因为子组件的数据尚未更新
          this.$nextTick(_ => {
            components.forEach(component => {
              component.fetchOptions().catch(e => {
                this.$message.error(e.message);
              });
            });
          });
        }
      });
    },
    /**
     * 对外api 获取state
     */
    getState(field) {
      if (isEmptyValue(field)) {
        let state = deepClone(this.state);

        if (this.symbol) {
          this.setNormalsFromSymbols(state);
        }

        return state;
      }

      return deepClone(this.state[field]);
    },

    /**
     * 对外api 校验表单
     * @returns { Promise }
     */
    validate() {
      return this.$refs.form.validate();
    },

    /**
     * 对外api 移除验证效果
     */
    clear() {
      return this.$refs.form.clearValidate();
    },

    /**
     * 对外api 设置state
     */
    setState(field, value, reset) {
      let state = null;

      if (isObject(field)) {
        reset = value;
        state = deepClone(field);
      } else {
        state = { [field]: deepClone(value) };
      }

      reset = !!reset;

      if (this.symbol) {
        this.setSymbolsFromNormals(state);
      }

      let keys = Object.keys(state);
      // 生成map 后续使用
      this._state_map_ = keys.reduce((o, k) => (o[k] = true) && o, {});

      if (reset) {
        let map = this._state_map_;
        // 删掉不存在的
        Object.keys(this.state).forEach(key => {
          if (!map[key]) {
            this.$delete(this.state, key);
          }
        });
        /**
         * 为什么不直接赋值？
         * 直接赋值后，provide便失效
         */
        // this.state = state;
      }

      keys.forEach(key => {
        this.$set(this.state, key, state[key]);
      });

      this.$nextTick(_ => (this._state_map_ = null));
    },

    /**
     * 对外api，设置disabled, readonly, hidden, closable
     * {
     *   name: {
     *     hidden: false
     *   }
     * }
     */
    setEditable(field, prop, expr) {
      let map = this._map_;
      let property = map && map[field];
      let props = ['disabled', 'readonly', 'hidden', 'closable'];

      if (!property || !props.some(p => p === prop)) {
        return;
      }

      let opt = prop === 'closable' ? property.selector : property.ui;
      // 表达式一样的 没必要重新赋值
      if (!opt || !opt[prop] || opt[prop].__expr__ === expr) {
        return;
      }

      this.$set(opt, prop, genFn(expr));
    },

    /**
     * 对外api 设置options选项
     */
    setOptions(field, prop, options) {
      let map = this._map_;
      let property = map && map[field];
      let props = ['data', 'include', 'exclude'];

      if (!property || props.indexOf(prop) < 0 || !isOptions(property.type)) {
        return;
      }

      if (prop === 'data') {
        this.$set(property.options, prop, deepClone(options));
        return;
      }

      if (isDxExpr(options)) {
        this.$set(property.options, prop, genFn(options));
      } else {
        options = deepClone(options);
        this.$set(property.options, prop, _ => options);
      }
    },
    /**
     * 对外api 重置表单
     */
    reset() {
      this.setState(this._rawState, true);

      this.$nextTick(this.clear);
    }
  },

  created() {
    this.processWatches();
    // 标识是否在setState
    this._state_map_ = null;
  },

  components: {
    ...COMPONENTS
  }
};
</script>
