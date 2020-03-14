<template>
  <el-col
    v-if="!hidden"
    :span="config.ui.column">
    <el-form-item :prop="config.field" :label-width="config.ui.labelWidth" :label="config.label" ref="item" class="mc-form-item">
      <el-upload
        class="uploader"
        :data="config.upload.data"
        :class="{'uploader-readonly': disabled || readonly}"
        :action="config.upload.action"
        :accept="config.upload.accept"
        :headers="config.upload.headers"
        :disabled="disabled || readonly"
        :show-file-list="true"
        :file-list="files"
        :multiple="multiple"
        :name="config.upload.name"
        :list-type="config.upload.listType"
        :auto-upload="true"
        :limit="config.upload.limit"
        :on-remove="handleRemove"
        :on-error="handleError"
        :on-success="handleSuccess"
        :on-exceed="handleExceed"
        :before-upload="beforeUpload">
        <i class="el-icon-plus" v-if="config.upload.listType === 'picture-card'"></i>
        <el-button :size="config.ui.size" type="primary" v-else>点击上传</el-button>
        <div slot="tip" class="el-upload__tip" v-if="config.upload.tip">{{config.upload.tip}}</div>
      </el-upload>
    </el-form-item>
  </el-col>
</template>

<script>
import { PROPS_MIXIN } from '../../mixins';
import { isObject, isFunction, isArray } from '../../utils';

const FILE_NAME_RE = /((?:[^./]+)\.(?:[^.]+))$/;

function getFileName(url) {
  if (FILE_NAME_RE.test(url)) {
    return RegExp.$1;
  }

  return '';
}

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
    },
  },

  watch: {
    value: {
      immediate: true,

      handler(fileList) {
        // 来自自身的emit 不做修改 避免二次渲染
        if (this._equal) {
          return;
        }

        // 空就清空
        if (!fileList) {
          this.files = [];
          return;
        }

        let files = [];

        if (!isArray(fileList)) {
          fileList = [ fileList ];
        }

        fileList.forEach(file => {
          if (isObject(file)) {
            files.push({
              url: file.url,
              uri: file.uri,
              name: file.name
            });
          } else {
            files.push({
              url: file,
              uri: file,
              name: getFileName(file)
            });
          }
        });

        this.files = files;
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

    handleBeforeUpload(blob) {
      let config = this.config.upload;
      let limitSize = config.limitSize;

      if (limitSize) {
        let lt = limitSize < blob.size / 1024 / 1024;

        if (lt) {
          return Promise.reject(new Error(`上传文件大小不能超过 ${limitSize}MB!`));
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

    handleSuccess(res, file, files) {
      let index = files.indexOf(file);
      let ret = this.config.upload.onSuccess(res);

      if (!ret.success) {
        this.$message.error(ret.message);
        files.splice(index, 1);
        return;
      }

      file.uri = ret.uri;

      if (!this.multiple) {
        files = [ file ];
        this.files = [ file ];
      }

      this.notice(files);
    },

    handleError() {
      this.$message.error('上传失败');
    },

    handleExceed() {
      return this.$message.error(`最多只能上传${this.config.upload.limit}份文件`);
    }
  },

  created() {
    this._equal = false;
  }
};
</script>

