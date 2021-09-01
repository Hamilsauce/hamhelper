import H from './hamhelper1.0.0.js'
H.selectAllContent(document.querySelector('.log'))

console.log(H.help());

const scriptTag = document.createElement('script')
const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');

console.log(scriptTag, newSvg.nodeName, newLine.nodeName);

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

let arr = ['main', 'article', 'div', 'p'];


const els = arr
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


H.help()





// const myEl = H.createNewElement('div','my-el', ['fap', 'fap-two', 'fap-3'],{selected: false, roll: 'king'})
// myEl.textContent = 'oooo'
// output.appendChild(myEl)