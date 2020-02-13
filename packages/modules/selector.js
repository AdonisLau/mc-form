import { PROPS_MIXIN } from '../../mixins';
import { isArray, isObject, deepClone } from '../../utils';
/**
 * selector组件
 */
export default {
  name: 'McSelector',

  mixins: [PROPS_MIXIN],

  data() {
    return {
      tags: [],
      equal: false
    };
  },

  computed: {
    closable() {
      return this.config.selector.closable(this.state);
    }
  },

  watch: {
    value: {
      immediate: true,

      handler(tags) {
        // 来自自身的emit 不做修改 避免二次渲染
        if (this.equal) {
          return;
        }

        if (!tags) {
          this.tags = [];
          return;
        }

        if (!isArray(tags)) {
          tags = [tags];
        }

        let selector = this.config.selector;

        this.tags = tags.map(tag => {
          if (!isObject(tag)) {
            tag = {
              [selector.label]: tag
            };
          }

          return deepClone(tag);
        });
      }
    }
  },

  methods: {
    getValue() {
      let tags = null;
      let selector = this.config.selector;

      if (isArray(this.value)) {
        tags = deepClone(this.tags);
      } else if (isObject(this.value)) {
        this.tags.length && (tags = deepClone(this.tags[0]));
      } else {
        this.tags.length && (tags = this.tags[0][selector.label]);
      }

      return tags;
    },

    handleClose(index) {

      this.tags.splice(index, 1);

      this.equal = true;

      this.$emit('input', this.getValue());
      this.$nextTick(_ => (this.equal = false));
    },

    handleClick() {
      let config = this.config;

      this.$emit('click', config.selector.event, { field: config.field, value: this.getValue() });
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
