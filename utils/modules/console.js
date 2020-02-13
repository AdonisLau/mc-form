const hasConsole = typeof console !== 'undefined';
const isProduction = process.env.NODE_ENV === 'production';

export function error(msg) {
  if (!isProduction && hasConsole) {
    console.error(msg);
  }
}
