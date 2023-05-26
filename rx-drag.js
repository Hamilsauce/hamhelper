import { rxjs } from './rx.js';
const { forkJoin, combineLatest, Observable, iif, BehaviorSubject, AsyncSubject, Subject, interval, of, fromEvent, merge, empty, delay, from } = rxjs;

const { last, flatMap, takeUntil, reduce, groupBy, toArray, mergeMap, switchMap, scan, map, tap, filter } = rxjs.operators;
const { fromFetch } = rxjs.fetch;

const createDraggableElement = (element, move$, up$) => {
  const pointerDown$ = fromEvent(element, 'pointerdown');

  const dragStart$ = pointerDown$;

  const dragMove$ = dragStart$.pipe(
    switchMap(start =>
      move$.pipe(
        map(moveEvent => ({
          originalEvent: moveEvent,
          deltaX: moveEvent.clientX - start.clientX,
          deltaY: moveEvent.clientY - start.clientY,
          startOffsetX: start.offsetX,
          startOffsetY: start.offsetY
        })),
        takeUntil(up$)
      )
    )
  );

  const dragEnd$ = dragStart$.pipe(
    switchMap(start =>
      move$.pipe(
        map(moveEvent => ({
          originalEvent: moveEvent,
          deltaX: moveEvent.clientX - start.clientX,
          deltaY: moveEvent.clientY - start.clientY,
          startOffsetX: start.offsetX,
          startOffsetY: start.offsetY
        })),
        takeUntil(up$),
        last(),
      )
    )
  );

  combineLatest([
    dragStart$.pipe(
      tap(event => {
        element.dispatchEvent(
          new CustomEvent('mydragstart', { detail: event })
        );
      })
    ),
    dragMove$.pipe(
      tap(event => {
        element.dispatchEvent(new CustomEvent('mydragmove', { detail: event }));
      })
    ),
    dragEnd$.pipe(
      tap(event => {
        element.dispatchEvent(new CustomEvent('mydragend', { detail: event }));
      })
    )
  ]).subscribe();

  dragMove$.subscribe(move => {
    const offsetX = move.originalEvent.x - move.startOffsetX;
    const offsetY = move.originalEvent.y - move.startOffsetY;
    element.style.left = offsetX + 'px';
    element.style.top = offsetY + 'px';
  });
}


const pointerMove$ = fromEvent(document, 'pointermove');

const pointerUp$ = fromEvent(document, 'pointerup');

export const addDragAction = (element) => createDraggableElement(element, pointerMove$, pointerUp$);