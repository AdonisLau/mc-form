export let inputs = 'text|number|password|textarea'.split('|');
export let pickers = 'year|month|date|dates|week|datetime|datetimerange|daterange|monthrange'.split('|');

let map = {
  tree: 'mc-tree',
  title: 'mc-title',
  radio: 'mc-radio',
  select: 'mc-select',
  upload: 'mc-upload',
  plaintext: 'mc-text',
  time: 'mc-time-picker',
  selector: 'mc-selector',
  checkbox: 'mc-checkbox',
  inputrange: 'mc-input-range',
  editor: 'mc-editor',
  component: 'mc-component'
};

inputs.forEach(name => { map[name] = 'mc-input' });
pickers.forEach(name => { map[name] = 'mc-date-picker' });

export const COMP_MAP = map;