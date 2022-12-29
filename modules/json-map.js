export class JsonMap extends Map {
  constructor(entries) {
    super(entries);
  }

  toJSON() {
    return [...this.entries()]
  }
};
