export default class extends Map {
  constructor(entries) {
    super(entries);
    
    if (Array.isArray(entries))
      entries.forEach(([key, value]) => {
        super.set(value, key)
      });
  }
  
  set(key, value) {
    super.set(key, value);
    super.set(value, key);
    
    return this;
  }
  
  static help() {
    return `
      === TwoWayMap ===
  Extends Map Object to set both <k, v> and <v, k>.
    `.trim();
  }
};
