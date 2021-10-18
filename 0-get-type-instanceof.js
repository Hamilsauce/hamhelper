export const getValueType = (target, customClassType = false, deepTest = null) => {
  // TODO Work on params

  return customClassType === true ?
    null : () => {
      if (target === null) return 'null';
      if (typeof target === 'undefined') return 'undefined';
      if (typeof target === 'object') {
        if (target instanceof Array || Array.isArray(target)) return 'array';
        if (target instanceof Date) return 'date';
        if (target instanceof Map) return 'map';
        if (target instanceof Set) return 'set';
        else return 'object'
      } else return typeof target;
    }
}