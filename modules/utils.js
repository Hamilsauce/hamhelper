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

  uuid() {
    return this.shuffle(
      this.shuffle(Date.now().toString(36)) +
      this.shuffle(Math.random().toString(36).substr(2)))
  },

  percent() {
    return {
      ofQuantity(a, c) {
        const n = a / 100 * c;
        return n
      },
      isAofB(a, c) {
        const n = a / c * 100;
        return n
      },
      change(a, c) {
        const n = (c - a) / a * 100;
        return n
      }
    }
  },

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

  range(start, stop) {
    return new Array(stop - start)
      .fill(0)
      .map((v, i) => start + i);
  },

  promisify(fn) {
    // promisify(fn)(...args) => promise
    return (...args) =>
      new Promise((resolve, reject) =>
        fn(...args, (err, data) => (err ? reject(err) : resolve(data)))
      );
  },

  alphabet() {
    return this.range(
      "A".charCodeAt(),
      "Z".charCodeAt() + 1
    ).map(x => String.fromCharCode(x));
  },

  help() {
    return `
    === Util ===
    
- range(start,fin)=>array

- alphabet

- promisify(fn)(...args) => promise

- shuffle(a = '' || []);

- uuid();

- percent() => { ofQuantity(a, b), isAofB(a, b),  change(a, b);}

- getValueType(target, deepTest = false, customClassType = null)
  `.trim();
  }

}
