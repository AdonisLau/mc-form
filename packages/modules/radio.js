import { OPTIONS_MIXIN } from '../../mixins';

/**
 * radio组件
 */
export default {
  name: 'McRadio',

  mixins: [OPTIONS_MIXIN],

  data() {
    return {
      loading: false
    };
  },

  render(h) {
    if (this.hidden) {
      return null;
    }

    let config = this.config;
    let ui = config.ui;
    let radio = config.radio;

    let opts = config.options;
    let options = this.getOptions();

    return (
      <el-col
        span={ ui.column }>
        <el-form-item prop={ config.field } labelWidth={ ui.labelWidth } label={ config.label } class="mc-form-item">
          <el-radio-group
            size={ ui.size }
            fill={ radio.fill }
            value={ this.value }
            readonly={ this.readonly }
            disabled={ this.disabled }
            textColor={ radio.textColor }
            onInput={ value => this.$emit('input', value) }
            onChange={ value => this.$emit('change', value) }>
            {
              options.map((option, index) => {
                return (
                  <el-radio
                    key={ index }
                    border={ radio.border }
                    label={ option[opts.value] }>{ option[opts.label] }</el-radio>
                );
              })
            }
          </el-radio-group>
        </el-form-item>
      </el-col>
    );
  }
};
