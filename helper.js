import H from './hamhelper1.0.0.js'
console.log('Ham');
H.log('fuck')

const scriptTag = document.createElement('script')
const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');

console.log(scriptTag, newSvg.nodeName, newLine.nodeName);
H.log(scriptTag.nodeName)


const output = H.qs('.output')
H.log(output.nodeName)

// console.log('creating newEl');

const attributes = {
	id: 'my-el',
	classList: ['cool', 'awesome', 'poop'],
	data: {
		x: 20,
		y: 50,
		groupId: 10,
		lastChange: 'never'
	}
};

let arr = ['main','article','div','p'];


const els = arr	
	.map(tag => document.createElement(tag))

console.log('els',els);
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


const newb = H.newElement('div', attributes, els, 256);

console.log('newb', newb);

H.qs('#app').appendChild(newb)

H.help();


// const myEl = H.createNewElement('div','my-el', ['fap', 'fap-two', 'fap-3'],{selected: false, roll: 'king'})
// myEl.textContent = 'oooo'
// output.appendChild(myEl)

