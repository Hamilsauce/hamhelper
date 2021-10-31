import H from './hamhelper1.0.0.js'
import rx from './modules/rxjs.js'

const { date, array, utils, text } = H;

const src = `
Build Dictionaries From Objects
Dictionaries are data structures with key - value pairs.
JavaScript objects can have key - value pairs added and removed dynamically.
So we can add items and remove them.
For instance, we can write:
  const dict = { james: 33, bob: 22, mary: 41 };
Then we can loop through the entries in various ways.
We can use the
for - in loop to loop through the items:
`


const t1 = '{}[]():;`"\''
const t2 = '{}[]():;`"\''.split('')

console.log('string input');
text.replaceMany(src, t1)
console.log('array input');
text.replaceMany(src, t2)
console.log('...rest input');
text.replaceMany(src,'{', '}', '[', ']', '(', ')', ':', ';', '`', '"', "'")

// console.log('replaceMany(t2)', text.replaceMany(...t2))
// console.log('replaceMany(indiv)', text.replaceMany('{', '}', '[', ']', '(', ')', ':', ';', '`', '"', "'"))

// console.log('replaceMany',
// [
//   text.replaceMany(t1),
//   text.replaceMany(t2),
// text.replaceMany('{', '}', '[', ']', '(', ')', ':', ';', '`', '"', "'"),
// ])


// console.log('utils.getValueType(5)', utils.getValueType(5))
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

// console.log('array.zipIntoObject(a1,a2)', array.zipIntoObject(a1, a2))
const validDate = date.isValidDateValue(['1'])
const dateFromVal = date.createDateFromValue([''])
// console.log('dateFromVal', dateFromVal)
const logEntry = `[5:09:39 PM] [update]: /storage/emulated/0/Android/data/io.spck.editor.node/files/typescript-playground/dist/bundle.js`
const logEntry2 = `[5:09:39 PM]/storage/emulated/0/Android/data/io.spck.editor.node/files/typescript-playground/dist/bundle.js`

// console.log(text.textBetween(logEntry, '[', ']'));
// console.log(text.textBetween(logEntry, '[', ']', true));