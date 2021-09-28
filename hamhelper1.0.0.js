/* Last updated: 9/27/21 */
import c2j from './modules/csvToJson.js';
import dom from './modules/DOM.js';

export default class HamHelper {
  constructor() {

  }

  static csvToJson(csv) { return c2j(csv, ',') }
  static get DOM() { return dom }

  // @Text
  static text = {
    capitalize([first, ...rest]) {
      if (typeof first === 'string') return `${first.toUpperCase()}${rest.join('').toLowerCase()}`;
    }
  }

  /* @ DATE */
  static date = {
    createDateFromValue(dateValue = null) {
      if (dateValue === null || !this.isValidDateValue(dateValue)) return;
      return new Date(Date.parse(dateValue));
    },
    isValidDateValue(value) {
      const isStringOrNumber = typeof value === 'string' || typeof value === 'number' ? true : false;
      const canBeParsed = !isNaN(Date.parse(value)) ? true : false;
      return isStringOrNumber && canBeParsed //? true : false;
    }

  }

  /* @ ARRAY */
  static array = {
    zip(...arrs) {
      return arrs[0]
        .reduce((acc, curr, i) => {
          let row = [];
          arrs.forEach((arr, j) => row = [...row, arr[i]]);
          return [...acc, row];
        }, []);
    },

    difference(arr1, arr2, comparer) { return arr1.filter(arr1El => !arr2.includes(arr1El)) },
    intersection(arr1, arr2, comparer) { return arr1.filter(arr1El => arr2.includes(arr1El)) },
    union(arr1, arr2, comparer) { return [...new Set([...arr1, ...arr2])] },
  }

  // !!map
  static mapFromObject(obj) { return new Map(Object.entries(obj)) }
  // !!obj
  static isObjectEmpty(obj) { return Object.keys(obj).length === 0 }

  // !!obj
  static arrayFromObjectProperties(obj, propName = 'propertyName') {
    return Object.entries(obj)
      .reduce((acc, [key, value]) => {
        if (!acc[propName]) value[propName] = key;
        return [...acc, { ...value }]
      }, [])
  }


  static event = {
    emit(source, action, config) {
      const evt = new CustomEvent(action, config);
      source.dispatchEvent(evt);
    }
  }

  // !!select ~~selecttext
  static selectAllContent(target) {
    if (!(target instanceof Element)) return;
    target.addEventListener('click', e => {
      target.focus();
      let sel = window.getSelection();
      if (sel.toString() == '') { //no text selection
        window.setTimeout(() => {
          let range = document.createRange(); //range object
          range.selectNodeContents(target); //sets Range
          sel.removeAllRanges(); //remove all ranges from selection
          sel.addRange(range); //add Range to a Selection.
        }, 100);
      }
    });
  }

  static longPress(el, time = 700, callback) {
    el.addEventListener('touchstart', e => {
      window.hamLongPressTimer = setTimeout(() => { callback(e) }, 700)
    });
    el.addEventListener('touchend', e => { clearTimeout(window.hamLongPressTimer) })
  }


  static help(msg = 'Leave a message such as where this call is located.') {
    const helpText = console.log(`
*******************
HAM FUNCTIONS
*******************
*MESSAGE: ${msg}

- csvToJson(csv) { return c2j(csv, ',') }

    === Text ===
    
- capitalizeText([first, ...rest]) {

  
    === Array ===
    
- zip(...arrs);
- difference(arr1, arr2, comparer);
- intersection(arr1, arr2, comparer);
- union(arr1, arr2, comparer);
  
  
    === DOM ===

- DOM.newElement(tag = 'div', attrs = {}, children = [], template = '');

- DOM.qs(selector, parentEl = document);

- DOM.qsa(selector, parentEl = document);

- DOM.removeAllChildren(parent = element);

- DOM.setElementDataset(el, dataObj = {});


    === EVENT ===

- selectAllContent(target = Element) 

- longPress(element, time = 700, callback);


    === OBJECTS, MAPS, ETC ===

- isObjectEmpty(obj) { return Object.keys(obj).length === 0 };

- mapFromObject(obj) { return new Map(Object.entries(obj)) };

- arrayFromObjectProperties(obj, propName = 'propertyName');
	
    === HELP ===
	
- log(msg = '') { console.log(msg) };
********************
`.trim());
  }



  static createNewElement(tag = 'div', id = '', classList = [], dataObj = {}) {
    const el = document.createElement(tag);
    if (id) el.id = id
    if (classList) el.classList.add(...classList)
    if (!this.isObjectEmpty(dataObj)) {
      this.setElementDataset(el, dataObj)
    }
    return el;
  }

}

// export default new HamHelper();

function elt(name, attrs, ...children) {
  let dom = document.createElement(name);
  for (let attr of Object.keys(attrs)) {
    dom.setAttribute(attr, attrs[attr]);
  }
  for (let child of children) {

    dom.appendChild(child);
  }
  return dom;
}