import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
const { waitMs, rx, DOM, TwoWayMap, event, date, array, utils, pipeline, text, help } = ham;
import ham2 from './hamhelper1.0.0.js'
const { addSvgPinchZoom } = ham2
// console.time('timer1')
import './_two-pointer-search.js';
// console.warn('waitMs', waitMs)
// waitMs()
// import H from './hamhelper1.0.0.js'
import { pipe } from './modules/pipeline.js';
import { EventEmitter } from './event-emitter.js';
// import { TwoWayMap } from './modules/TwoWayMap.js';
// import rx from './modules/rxjs.js'
// console.log('H.help()', H.help())

// const { DOM,TwoWayMap, event, date, array, utils, pipeline, text, help } = H;
// console.log({ pipeline });
class MyClass extends EventEmitter {
  constructor() {
    super()
  };
  get prop() { return this._prop };
  set prop(newValue) { this._prop = newValue };
}

const myClass = new myClass();
const poop = 'kebab-case'
// console.log('poop.split(/^[A-Z]*$/)', poop.split(/[A-Z]/g)) 
// console.log('camelToKebab', text.camelToKebab(poop));
// console.log('kebabToCamel', text.kebabToCamel(poop));

// console.group(new TwoWayMap([
//   [1, '1']
// ]));
// console.table(new TwoWayMap([
//   [1, '1']
// ]));
// console.dir(new TwoWayMap([
//   [1, '1']
// ]));
const app = document.querySelector('#app');
const targ = document.querySelectorAll('.targ')
const footer = document.querySelector('.container')


DOM.setElementDataset(app, {
  name: 'app',
  isCool: true,
  numberOfShit: 23.5,
  
})
// console.warn('app getdataset', [...DOM.getElementDataset(app)])
// console.log('app.dataset', app.dataset)
app.addEventListener('click', e => {
  // const res = event.testEventPathForElement(e, targ)
  // console.log('akut');
  // console.log('res', res)
})






const numToTextPipe = pipeline(
  (num) => num + 50,
  (num) => num * 2,
  (num) => `Number ${num} is big time!`
);

// console.log('am', numToTextPipe(0))
// => 'Number 100 is big time!'




// console.log(Object.fromEntries([['fart', ['fart']]]));
// console.timeEnd('timer1')


const freq = (arr) => {
  // const map = new Map()
  const freqMap = arr.reduce((map, curr, i) => {
    
    if (map.has(curr)) {
      map.set(curr, map.get(curr) ++)
    } else {
      map.set(curr, 1)
      
    }
  }, new Map());
}
const seed = [
  '5',
  
]