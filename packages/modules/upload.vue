<template>
  <el-col
    v-if="!hidden"
    :span="config.ui.column">
    <el-form-item :prop="config.field" :label-width="config.ui.labelWidth" :label="config.label" ref="item" class="mc-form-item">
      <el-upload
        v-if="multiple"
        class="uploader"
        :data="config.upload.data"
        :class="{'uploader-readonly': disabled || readonly}"
        :action="config.upload.action"
        :accept="config.upload.accept"
        :headers="config.upload.headers"
        :disabled="disabled || readonly"
        :show-file-list="true"
        :file-list="files"
        :multiple="true"
        :name="config.upload.name"
        list-type="picture-card"
        :auto-upload="true"
        :limit="config.upload.limit"
        :on-remove="handleRemove"
        :on-error="handleMultipleError"
        :on-success="handleMultipleSuccess"
        :on-exceed="handleExceed"
        :before-upload="beforeUpload">
        <i class="el-icon-plus"></i>
        <div slot="tip" class="el-upload__tip" v-if="config.upload.tip">{{config.upload.tip}}</div>
      </el-upload>
      <el-upload
        v-else
        ref="uploader"
        class="uploader"
        :data="config.upload.data"
        :action="config.upload.action"
        :accept="config.upload.accept"
        :headers="config.upload.headers"
        :disabled="disabled || readonly"
        :show-file-list="false"
        :multiple="false"
        :name="config.upload.name"
        :auto-upload="true"
        :on-error="handleSingleError"
        :on-success="handleSingleSuccess"
        :before-upload="beforeUpload">
        <div class="el-upload--picture-card">
          <img class="img" :src="files[0].url" v-if="files.length && files[0].url"></img>
          <i class="el-icon-plus" v-else></i>
        </div>
        <div slot="tip" class="el-upload__tip" v-if="config.upload.tip">{{config.upload.tip}}</div>
      </el-upload>
    </el-form-item>
  </el-col>
</template>

<script>
import { PROPS_MIXIN } from '../../mixins';
import { isString, isFunction } from '../../utils';

export default {
  name: 'McUpload',

  mixins: [PROPS_MIXIN],

  data() {
    return {
      files: []
    };
  },

  computed: {
    multiple() {
      return this.config.upload.multiple;
    }
  },

  watch: {
    value: {
      immediate: true,

      handler(urls) {
        // 来自自身的emit 不做修改 避免二次渲染
        if (this._equal) {
          return;
        }

        // 空就清空
        if (!urls) {
          this.files = [];
          return;
        }

        if (isString(urls)) {
          urls = [urls];
        }

        this.files = urls.map(url => {
          return {
            url,
            uri: url,
          };
        });
      }
    }
  },

  methods: {
    notice(files) {
      let multiple = this.multiple;

      files = files.filter(file => !!file.uri);

      if (multiple) {
        files = files.map(file => file.uri);
      } else {
        files = !files.length ? null : files[0].uri;
      }

      this._equal = true;
      this.$emit('input', files);

      let component = this.$refs.item;

      component.$emit('el.form.change');

      this.$nextTick(_ => (this._equal = false));
    },

    handleRemove(_, files) {
      this.notice(files);
    },

    revoke(url) {
      if (/^blob:/.test(url)) {
        URL.revokeObjectURL(url);
      }
    },

    handleBeforeUpload(blob) {
      let config = this.config.upload;
      let limitSize = config.limitSize;

      if (limitSize) {
        let lt = limitSize < blob.size / 1024 / 1024;

        if (lt) {
          return Promise.reject(new Error(`上传图片大小不能超过 ${limitSize}MB!`));
        }
      }

      if (!this.multiple) {
        let file = this.files[0];

        if (!file) {
          this.files.push({ url: URL.createObjectURL(blob) });
        } else {
          let url = file.url;

          file.url = URL.createObjectURL(blob);

          this.revoke(url);
        }
      }

      return Promise.resolve();
    },

    beforeUpload(blob) {
      let promise = null;
      let config = this.config.upload;

      if (isFunction(config.beforeUpload)) {
        let ret = config.beforeUpload(blob);

        if (ret === false) {
          return false;
        }

        if (ret && isFunction(ret.then) && isFunction(ret.catch)) {
          promise = ret;
        }
      }

      return (promise || Promise.resolve())
        .then(_ => this.handleBeforeUpload(blob))
        .catch(e => {
          this.$message.error(e.message);
          return Promise.reject(e);
        });
    },

    handleMultipleSuccess(res, file, files) {
      let ret = this.config.upload.onSuccess(res);

      if (!ret.success) {
        this.$message.error(ret.message);
        files.splice(files.indexOf(file), 1);
        return;
      }

      file.uri = ret.uri;

      this.notice(files);
    },

    handleSingleSuccess(res, file, files) {
      let ret = this.config.upload.onSuccess(res);

      this.$refs.uploader.clearFiles();

      if (!ret.success) {
        this.$message.error(ret.message);
        return;
      }

      file.uri = ret.uri;

      this.notice([ file ]);
    },

    handleSingleError() {
      this.$message.error('上传失败');

      let file = this.files[0];
      let url = file.url;

      file.url = file.uri;

      this.revoke(url);
    },

    handleMultipleError() {
      this.$message.error('上传失败');
    },

    handleExceed() {
      return this.$message.error(`最多只能上传${this.config.upload.limit}张图片`);
    }
  },

  created() {
    this._equal = false;
  }
};
</script>

