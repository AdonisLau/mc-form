import { error, deepClone } from '../../utils';
import { OPTIONS_MIXIN } from '../../mixins';

/**
 * select组件
 */
export default {
  name: 'McSelect',

  mixins: [OPTIONS_MIXIN],

  data() {
    return {
      loading: false
    };
  },

  computed: {
    remote() {
      let ajax = this.config.options.ajax;

      return !!(ajax && ajax.remote);
    }
  },

  methods: {
    handleRemote(kw) {
      if (!kw) {
        this.options = [];
        return;
      }

      let ajax = this.config.options.ajax;
      let key = ajax.remote;

      let q = { };
      let method = (ajax.method || 'get').toLowerCase();

      if (method === 'get') {
        q.params = { [key]: kw };
      } else {
        q.data = { [key]: kw };
      }

      this.fetchOptions(q).catch(_ => error('fetch options failed'));
    }
  },

  render(h) {
    if (this.hidden) {
      return null;
    }

    let config = this.config;
    let ui = config.ui;

    let opts = config.options;
    let select = config.select;
    let options = this.getOptions();
    let attrs = { attrs: deepClone(select) };

    return (
      <el-col
        span={ ui.column }>
        <el-form-item prop={ config.field } labelWidth={ ui.labelWidth } label={ config.label } class="mc-form-item">
          <el-select
            { ...attrs }
            size={ ui.size }
            value={ this.value }
            remote={ this.remote }
            loading={ this.loading }
            readonly={ this.readonly }
            disabled={ this.disabled }
            clearable={ ui.clearable }
            placeholder={ ui.placeholder }
            remote-method={ this.handleRemote }
            onInput={ value => this.$emit('input', value) }
            onChange={ value => this.$emit('change', value) }
            onBlur={ event => this.$emit('blur', event) }
            onFocus={ event => this.$emit('focus', event) }>
            {
              options.map((option, index) => {
                return (
                  <el-option
                    key={ index }
                    label={ option[opts.label] }
                    value={ option[opts.value] }></el-option>
                );
              })
            }
          </el-select>
        </el-form-item>
      </el-col>
    );
  }
};
