// import { TwoWayMap } from './modules/TwoWayMap.js';
// import { TwoWayMap } from './modules/TwoWayMap.js';
import H from './hamhelper1.0.0.js'
import { JsonMap } from './modules/json-map.js';
import { addDragAction } from './modules/drag-stream.js';
import { IndexedMap } from './indexed-map.js';
// import { delay } from './modules/delay.js';

const {
  delay,
  text,
  CONSTANTS,
  timer,
  TwoWayMap,
  DOM,
  event,
  array,
  help
} = H


console.group('DELAY');

await delay(1500);
console.log('0 delay 1500');

await delay(1500);
console.log('1 delay 1500');

await delay(1500);
console.log('2 delay 1500');
await delay(1500);
console.log('3 delay 1500');

await delay(1500);
console.log('4 delay 1500');

await delay(1500);
console.log('5 delay 1500');
console.groupEnd('DELAY');

const jsonmap = new IndexedMap([
  ['fuck', 'me'],
  [{ id: 2 }, (i) => null],
  [0, { id: 3 }],
  [0, [2, 1, 2]],
]);

const jsonmap2 = new JsonMap([
  ['fuck', 'me'],
  [{ id: 2 }, (i) => null],
  [0, { id: 3 }],
  [0, [2, 1, 2]],
]);

const jsonMapJson = JSON.stringify(jsonmap, null, 2)
const jsonMapJson2 = JSON.stringify(jsonmap2, null, 2)
console.warn('jsonMapJson', jsonMapJson)


event.selectAllContent(document.querySelector('.log'))

const scriptTag = document.createElement('script')
const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
document.body.onclick = (e) => {
  timer.toggle()
}
// console.log(scriptTag, newSvg.nodeName, newLine.nodeName);
const output = DOM.qs('.output')
// console.log('creating newEl');
const attributes = {
  tag: 'div',
  elementProperties: {
    id: 'my-el',
    classList: ['cool', 'awesome', 'poop'],
    data: {
      x: 20,
      y: 50,
      groupId: 10,
      lastChange: 'never'
    },
    style: {
      width: '300px',
      height: '300px',
      color: 'white',
      background: 'blue',
    }
  }
};

const o1 = {
  o: 'o1'
}
const o2 = {
  o: 'o2'
}

let arr1 = ['main', 'article', 'div', 'p'];
// let arr2 = [1, 1,2, 3, 4];
// let arr3 = [o1, 'o1',o2, {o: 'o3'}, o1];
let arr2 = [1, 2];
let arr3 = [o1, o1];


let arr4 = [
  {
    name: 'jake',
    age: 33,
    toes: [1, 2, 3, 4]
},
  {
    name: 'tom',
    age: 32,
    toes: [1, 2, 3]
},
  {
    name: 'sue',
    age: 31,
    toes: [1, 2]
},
  {
    name: 'sally',
    age: 40,
    toes: [1, 2]
  }
];
let arr5 = [
  {
    name: 'jake',
    age: 33,
    toes: [1, 2, 3, 4]
},
  {
    name: 'tom',
    age: 32,
    toes: [1, 2, 3]
},
// sue should be in output
  {
    name: 'sue',
    age: 31,
    toes: [1, 2, 3, 4, 5]
},
// sue should be in output
  {
    name: 'jackie',
    age: 10,
    toes: [1]
  }
];

// console.log('H.array.difference(arr4, arr5)', H.array.difference(arr4, arr5))
const twMap = new TwoWayMap(array.zip(arr2, arr3))

// console.log('TwoWayMap(array.zip(arr2, arr3))',
// [...twMap]
// )

const els = arr1
  .map(tag => document.createElement(tag))

// console.log('els', els);
const chs = [
	document.createElement('main'),
	document.createElement('article'),
	document.createElement('div'),
	document.createElement('p'),
];
const cMap = [
	document.createElement('main'),
	document.createElement('article'),
	document.createElement('div'),
	document.createElement('p'),
];
console.log(chs);


const KEBAB = 'game-grid-for-ever';
// const CAMEL = text.kebab2Camel(KEBAB)

// console.warn(CAMEL);

const newb = DOM.createElement(attributes);
newb.style.width = '200px'
newb.style.height = '200px'
newb.style.background = 'purple'
console.log('newb', newb);
event.longPress(newb, 1000, (e) => e.target.style.background = e.target.style.background === 'blue' ? 'pink' : 'blue');

DOM.qs('#app').appendChild(newb);
DOM.qs('#app').innerHTML = `
<pre>${jsonMapJson}</pre>
<pre>${jsonMapJson2}</pre>
`

let opacityModifier = 0

const drag$ = addDragAction(DOM.qs('#app'), e => {
  console.log('e', e);
  const points = e.target.querySelectorAll('.point')

  if (points.length >= 50) {
    [...points][0].remove()
  }

  const el = document.createElement('div');

  if (e.type === 'pointerdown') {
    opacityModifier = 0;

    DOM.qsa('.point-end').forEach((el, i) => {
      el.remove()
    });

    el.classList.add('point-start')
  }

  if (e.type === 'pointermove') {
    opacityModifier++
    el.classList.add('point')
    const opacity = 1 - ((opacityModifier / 100) * 1) //+(-50+ points.length))
    el.style.opacity = opacity

  }

  if (e.type === 'pointerup') {
    DOM.qsa('.point-start').forEach((el, i) => {
      el.remove()
    });
    el.classList.add('point-end')
  }
  // if (points.length) {
  //   el.classList.add('point-end')
  // }
  el.style.top = e.y + 'px'
  el.style.left = e.x + 'px'
  e.target.append(el)
})


drag$.subscribe()
// const myEl = H.createNewElement('div','my-el', ['fap', 'fap-two', 'fap-3'],{selected: false, roll: 'king'})
// myEl.textContent = 'oooo'
// output.appendChild(myEl)

