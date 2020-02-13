<template>
  <el-col
    v-if="!hidden"
    :span="config.ui.column">
    <el-form-item :prop="config.field" :label-width="config.ui.labelWidth" :label="config.label" class="mc-form-item">
      <div class="range-input-editor" :class="disabled ? 'disabled' : ''">
        <el-input
          :size="config.ui.size"
          :value="range0"
          :readonly="readonly"
          :disabled="disabled"
          :type="config.inputrange.type"
          :clearable="config.ui.clearable"
          :placeholder="config.inputrange.startPlaceholder"
          @input="value => handleInput('range0', value)"></el-input>

        <span class="separator">{{ config.inputrange.rangeSeparator }}</span>

        <el-input
          :size="config.ui.size"
          :value="range1"
          :readonly="readonly"
          :disabled="disabled"
          :type="config.inputrange.type"
          :clearable="config.ui.clearable"
          :placeholder="config.inputrange.endPlaceholder"
          @input="value => handleInput('range1', value)"></el-input>
      </div>
    </el-form-item>
  </el-col>
</template>


<script>
import { isArray } from '../../utils';
import { PROPS_MIXIN } from '../../mixins';

/**
 * input-range组件
 */
export default {
  name: 'McInputRange',

  mixins: [PROPS_MIXIN],

  data() {
    return {
      range0: null,
      range1: null,
      equal: false
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(value) {
        // 来自自身的emit 不做修改 避免二次渲染
        if (this.equal) {
          return;
        }

        if (!isArray(value)) {
          this.range0 = null;
          this.range1 = null;
          return;
        }

        this.range0 = value[0];
        this.range1 = value[1];
      }
    }
  },

  methods: {
    handleInput(prop, value) {
      this[prop] = value;

      let emitVal = [this.range0, this.range1];

      this.equal = true;

      this.$emit('input', emitVal);

      this.$nextTick(_ => (this.equal = false));
    }
  }
};
</script>

