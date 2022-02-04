export default {
  traverseObject(target, callback) {
    callback(target);
    if (typeof target === 'object') {
      for (let key in target) {
        traverseObject(target[key], callback);
      }
    }
  },

  help() {
    return `
    === Object ===
    
- traverseObject(target, callback): recurse throuhh props
  `.trim();
  }
}