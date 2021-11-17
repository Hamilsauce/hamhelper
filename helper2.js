import H from './hamhelper1.0.0.js'
// import { pipe } from './modules/pipeline.js';
// import rx from './modules/rxjs.js'
// console.log('H.help()', H.help())

const { date, array, utils, pipeline, text, help } = H;

help('', 'DOM', 'text')

// const am = pipeline(0,
//   (num) => num + 50,
//   (num) => num * 2,
// );
const am2 = pipeline(
  (num) => num + 50,
  (num) => num * 2,
);



// console.log('am', am)
console.log('am', am2(0))