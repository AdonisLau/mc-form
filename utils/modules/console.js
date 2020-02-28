const hasConsole = typeof console !== 'undefined';

export function error(msg) {
  if (hasConsole) {
    console.error(msg);
  }
}
