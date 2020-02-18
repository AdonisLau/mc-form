export default {
  props: {
    state: {
      type: Object,
      required: true
    },

    config: {
      type: Object,
      required: true
    },

    value: {
      type: null,
      required: true
    },

    rules: {
      type: Object
    },

    gutter: {
      type: Number
    },

    getRequest: {
      type: Function
    }
  },

  computed: {
    hidden() {
      return this.config.ui.hidden(this.state);
    },

    disabled() {
      return this.config.ui.disabled(this.state);
    },

    readonly() {
      return this.config.ui.readonly(this.state);
    }
  }
};
