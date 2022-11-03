import { rxjs } from './modules/rx.js';


// console.log('rxjs', rxjs)

const { forkJoin, Observable, iif, BehaviorSubject, AsyncSubject, Subject, interval, of , fromEvent, merge, empty, delay, from } = rxjs;
const { flatMap, reduce, groupBy, toArray, mergeMap, switchMap, scan, map, tap, filter } = rxjs.operators;
const { fromFetch } = rxjs.fetch;

fromEvent(document, 'click')
.pipe(
    map(x => x),
    tap(x => console.log('TAP', x))
  ).subscribe()