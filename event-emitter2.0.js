/*
  eventRegistry: A Map Object keyed with event names
    each entry being a Set Object containing
    listener callbacks
*/

const isFunction = (fn) => fn instanceof Function;

export class EventChannel extends Set {
  #eventType;
  
  constructor(eventType, values) {
    super(values);
    
    this.#eventType = eventType;
  }
  
  add(listener = (event = new Event('')) => {}) {
    if (isFunction(listener)) {
      super.add(listener);
      
      return () => this.delete(listener)
    }
    
    return null;
  }
  
  delete(...listeners) {
    listeners.forEach(super.delete(_));
    
    return this;
  }
  
  
}

export class EventRegistry extends Map {
  constructor(entries = []) {
    super();
    this.set('*')
    
    if (entries) {
      entries.forEach(([eventType, listeners], i) => {
        this.set(eventType, listeners)
      });
    }
  }
  
  set(eventType, ...listeners = []) {
    if (this.has(eventType)) {
      this.get(eventType).add(...listeners);
      return this;
    }
    
    return super.set(eventType, new EventChannel(eventType, ...listeners))
  }
  
  delete(eventType, ...listeners) {
    if (!this.has(eventType)) return this;
    
    this.get(eventType).delete(listeners);
    
    if (this.get(eventType).size === 0) return super.delete(eventType);
  }
  
  run(eventType, data) {
    const wildCardListeners = this.get('*')
    
    if (this.has(eventType)) {
      
      const eventListeners = this.get(eventType)
      
      new EventChannel('', [...eventListeners, ...wildCardListeners]).run(data);
    } else {
      wildCardListeners
      
    }
    
    
  }
}

export class EventEmitter extends EventTarget {
  #eventRegistry = new EventRegistry()
  #listeners = [];
  
  constructor() {
    super();
    
  }
  
  on(eventType, listener) {
    this.#eventRegistry.set(eventType, listener)
    
    return () => this.off(eventType, listener)
  }
  
  off(eventType, ...listeners) {
    return this.#eventRegistry.delete(eventType, listeners)
  }
  
  emit(eventType, data) {
    this.#eventRegistry.run(eventType, data);
    return this;
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

// export class StateEmitter extends EventEmitter {#
//   #cache = {};

//   constructor(state) {
//     super();

//   }

//   cacheEventValue(eventType, value) {
//     this.#cache[eventType] = values;
//     return this.#cache[eventType];
//   }

//   cacheHas(eventType) { return !!this.#cache[eventType] }

//   getFromCache(eventType) {
//     return this.cacheHas(eventType) ? this.#cache[eventType] : null;
//   }

//   // #registerEvent(eventType) {
//   //   if (this.#eventRegistry.has(eventType)) return this.#eventRegistry.get(eventType);

//   //   return this.#eventRegistry
//   //     .set(eventType, new Set())
//   //     .get(eventType);
//   // }

//   // fire() {
//   //   super.fire()
//   // }

//   #registerListener(eventType, listener) {
//     super.#registerEvent(eventType).add(listener);

//     if (this.cacheHas(eventType)) {
//       this.fire(listener, this.#cache[eventType])
//     }
//     return this
//   }

//   // on(type, listener) {
//   //   this.#registerListener(type, listener);
//   //   return () => this.unregisterListener(type, listener)
//   // }

//   // unregisterListener(eventType, listener) {
//   //   return this.#eventRegistry.get(eventType).delete(listener)
//   // }

//   // off(type, listener) {
//   //   this.removeEventListener(type, listener)
//   // }
//   // 
//   emit(eventType, data) {
//     // if (!this.#eventRegistry.has(eventType)) return;
//     // this.#eventRegistry.get(eventType).forEach(_ => this.fire(_, data));
//     super.emit(eventType, data);
//     this.#cache[eventType] = data
//   }

//   // dispatch(name, detail = {}) {#
//   //   this.self.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }));

//   //   this.listeners.forEach((l, i) => {
//   //     l.dispatchEvent(new CustomEvent(name, { bubbles: true, detail }));
//   //   });
//   // }
// }

// let intermediateValue1 = await asynchronousFunction1();
// let intermediateValue2 = await asynchronousFunction2();
// let intermediateValue3 = await asynchronousFunction3();
// let result = await asynchronousFunction3()

// const myFetchedAndParsedData = (await (await fetch(this.url)).json());