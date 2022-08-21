export class HistoryItem {
  #value = null;
  #previous = null;

  constructor(item) {
    if (!item) throw new Error('Cannot set history item to undefined');

    Object.assign(this, item);
  }

  get value() { return this.#value }

  set value(v) {
    if (!v) throw new Error('Cannot set history item value to undefined');
    this.#value = v;
  }

  get previous() { return this.#previous }

  set previous(v) { this.#previous = v;}
}


export class HistoryStack {
  #lastItem = null;

  get size() {
    let size = 0;
    let current = this.#lastItem;

    while (current) {
      size = current ? size + 1 : size;
      current = current.previous;
    }

    return size;
  }

  get isEmpty() { this.size === 0 }

  #createItem(value) {
    return new HistoryItem({
      previous: null,
      value
    })
  }

  push(value) {
    const newItem = this.#createItem(value);

    if (!this.isEmpty) {
      newItem.previous = this.#lastItem;
    }

    this.#lastItem = newItem;

    return this.size;
  }

  pop() {
    let popped = null;

    if (!this.isEmpty) {
      popped = this.#lastItem.value
      this.#lastItem = this.#lastItem.previous
    }

    return popped;
  }

  peek() {
    return this.#lastItem ? this.#lastItem.value : null;
  }

  toString() {
    if (this.isEmpty) return '';

    let current = this.#lastItem;
    let str = `${JSON.stringify(current, null, 2)}`;

    while (current.prev) {
      current = current.prev;
      str = `${current.value},${str}`;
    }

    return str;
  }
}