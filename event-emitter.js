/*
  eventRegistry: A Map Object keyed with event names
    each entry being a Set Object containing
    listener callbacks
*/

export class EventEmitter extends EventTarget {
  #eventRegistry = new Map();
  listeners = [];

  constructor() {
    super();

    // this.listeners = [];
  }

  registerEvent(eventName) {
    if (this.#eventRegistry.has(eventName)) return this.#eventRegistry.get(eventName);

    return this.#eventRegistry
      .set(eventName, new Set())
      .get(eventName);

  }

  registerListener(eventName, listener) {
    this.registerEvent(eventName).add(listener);
    return this
  }

  on(type, listener) {
    this.registerListener(type, listener);
    return () => this.unregisterListener(type, listener)
  }

  unregisterListener(eventName, listener) {
    return this.#eventRegistry.get(eventName).delete(listener)
  }

  off(type, listener) {
    this.removeEventListener(type, listener)
  }

  emit(evt, data) {
    if (!this.#eventRegistry.has(evt)) return;
    this.#eventRegistry.get(evt).forEach(_ => _(data))
  }

  dispatch(name, detail = {}) {
    this.self.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }));

    this.listeners.forEach((l, i) => {
      l.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }));
    });
  }
}

// let intermediateValue1 = await asynchronousFunction1();
// let intermediateValue2 = await asynchronousFunction2();
// let intermediateValue3 = await asynchronousFunction3();
// let result = await asynchronousFunction3()

// const myFetchedAndParsedData = (await (await fetch(this.url)).json());