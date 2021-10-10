import H from './hamhelper1.0.0.js'
const { DOM, event, array } = H
// import help from './modules/help.js';
H.help.help()
// H.help()
// help.help()

event.selectAllContent(document.querySelector('.log'))

const scriptTag = document.createElement('script')
const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');

// console.log(scriptTag, newSvg.nodeName, newLine.nodeName);
const output = DOM.qs('.output')
// console.log('creating newEl');
const attributes = {
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
};

let arr1 = ['main', 'article', 'div', 'p'];
let arr2 = [1, 2, 3, 4];
let arr3 = [true, false, true, true];


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


console.log('H.array.zip(arr1,arr2, arr3)',
  array.zip(arr1, arr2, arr3)
)

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


const newb = DOM.newElement('div', attributes, els);

console.log('newb', newb);
event.longPress(newb, 1000, (e) => e.target.style.background = e.target.style.background === 'blue' ? 'pink' : 'blue');

DOM.qs('#app').appendChild(newb);







// const myEl = H.createNewElement('div','my-el', ['fap', 'fap-two', 'fap-3'],{selected: false, roll: 'king'})
// myEl.textContent = 'oooo'
// output.appendChild(myEl)