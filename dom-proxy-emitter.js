/*
  eventRegistry: A Map Object keyed with event names
    each entry being a Set Object containing
    listener callbacks
*/

export class EventEmitter extends EventTarget {
  #target = null;
  #eventRegistry = new Map();
  #listeners = [];

  constructor(target) {
    super();
   
    this.#target = target;
  }
  
  addEventListener(type, options) {
    
  }

  #registerEvent(eventName) {
    if (this.#eventRegistry.has(eventName)) return this.#eventRegistry.get(eventName);
this.#target.addEventListener()
    return this.#eventRegistry
      .set(eventName, new Set())
      .get(eventName);

  }

  #registerListener(eventName, listener) {
    this.#registerEvent(eventName).add(listener);
    return this
  }

  on(type, listener) {
    this.#registerListener(type, listener);
    return () => this.#unregisterListener(type, listener)
  }

  #unregisterListener(eventName, listener) {
    return this.#eventRegistry.get(eventName).delete(listener)
  }

  off(type, listener) {
    this.removeEventListener(type, listener)
  }

  fire(listener, data) {
    listener(data);

    return true;
  }

  emit(evt, data) {
    if (!this.#eventRegistry.has(evt)) return;
    this.#eventRegistry.get(evt).forEach(_ => this.fire.bind(this)(_, data))
  }

  // dispatch(name, detail = {}) {
  //   this.self.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }));

  //   this.#listeners.forEach((l, i) => {
  //     l.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }));
  //   });
  // }
}
