import { PROPS_MIXIN } from '../../mixins';
import { isArray, isObject, deepClone } from '../../utils';
/**
 * selector组件
 */
export default {
  name: 'McSelector',

  mixins: [PROPS_MIXIN],

  computed: {
    closable() {
      return this.config.selector.closable(this.state);
    },

    tags() {
      let tags = this.value;

      if (!tags) {
        return [];
      }

      if (!isArray(tags)) {
        tags = [tags];
      }

      let label = this.config.selector.label;

      return tags.map(tag => {
        if (!isObject(tag)) {
          tag = {
            [label]: tag
          };
        }

        return tag;
      });
    }
  },

  methods: {
    genValue(tags) {
      let val = null;
      let selector = this.config.selector;

      if (isArray(this.value)) {
        val = deepClone(tags);
      } else if (isObject(this.value)) {
        tags.length && (val = deepClone(tags[0]));
      } else {
        tags.length && (val = tags[0][selector.label]);
      }

      return val;
    },

    handleClose(index) {
      let tags = this.tags.filter((_, i) => i !== index);

      this.$emit('input', this.genValue(tags));
    },

    handleClick() {
      let config = this.config;

      this.$emit('click', config.selector.event, { field: config.field, value: this.genValue(this.tags) });
    }
  },

  render(h) {
    if (this.hidden) {
      return null;
    }

    let config = this.config;
    let { ui, selector } = config;
    let editable = !(this.disabled || this.readonly);
    let closable = editable && this.closable;

    return (
      <el-col
        span={ ui.column }
        style={ ui.aequilate ? { width: `calc(${ui.column / 24 * 100 + '%'} - ${ui.labelWidth})` } : {} }>
        <el-form-item prop={ config.field } labelWidth={ui.labelWidth} label={ config.label } class="mc-form-item">
          {
            this.tags.map((tag, index) => {
              return (
                <el-tag
                  class="mc-selector-tag"
                  key={ index }
                  size={ selector.size }
                  closable={ closable }
                  disableTransitions={ true }
                  onClose={ _ => this.handleClose(index) }>
                  { tag[selector.label] }
                </el-tag>);
            })
          }
          { editable && <el-button
            class="mc-selector-btn"
            size={ ui.size }
            type={ selector.type }
            icon={ selector.icon ? selector.icon : '' }
            onClick={ _ => this.handleClick() }>{ selector.text }</el-button>
          }
        </el-form-item>
      </el-col>
    );
  }
};
