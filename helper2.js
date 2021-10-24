import H from './hamhelper1.0.0.js'
import rx from './modules/rxjs.js'

const { date, array } = H;
// console.log({})

// const { DOM, event, array, help, text } = H
// const { DOM, event, array, help, text } = H
// import help from './modules/help.js';
// help('in helperjs line 4')

// const rx = await rxjs()

// const rxx = eval(rx);

// console.log('Observable', rxjs)
// rx(document)
// console.log('document.head', document)
// const {from} = rxjs

// console.log('from', from);

const a1 = ['p1', 'p2', 'p3', 'p4', 'p5'];
const a2 = ['v1', 'v2', 'v3', 'v4', 'v5'];

console.log('array.zipIntoObject(a1,a2)', array.zipIntoObject(a1, a2))
const validDate = date.isValidDateValue(['1'])
const dateFromVal = date.createDateFromValue([''])
console.log('dateFromVal', dateFromVal)
const logEntry = `[5:09:39 PM] [update]: /storage/emulated/0/Android/data/io.spck.editor.node/files/typescript-playground/dist/bundle.js`
const logEntry2 = `[5:09:39 PM]/storage/emulated/0/Android/data/io.spck.editor.node/files/typescript-playground/dist/bundle.js`

// console.log(text.textBetween(logEntry, '[', ']'));
// console.log(text.textBetween(logEntry, '[', ']', true));