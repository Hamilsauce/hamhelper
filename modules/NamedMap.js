export class NamedMap extends Map {
  constructor(entries, name) {
    super(entries);
    if (Array.isArray(entries)) {}
    this.name;
  };
}


export default class extends Map {
  constructor(entries, name) {
    super(entries);
    this.name;
  }


  static help() {
    return `
      === NamedMap ===
  Extends Map Object to set with optional built in name property '
    `.trim();
  }
};