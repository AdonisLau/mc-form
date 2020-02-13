/**
 * 树选项的默认值
 */

export default {
  // 展示数据
  data: null,
  // 内容为空的时候展示的文本
  emptyText: '暂无数据',
  // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
  nodeKey: 'id',
  // 配置选项
  props: {
    label: 'label',
    children: 'children'
  },
  // 是否高亮当前选中节点，默认值是 false
  highlightCurrent: false,
  // 是否默认展开所有节点
  defaultExpandAll: false,
  // 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点
  expandOnClickNode: true,
  // 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点
  checkOnClickNode: false,
  // 展开子节点的时候是否自动展开父节点
  autoExpandParent: true,
  // 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
  checkStrictly: false,
  // 是否每次只打开一个同级树节点展开
  accordion: false,
  // 是否懒加载子节点，需与 load 方法结合使用 暂未实现
  lazy: false,
  // 动态获取数据接口相关 暂未实现
  ajax: null,
  // 是否只获取选中的叶子节点
  leafOnly: false,
  // 是否包含半选节点
  includeHalfChecked: false,
  // 是否设置子节点
  deep: false
};
