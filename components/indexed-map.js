export class IndexedMap extends Map {
  constructor(entries) {
    super(entries)
    // this.index = [...super.keys()];
  }

  set(k, v) {
    super.set(k, v);
  }

  atIndex(i) {
    return super.get(this.index[i])
  }

  get index() { return [...super.keys()] };
}
