import { OPTIONS_MIXIN } from '../../mixins';
import { isArray } from '../../utils';

/**
 * input组件
 */
export default {
  name: 'McCheckbox',

  mixins: [OPTIONS_MIXIN],

  data() {
    return {
      loading: false
    };
  },

  methods: {
    handleCheckAllChange(checked) {
      if (!checked) {
        return this.handleCheckChange([]);
      }

      let options = this.getOptions();
      let opts = this.config.options;

      this.handleCheckChange(options.map(opt => opt[opts.value]));
    },

    handleCheckChange(value) {
      this.$emit('input', value);
    }
  },

  render(h) {
    if (this.hidden) {
      return null;
    }

    let checkAll = false;
    let indeterminate = false;

    let config = this.config;
    let ui = config.ui;

    let opts = config.options;
    let options = this.getOptions();

    // 添加一个全选 有点头疼
    if (opts.checkAll && isArray(this.value)) {
      let map = this.value.reduce((m, v) => (m[v] = true) && m, {});

      checkAll = options.every(opt => map[opt[opts.value]] >= 0);
      indeterminate = !checkAll && options.some(opt => map[opt[opts.value]] >= 0);
    }

    return (
      <el-col
        span={ ui.column }>
        <el-form-item prop={ config.field } labelWidth={ui.labelWidth} label={ config.label } class="mc-form-item">
          {
            opts.checkAll && !!options.length && (
              <div class="mc-check-all">
                <el-checkbox readonly={ this.readonly } disabled={ this.disabled } value={ checkAll } indeterminate={ indeterminate } onInput={ this.handleCheckAllChange }>全选</el-checkbox>
              </div>
            )
          }

          <el-checkbox-group
            class="mc-checkbox-group"
            size={ ui.size }
            value={ this.value }
            readonly={ this.readonly }
            disabled={ this.disabled }
            onInput={ this.handleCheckChange }>
            {
              options.map((option, index) => {
                return (
                  <el-checkbox
                    key={ index }
                    label={ option[opts.value] }>{ option[opts.label] }</el-checkbox>
                );
              })
            }
          </el-checkbox-group>
        </el-form-item>
      </el-col>
    );
  }
};
