import { PROPS_MIXIN } from '../../mixins';
import { deepClone } from '../../utils';

/**
 * input组件
 */
export default {
  name: 'McColor',

  mixins: [PROPS_MIXIN],

  methods: {
    handleChange(value) {
      this.$emit('input', value);
      this.$emit('change', value);
    }
  },

  render(h) {
    if (this.hidden) {
      return null;
    }

    let { ui, color, field, label } = this.config;
    let attrs = { attrs: deepClone(color) };

    return (
      <el-col
        span={ ui.column }>
        <el-form-item prop={ field } labelWidth={ ui.labelWidth } label={ label } class="mc-form-item" ref="item">
          <el-color-picker
            { ...attrs }
            size={ ui.size }
            value={ this.value }
            disabled={ this.disabled }
            onInput={ this.handleChange }></el-color-picker>
        </el-form-item>
      </el-col>
    );
  }
};
