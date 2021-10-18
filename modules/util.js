export default {
  capitalize([first, ...rest]) {
    if (typeof first === 'string') return `${first.toUpperCase()}${rest.join('').toLowerCase()}`;
  },

  getValueType(target, deepTest = false, customClassType = null) {
    // TODO Work on params
    if (target === null) return 'null';
    if (typeof target === 'undefined') return 'undefined';
    if (typeof target === 'object') {
      if (target instanceof Array || Array.isArray(target)) return 'array';
      if (target instanceof Date) return 'date';
      if (target instanceof Map) return 'map';
      if (target instanceof Set) return 'set';
      else return 'object'
    } else return typeof target;
  },

  help() {
    return `
    === Text ===
    
- capitalizeText([first, ...rest]);

- getValueType(target, deepTest = false, customClassType = null)
  `.trim();
  }

}