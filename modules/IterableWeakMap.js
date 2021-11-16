export class IterableWeakMap {
  constructor(seed) {
    this.seed = seed;
    this._wm = Array.isArray(seed) ? new WeakMap(seed) : new WeakMap();
    this.index = Array.isArray(seed) ? seed.map(_ => _[0]) : [];
    this._size = this.index.length || 0;
  
    console.log(this);
  }

  forEach(func) {
   console.log({func});
    for (let i = 0; i < this.size; i++) {
      const item = this.index[i];
      if (this.has(item)) {
        func(this.get(item), item, this._wm )
      }
    }
  }

  clear() {
    this.index = [];
    this.size = 0
    this._wm = new WeakMap();
  }

  delete(key) {
    this.index = this.index.filter((k, i) => !(k === key));
    this.size = this.size - 1
    return this._wm.delete(key);
  }

  get(k) {
    return this._wm.get(k);
  }

  has(k) {
    return this._wm.has(k);
  }

  set(k, v) {
    this.index = [...this.index, k];
    this.size = this.size + 1
    this._wm.set(k, v);
    return this;
  }

  get size() {
    return this._size;
  }

  set size(newValue) {
    this._size = newValue;
  }
}
