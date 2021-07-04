import hamhelper from './hamhelper.js'

const output = hamhelper.qs('.output')

const myEl = hamhelper.createNewElement('div','my-el', ['fap', 'fap-two', 'fap-3'],{selected: false, roll: 'king'})
myEl.textContent = 'oooo'
output.appendChild(myEl)