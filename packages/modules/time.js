
import { PROPS_MIXIN } from '../../mixins';

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

    return (
      <el-col
        span={ ui.column }>
        <el-form-item prop={ field } labelWidth={ui.labelWidth} label={ label } class="mc-form-item">
          <el-time-picker
            size={ ui.size }
            value={ this.value }
            editable={ picker.editable }
            readonly={ this.readonly }
            disabled={ this.disabled }
            clearable={ ui.clearable }
            placeholder={ ui.placeholder }
            startPlaceholder={ ui.startPlaceholder }
            endPlaceholder={ ui.endPlaceholder }
            format={ ui.format || null }
            rangeSeparator={ ui.rangeSeparator }
            valueFormat={ ui.valueFormat || null }
            pickerOptions={ ui.pickerOptions }
            isRange={ ui.isRange }
            arrowControl={ ui.arrowControl }
            onInput={ value => this.$emit('input', value) }></el-time-picker>
        </el-form-item>
      </el-col>
    );
  }
};
