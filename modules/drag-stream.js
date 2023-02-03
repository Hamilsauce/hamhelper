import { rxjs } from './rx.js';
const { fromEvent, delay, of } = rxjs;
const { distinctUntilChanged, takeUntil, takeWhile, switchMap, scan, map, tap, filter, } = rxjs.operators;

export const createDragEvent$ = (event) => {
  return of(event).pipe(
    map(({ target, clientX, clientY, type }) => ({ type, target, x: clientX, y: clientY })),
    scan((prev, { target, type, x, y }) => {
      return { type, target, x, y, }
    }, { type: null, target: null, x: 0, y: 0 }),
  );
}


export const addDragAction = (target, callback) => {
  const pointerdown$ = fromEvent(target, 'pointerdown')
  const pointermove$ = fromEvent(target, 'pointermove')
  const pointerup$ = fromEvent(target, 'pointerup')

  target.style.touchAction = 'none';

  const dragStart$ = pointerdown$.pipe(
    distinctUntilChanged((a, b) => a.type !== b.type),
    switchMap(createDragEvent$),
    tap(callback),
  );

  const dragMove$ = pointermove$.pipe(
    switchMap(createDragEvent$),
    tap(callback),
  );

  const dragEnd$ = pointerup$.pipe(
    distinctUntilChanged((a, b) => a.type === b.type),
    switchMap(createDragEvent$),
    tap(callback),
  );

  return dragStart$.pipe(
    switchMap(() => dragMove$.pipe(
      switchMap(() => dragEnd$)
    ))
  )

  // return dragStart$.pipe(
  //   tap(() => setDragState(true)),
  //   switchMap(() => pointermove$.pipe(
  //     switchMap(createDragEvent$),
  //     tap(callback),
  //     switchMap(() => pointerup$
  //       .pipe(
  //         switchMap(createDragEvent$),
  //         // map(({ target, clientX, clientY }) => ({ target, x: clientX, y: clientY })),
  //         tap(callback),
  //         tap(() => setDragState(false)), !''
  //       ))
  //   ))
  // );
};