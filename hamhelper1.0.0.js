// Last updated: 9/15/21
export default class HamHelper {
  constructor() {}

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
    const arr = Object.entries(obj)
      .reduce((acc, [key, value]) => {
        if (!acc[propName]) val[propName] = key;
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

  static DOM = {
    qs(selector, parentEl = document) {
      // @queryselector
      if (typeof selector === 'string') return parentEl.querySelector(selector);
      else console.error('error: selector must be string (in HamHelper.qs()).');
    },

    qsa(selector, parentEl = document) {
      // @querySelectorAll
      if (typeof selector === 'string') return parentEl.querySelectorAll(selector);
      else console.error('error: selector must be string (in HamHelper.qsa()).');
    },

    newElement(tag = 'div', attrs = {}, children = [], template = '') {
      // @createElement
      const el = document.createElement(tag);
      el.innerHTML = template;

      for (let attr of Object.keys(attrs)) {
        if (attr === 'data') { Object.entries(attrs[attr]).forEach(([prop, val]) => el.dataset[prop] = val) }
        else if (attr === 'classList') { el.classList.add(...attrs[attr]) }
        else if (attr === 'style') {
          if (typeof attrs[attr] === 'string') el.style = attrs[attr];
          else Object.entries(attrs[attr]).forEach(([prop, val]) => el.style[prop] = val);
        }
        else el.setAttribute(attr, attrs[attr])
      }
      children.forEach(child => el.appendChild(child));
      return el;
    },

    removeAllChildren(parent) {
      // @removeAllChildren
      try { while (parent.firstChild) { parent.removeChild(parent.firstChild) } }
      catch (e) { console.error(`HAM ERROR: Unable to remove children from PARENT (${parent})`) }
    },

    setElementDataset(el, dataObj = {}) {
      // @element  @dataset 
      if (!this.isObjectEmpty(dataObj) && el) Object.entries(dataObj).forEach(([prop, val]) => el.dataset[prop] = val);
      else this.log('no data provided')
    }
  }

  static help(msg = 'Leave a message such as where this call is located.') {
    const helpText = console.log(`
*******************
HAM FUNCTIONS
*******************
*MESSAGE: ${msg}

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