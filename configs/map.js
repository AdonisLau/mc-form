export let inputs = 'text|number|password|textarea'.split('|');
export let pickers = 'year|month|date|dates|week|datetime|datetimerange|daterange|monthrange'.split('|');

export let componentMap = {
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
  inputnumber: 'mc-input-number',
  component: 'mc-component'
};

inputs.forEach(name => { componentMap[name] = 'mc-input' });
pickers.forEach(name => { componentMap[name] = 'mc-date-picker' });
