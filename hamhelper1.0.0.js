// Last updated: 8/30/21

export default class HamHelper {
  constructor() {}

  // !!Zip Array
  static array = {
    zip(...arrs) {
      return arrs[0]
        .reduce((acc, curr, i) => {
          let row = [];
          arrs.forEach((arr, j) => row = [...row, arr[i]]);
          return [...acc, row];
        }, []);
    }
  }

  // !!map
  static mapFromObject(obj) { return new Map(Object.entries(obj)) }
  // !!obj
  static isObjectEmpty(obj) { return Object.keys(obj).length === 0 }

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

    newElement(tag = 'div', attrs = {}, children = [], textContent = '') {
      // @createElement
      const el = document.createElement(tag);
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

  static help() {
    const helpText = console.log(`
*******************
HAM FUNCTIONS
*******************

    === Array ===
    
- static array.zip(...arrs)
  
  
    === DOM ===

- DOM.newElement(tag = 'div', attrs = {}, children = [], textContent = '');

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