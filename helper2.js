console.time('timer1')

import H from './hamhelper1.0.0.js'
// import { pipe } from './modules/pipeline.js';
// import { TwoWayMap } from './modules/TwoWayMap.js';
// import rx from './modules/rxjs.js'
// console.log('H.help()', H.help())

const { TwoWayMap, event, date, array, utils, pipeline, text, help } = H;
console.log({ pipeline });

const poop = 'kebab-case'
// console.log('poop.split(/^[A-Z]*$/)', poop.split(/[A-Z]/g)) 
console.log('camelToKebab', text.camelToKebab(poop));
console.log('kebabToCamel', text.kebabToCamel(poop));

console.group(new TwoWayMap([[1, '1']]));
console.table(new TwoWayMap([[1, '1']]));
console.dir(new TwoWayMap([[1, '1']]));
const app = document.querySelector('#app');
const targ = document.querySelectorAll('.targ')
const footer = document.querySelector('.container')

app.addEventListener('click', e => {
  const res = event.testEventPathForElement(e, targ)
  console.log('res', res)
})


const numToTextPipe = pipeline(
  (num) => num + 50,
  (num) => num * 2,
  (num) => `Number ${num} is big time!`
);

console.log('am', numToTextPipe(0))
// => 'Number 100 is big time!'




console.log(Object.fromEntries([['fart', ['fart']]]));
console.timeEnd('timer1')


const freq = (arr) => {
  // const map = new Map()
  const freqMap = arr.reduce((map, curr, i) => {

    if (map.has(curr)) {
      map.set(curr, map.get(curr)++)
    } else {
      map.set(curr, 1)
      
    }
  }, new Map());
}
const seed = [
'5', 

]