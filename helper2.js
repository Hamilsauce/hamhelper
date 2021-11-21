import H from './hamhelper1.0.0.js'
// import { pipe } from './modules/pipeline.js';
// import { TwoWayMap } from './modules/TwoWayMap.js';
// import rx from './modules/rxjs.js'
// console.log('H.help()', H.help())

const { TwoWayMap,event, date, array, utils, pipeline, text, help } = H;
console.log({pipeline});
help()
const app = document.querySelector('#app');
const targ = document.querySelectorAll('.targ')
const footer = document.querySelector('.container')

app.addEventListener('click', e => {
const res = event.testEventPathForElement(e, targ)
  console.log('res', res)
})


const numToTextPipe = pipeline(
  (num = 0) => num + 50,
  (num = 1) => num * 2,
  (num = '') => `Number ${num} is big time!`
);

console.log('am', numToTextPipe(0))
// => 'Number 100 is big time!'

console.log(Object.fromEntries([['fart', ['fart']]]));