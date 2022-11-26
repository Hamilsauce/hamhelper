export class IndexedMap extends Map {
  #index;
  
  constructor(entries) {
    super(entries);
  }

  set(k, v) {
    if (!k) return this;
    return super.set(k, v);
  }

  insertAtIndex(index, key, value) {
    // NOTE: Must assign temp to maintain object references
    
    const temp = [...this.entries()];

    temp.splice(index, 0, [key, value]);
    
    this.clear();
    
    temp.forEach(([k, v]) => this.set(k, v));
  }

  setAtIndex(index, value) {
    return super.set(this.getByKeyAtIndex(index), value);
  }

  getByKeyAtIndex(i) {
    return super.get(this.#index[i]);
  }

  indexOf(k, fromIndex = 0) {
    return this.#index.indexOf(k, fromIndex)
  }

  get #index() { return [...super.keys()] };
  
  toJSON(){
    return [...super.entries()]
  }
}
