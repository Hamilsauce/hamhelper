import H from './hamhelper1.0.0.js'
H.help()

H.selectAllContent(document.querySelector('.log'))

const scriptTag = document.createElement('script')
const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');

// console.log(scriptTag, newSvg.nodeName, newLine.nodeName);
const output = H.qs('.output')
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

console.log('H.array.zip(arr1,arr2, arr3)', H.array.zip(arr1,arr2, arr3))

const els = arr1
  .map(tag => document.createElement(tag))

console.log('els', els);
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


const newb = H.newElement('div', attributes, els);

console.log('newb', newb);
H.longPress(newb, 1000, (e) => e.target.style.background = e.target.style.background === 'blue' ? 'pink' : 'blue');

H.qs('#app').appendChild(newb);







// const myEl = H.createNewElement('div','my-el', ['fap', 'fap-two', 'fap-3'],{selected: false, roll: 'king'})
// myEl.textContent = 'oooo'
// output.appendChild(myEl)