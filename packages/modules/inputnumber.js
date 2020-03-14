import { PROPS_MIXIN } from '../../mixins';

/**
 * input组件
 */
export default {
  name: 'McInputNumber',

  mixins: [PROPS_MIXIN],

  render(h) {
    if (this.hidden) {
      return null;
    }

    let { ui, inputnumber, field, label } = this.config;

    return (
      <el-col
        span={ ui.column }>
        <el-form-item prop={ field } labelWidth={ui.labelWidth} label={ label } class="mc-form-item">
          <el-input-number
            size={ ui.size }
            value={ this.value || 0 }
            min={ inputnumber.min }
            max={ inputnumber.max }
            step={ inputnumber.step }
            stepStrictly={ inputnumber.stepStrictly }
            precision={ inputnumber.precision }
            controls={ inputnumber.controls }
            controlsPosition={ inputnumber.controlsPosition }
            readonly={ this.readonly }
            disabled={ this.disabled }
            clearable={ ui.clearable }
            placeholder={ ui.placeholder }
            onInput={ value => this.$emit('input', value) }></el-input-number>
        </el-form-item>
      </el-col>
    );
  }
};
