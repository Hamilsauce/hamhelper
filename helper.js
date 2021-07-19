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

const myEl = H.createNewElement('div','my-el', ['fap', 'fap-two', 'fap-3'],{selected: false, roll: 'king'})
myEl.textContent = 'oooo'
output.appendChild(myEl)