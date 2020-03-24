/**
 * 这里针对选项 select checkbox radio 作处理
 */
import PROPS_MIXIN from './props';
import extend from '../utils/extend';
import { error, getJsonValue, isObject, isArray, isFunction, isUndef } from '../utils';

export default {
  mixins: [PROPS_MIXIN],

  data() {
    return {
      once: false,
      options: []
    };
  },

  created() {
    let opts = this.config.options;

    let ajax = opts.ajax;

    if (ajax) {
      this.init();
    }
  },

  watch: {
    hidden() {
      this.init();
    }
  },

  methods: {
    genData(object) {
      let ret = {};

      if (!isObject(object)) {
        return ret;
      }

      Object.keys(object).forEach(key => {
        try {
          ret[key] = object[key](this.state);
        } catch (e) {
          error(e.message);
          ret[key] = null;
        }
      });

      return ret;
    },

    beforeSend(ajax) {
      let beforeSend = ajax.beforeSend;

      if (!beforeSend) {
        return true;
      }

      try {
        return beforeSend(this.state);
      } catch (e) {
        error(e.message);
      }

      return false;
    },

    fetchOptions(priority) {
      let opts = this.config.options;
      let ajax = opts.ajax;

      if (!ajax) {
        return Promise.reject(new Error('options.ajax is required'));
      }

      this.options = [];

      if (!this.beforeSend(ajax)) {
        return Promise.resolve([]);
      }

      this.loading = true;

      let data = this.genData(ajax.data);
      let params = this.genData(ajax.params);

      if (isObject(priority)) {
        isObject(priority.data) && extend(data, priority.data);
        isObject(priority.params) && extend(params, priority.params);
      }

      let promise = null;

      if (ajax.request) {
        promise = ajax.request(data, params);
      } else {
        let request = this.getRequest();

        promise = request(
          {
            data,
            params,
            url: ajax.url,
            method: ajax.method || 'get'
          }
        );
      }

      return promise.then(res => {
        let path = ajax.path;

        if (isUndef(path)) {
          path = 'recordList || content';
        }

        let data = null;

        if (!path) {
          data = res;
        } else {
          let paths = path.split(/\s*\|\|\s*/);

          paths.some(prop => {
            data = getJsonValue(res, prop);

            if (data) {
              return true;
            }
          });
        }

        this.loading = false;
        // 这里对额外参数进行处理
        this.options = data || [];
      }).catch(e => {
        this.options = [];
        this.loading = false;

        return Promise.reject(e);
      });
    },

    // 处理额外的选项 只针对异步获取的选项
    handleAdditional(options) {
      let config = this.config;
      let opts = config.options;
      let additional = opts.additional;

      if (isObject(additional)) {
        options = options.slice();

        options.unshift({
          [opts.label]: additional.label,
          [opts.value]: additional.value
        });
      }

      return options;
    },

    getOptions() {
      let opts = this.config.options;
      let options = opts.ajax ? this.options : opts.data;

      // 处理store
      if (typeof options === 'string') {
        options = getJsonValue(this.$store, options) || [];
      }

      let include = opts.include;

      if (isFunction(include) && isArray((include = include(this.state)))) {
        options = options.filter(option => include.some(val => val === option[opts.value]));
      }

      let exclude = opts.exclude;

      if (isFunction(exclude) && isArray((exclude = exclude(this.state)))) {
        options = options.filter(option => exclude.every(val => val !== option[opts.value]));
      }

      options = this.handleAdditional(options);

      return options;
    },

    init() {
      // 已经初始化的 或者已经隐藏的 不再做初始化处理
      if (this.once || this.hidden) {
        return;
      }

      this.once = true;

      let ajax = this.config.options.ajax;
      // 远程搜索 或者 设置非自动获取 就不管了
      if (!ajax || !!ajax.remote || ajax.auto === false) {
        return;
      }

      this.fetchOptions().catch(e => error('fetch options failed'));
    }
  },
};
