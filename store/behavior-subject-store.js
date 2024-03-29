import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
const { template, utils, rxjs } = ham;

const { BehaviorSubject, Subject } = rxjs
const { shareReplay, distinctUntilChanged, tap, map, scan } = rxjs.operators;

const AUTH_KEY = '123';

const StoreOptionsDef = {
  state: Object,
  reducer: Function,
  isDef: true,
}


class StoreRegistery extends Map {
  constructor() {
    super();
  }

  set(name, initialState) {
    if (!(name && initialState)) throw new Error('Invalid name or state passed to store');

    super.set(name, new BhsStore(name, initialState));
  }
}


const storeRegistery = new StoreRegistery();


class BhsStore extends BehaviorSubject {
  #updateSubject$ = new Subject();
  #reducePipe$ = null;
  #reducer = null;
  #stateSubscription = null;
  #name = null;

  constructor(name, storeOptions = StoreOptionsDef) {
    if (!(name && storeOptions.state && storeOptions.reducer) || storeOptions.isDef) return;

    super(storeOptions.state);

    this.#name = name;

    this.#reducer = storeOptions.reducer;

    this.#reducePipe$ = this.#updateSubject$
      .pipe(
        map(action => this.#reducer(this.snapshot(), action)),
        tap(newValue => this.next(newValue, AUTH_KEY)),
      );

    this.#stateSubscription = this.#reducePipe$.subscribe();
  }

  get name() { return this.#name }

  dispatch(action) {
    if (!action.type) return;

    this.#updateSubject$.next(action);
  }

  snapshot(selectorFn) {
    return { ...(selectorFn ? selectorFn(this.getValue()) : this.getValue()) };
  }

  next(newValue, authKey) {
    if (authKey != AUTH_KEY || typeof newValue != 'object') throw new Error('ILLEGAL CALL TO STORE.NEXT OR INVALID VALUE PASSED TO STORE.UPDATE');

    super.next(newValue);
  }

  select(selectorFn = (state) => state) {
    return this.asObservable()
      .pipe(
        map(selectorFn),
        distinctUntilChanged(),
        shareReplay(1),
      );
  }

  #assign(newValue) {
    if (typeof newValue != 'object') throw new Error('NEW VALUE PUSHED ISNT OBJECT. FAILED IN ASSIGNG, VALUE: ' + newValue);

    return { ...this.getValue(), ...newValue }
  }
}


export const defineStore = (name, storeOptions = StoreOptionsDef) => {
  let store;

  if (!storeRegistery.has(name)) {
    storeRegistery.set(name, storeOptions);
  }

  return () => storeRegistery.get(name);
}