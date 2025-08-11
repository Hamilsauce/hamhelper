/*
  eventRegistry: A Map Object keyed with event names
    each entry being a Set Object containing
    listener callbacks
*/

export class EventEmitter extends EventTarget {
  #eventRegistry = new Map();
  #listeners = [];
  
  constructor() {
    super();
  }
  
  #registerEvent(eventName) {
    if (this.#eventRegistry.has(eventName)) return this.#eventRegistry.get(eventName);
    
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
    this.#unregisterListener(type, listener);
    this.removeEventListener(type, listener);
  }
  
  emit(evt, data) {
    if (!this.#eventRegistry.has(evt)) return;
    const listeners = [...(this.#eventRegistry.get(evt) ?? [])];
    const globalListeners = [...(this.#eventRegistry.get('*') ?? [])];
    
    for (const listener of [...listeners, ...globalListeners]) {
      listener(data, evt);
    }
  }
}