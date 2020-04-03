
import { PROPS_MIXIN } from '../../mixins';
import { deepClone } from '../../utils';

/**
 * time-picker组件
 */
export default {
  name: 'McTimePicker',

  mixins: [PROPS_MIXIN],

  render(h) {
    if (this.hidden) {
      return null;
    }

    let { ui, picker, field, label } = this.config;
    let attrs = { attrs: deepClone(picker) };

    return (
      <el-col
        span={ ui.column }>
        <el-form-item prop={ field } labelWidth={ ui.labelWidth } label={ label } class="mc-form-item">
          <el-time-picker
            { ...attrs }
            size={ ui.size }
            value={ this.value }
            readonly={ this.readonly }
            disabled={ this.disabled }
            clearable={ ui.clearable }
            placeholder={ ui.placeholder }
            onInput={ value => this.$emit('input', value) }
            onChange={ value => this.$emit('change', value) }
            onBlur={ component => this.$emit('blur', component) }
            onFocus={ component => this.$emit('focus', component) }></el-time-picker>
        </el-form-item>
      </el-col>
    );
  }
};
