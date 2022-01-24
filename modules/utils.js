export default {


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

  uuid() { return this.shuffle(this.shuffle(Date.now().toString(36)) + shuffle(Math.random().toString(36).substr(2))) },


  shuffle(a = '' || []) {
    if (typeof a === 'string') {
      const spl = a.split('');
      for (let i = spl.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [spl[i], spl[j]] = [spl[j], spl[i]];
      }
      return spl.join('');
    } else if (Array.isArray(a)) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    } else return;
  },


  help() {
    return `
    === Util ===
    
- shuffle(a = '' || []);

- uuid();

- getValueType(target, deepTest = false, customClassType = null)
  `.trim();
  }

}