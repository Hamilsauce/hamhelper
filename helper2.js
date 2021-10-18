import H from './hamhelper1.0.0.js'
const { DOM, event, array, help, text } = H
// import help from './modules/help.js';
help('in helperjs line 4')

// console.log(text);

const logEntry = `[5:09:39 PM] [update]: /storage/emulated/0/Android/data/io.spck.editor.node/files/typescript-playground/dist/bundle.js`
const logEntry2 = `[5:09:39 PM]/storage/emulated/0/Android/data/io.spck.editor.node/files/typescript-playground/dist/bundle.js`

// console.log(text.textBetween(logEntry, '[', ']'));
console.log(text.textBetween(logEntry, '[', ']', true));