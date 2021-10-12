export const getValueType = (target, deepTest = false, customClassType = null) => {
  // STEPS
  // If custom class input not null, do indtanceof snd return that

  // 1. Test if target === null, return null if yes
  // 2. Test if undefined, return if so
  // 3. Test typeof === object, if yes:
  //    return instanceof arr, map, set,date,   
  // 4. else test for string, number, boolean
  if (target === null) return 'null';
  if (typeof target === 'undefined') return 'undefined';
  if (typeof target === 'object') {
    if (target instanceof Array || Array.isArray(target)) return 'array';
    if (target instanceof Date) return 'date';
    if (target instanceof Map) return 'map';
    if (target instanceof Set) return 'set';
    else return 'object'
  } else return typeof target;







  // const exprMap = new Map();

  // exprMap.set(typeof collection === 'string', 'string')
  // exprMap.set(typeof collection === 'number', 'number')
  // exprMap.set(collection instanceof Array, 'array')
  // exprMap.set(collection instanceof Date, 'date')
  // exprMap.set(collection instanceof Set, 'set')
  // exprMap.set(collection instanceof Map, 'map')

  // return (this.tableData.every(_ => !['APPROVED', 'UNDER REVIEW'].includes(_.status_.toUpperCase() || '')) || false);
}