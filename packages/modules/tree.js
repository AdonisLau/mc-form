import { PROPS_MIXIN } from '../../mixins';
import { getJsonValue } from '../../utils';

export default {
  name: 'McTree',

  mixins: [PROPS_MIXIN],

  props: {
    value: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  watch: {
    value: 'setCheckedKeys'
  },

  methods: {
    notice(keys) {
      this.equal = true;
      this.$emit('input', keys);
      this.$emit('change', keys);
      this.$nextTick(_ => (this.equal = false));
    },

    handleChange() {
      let tree = this.$refs.tree;
      let config = this.config.tree;
      let nodes = tree.getCheckedNodes(config.leafOnly, config.includeHalfChecked);
      let keys = nodes.map(node => node[config.nodeKey]);

      this.notice(keys);
    },

    setCheckedKeys(keys) {
      // 来自自身的emit 不做修改 避免二次渲染
      if (this.equal) {
        return;
      }

      if (!keys) {
        keys = [];
      }

      let tree = this.$refs.tree;
      let config = this.config.tree;
      // 清空原来的选中
      tree.setCheckedKeys([]);
      // 再重新设置
      keys.forEach(key => tree.setChecked(key, true, config.deep));
    },

    getTreeData() {
      let data = this.config.tree.data;

      // 处理store
      if (typeof data === 'string') {
        data = getJsonValue(this.$store, data) || [];
      }

      return data;
    }
  },

  render() {
    if (this.hidden) {
      return null;
    }

    let config = this.config;
    let { ui, tree } = config;
    let data = this.getTreeData();

    return (
      <el-col
        span={ ui.column }>
        <el-form-item prop={ config.field } label-width={ config.ui.labelWidth } label={ config.label } class="mc-form-item">
          <div class="form-tree">
            <el-tree
              ref="tree"
              show-checkbox
              data={ data }
              props={ tree.props }
              node-key={ tree.nodeKey }
              accordion={ tree.accordion }
              empty-text={ tree.emptyText }
              check-strictly={ tree.checkStrictly }
              highlight-current={ tree.highlightCurrent }
              default-expand-all={ tree.defaultExpandAll }
              auto-expand-parent={ config.tree.autoExpandParent }
              check-on-click-node={ tree.checkOnClickNode }
              expand-on-click-node={ tree.expandOnClickNode }
              onCheck={ this.handleChange }></el-tree>
          </div>
        </el-form-item>
      </el-col>
    );
  },

  mounted() {
    this.equal = false;
    this.$nextTick(_ => this.setCheckedKeys(this.value));
  }
};
