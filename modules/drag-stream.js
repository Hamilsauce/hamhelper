import { importUMD } from './index.js';
const rxjs = importUMD('https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.3.0/rxjs.umd.min.js')
const { fromEvent, delay, of } = rxjs;
const { takeUntil, takeWhile, switchMap, scan, map, tap, filter, } = rxjs.operators;

export const addDragAction = (target, callback) => {
  let isDragging = false
  const setDragState = (state = true) => { isDragging = state; return isDragging };

  const pointerdown$ = fromEvent(target, 'pointerdown')
  const pointermove$ = fromEvent(target, 'pointermove')
  const pointerup$ = fromEvent(target, 'pointerup')

  const longpress$ = pointerdown$
    .pipe(
      filter(() => isDragging === false),
      switchMap(event => of (event).pipe(
        delay(300),
        takeUntil(pointerup$),
      ))
    );

  return longpress$.pipe(
    tap(() => setDragState(true)),
    switchMap(() => pointermove$
      .pipe(
        takeWhile(() => isDragging),
        map(({ target, clientX, clientY }) => ({ target: target.closest('.context-menu'), x: clientX, y: clientY })),
        scan((prev, { target, x, y }) => {
          return !!prev ? {
            target,
            x: (prev.x + -(prev.x - x)),
            y: (prev.y + -(prev.y - y)),
          } : { target, x: x, y: y, }
        }),
        tap(callback),
        switchMap(() => pointerup$
          .pipe(
            map(({ target, clientX, clientY }) => ({ target, x: clientX, y: clientY })),
            tap(() => setDragState(false)),
          ))
      ))
  );
};