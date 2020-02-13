<template>
  <el-col
    v-if="!hidden"
    :span="config.ui.column">
    <component v-if="config.component" :is="config.component" :gutter="gutter" :state="state" :config="config" @update:object="updateObject" @update:array="updateArray"></component>
  </el-col>
</template>

<script>
import { PROPS_MIXIN } from '../../mixins';

export default {
  name: 'McComponent',

  mixins: [PROPS_MIXIN],

  methods: {
    updateObject(...args) {
      this.$emit('update:object', ...args);
    },

    updateArray(...args) {
      this.$emit('update:array', ...args);
    }
  }
};
</script>

