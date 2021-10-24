  // <script src='https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js'></script>
  // <script src='https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.3.0/rxjs.umd.min.js' integrity='sha512-y3JTS47nnpKORJX8Jn1Rlm+QgRIIZHtu3hWxal0e81avPrqUH48yk+aCi+gprT0RMAcpYa0WCkapxe+bpBHD6g=='' crossorigin='anonymous' referrerpolicy='no-referrer'></script>

  // import * as rxjs from 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.3.0/rxjs.umd.min.js'

  /*
    const src = 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.3.0/rxjs.umd.min.js';
      const integrity = 'sha512-y3JTS47nnpKORJX8Jn1Rlm+QgRIIZHtu3hWxal0e81avPrqUH48yk+aCi+gprT0RMAcpYa0WCkapxe+bpBHD6g==';
      const crossorigin = 'anonymous'
      const referrerpolicy = 'no-referrer'
    

  */

  export default (doc) => {
    const config = {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.3.0/rxjs.umd.min.js',
      integrity: 'sha512-y3JTS47nnpKORJX8Jn1Rlm+QgRIIZHtu3hWxal0e81avPrqUH48yk+aCi+gprT0RMAcpYa0WCkapxe+bpBHD6g==',
      crossorigin: 'anonymous',
      referrerpolicy: 'no-referrer',
    }

    const scriptTag = doc.createElement('script');
    const scriptEl = `<script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.3.0/rxjs.umd.min.js" integrity="sha512-y3JTS47nnpKORJX8Jn1Rlm+QgRIIZHtu3hWxal0e81avPrqUH48yk+aCi+gprT0RMAcpYa0WCkapxe+bpBHD6g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`
    scriptTag.src = config.src;
    scriptTag.integrity = config.integrity;
    scriptTag.crossorigin = config.crossorigin;
    scriptTag.referrerpolicy = config.referrerpolicy;
    scriptTag.setAttribute('src', config.src);
    scriptTag.setAttribute('integrity', config.integrity);
    scriptTag.setAttribute('crossorigin', config.crossorigin);
    scriptTag.setAttribute('referrerpolicy', config.referrerpolicy);

// scriptTag.async = true
    // doc.head.insertAdjacentHTML('afterbegin', scriptEl)
    // console.log(doc.head);
    doc.head.appendChild( scriptTag)
    // doc.head.insertAdjacentElement('beforeend', scriptTag)
console.log(doc.head);
  }

  // export default async () => {
  //   const r = await fetch('https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.3.0/rxjs.umd.min.js')
  //   const x = await r.text()
  //   return x
  //   // console.log('x', x);
  //   // return rxjs
  // }