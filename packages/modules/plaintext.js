import { PROPS_MIXIN } from '../../mixins';

/**
 * 纯文本组件
 */
export default {
  name: 'McText',

  mixins: [PROPS_MIXIN],

  render(h) {
    if (this.hidden) {
      return null;
    }

    let state = this.state;
    let { ui, label, plaintext } = this.config;

    let TextComponent = (
      <div
        class={ 'mc-form-text align-' + plaintext.align + (plaintext.clsName ? ` ${plaintext.clsName}` : '') }>
        <span>{ plaintext.text(state) }</span>
      </div>
    );

    return (
      <div class="mc-col">
        {
          label != null ?
            (
              <el-form-item label={ label } labelWidth={ui.labelWidth} class="mc-form-item">{ TextComponent }</el-form-item>
            ) :
            TextComponent
        }
      </div>
    );
  }
};
