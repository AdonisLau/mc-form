<template>
  <el-col
    v-if="!hidden"
    :span="config.ui.column">
    <el-form-item :prop="config.field" :label-width="config.ui.labelWidth" :label="config.label" class="mc-form-item">
      <div class="range-input-editor" :class="disabled ? 'disabled' : ''">
        <el-input
          :size="config.ui.size"
          v-model="range0"
          :readonly="readonly"
          :disabled="disabled"
          :type="config.inputrange.type"
          :clearable="config.ui.clearable"
          :placeholder="config.inputrange.startPlaceholder"></el-input>

        <span class="separator">{{ config.inputrange.rangeSeparator }}</span>

        <el-input
          :size="config.ui.size"
          v-model="range1"
          :readonly="readonly"
          :disabled="disabled"
          :type="config.inputrange.type"
          :clearable="config.ui.clearable"
          :placeholder="config.inputrange.endPlaceholder"></el-input>
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

  computed: {
    range0: {
      get() {
        let value = this.value;

        if (!isArray(value)) {
          return null;
        }

        return value[0];
      },

      set(v) {
        this.$emit('input', [v, this.range1]);
      }
    },

    range1: {
      get() {
        let value = this.value;

        if (!isArray(value)) {
          return null;
        }

        return value[1];
      },

      set(v) {
        this.$emit('input', [this.range0, v]);
      }
    }
  }
};
</script>

