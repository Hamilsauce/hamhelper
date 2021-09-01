// Last updated: 8/30/21

export default class HamHelper {
  constructor() {}

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
      window.hamLongPressTimer = setTimeout(() => {
        callback(el)
      }, 700)
    })
    el.addEventListener('touchend', e => {
      clearTimeout(window.hamLongPressTimer)
    })
  }

  // ~queryselector
  static qs(selector, parentEl = document) {
    if (typeof selector !== 'string') {
      console.error('error: selector must be string (in HamHelper.qs()).');
      return;
    } else return parentEl.querySelector(selector);
  }
  // !!querySelectorAll
  static qsa(selector, parentEl = document) {
    if (typeof selector != 'string') {
      console.error('error: selector must be string (in HamHelper.qsa()).');
      return;
    } else {
      return parentEl.querySelectorAll(selector);
    }
  }
  // !!Create Element
  static newElement(tag = 'div', attrs = {}, children, textContent = '') {
    const el = document.createElement(tag);
    if (textContent) el.textContent = `${textContent}`;
    for (let attr of Object.keys(attrs)) {
      if (attr === 'data') {
        Object.entries(attrs[attr]).forEach(([prop, val]) => el.dataset[prop] = val);
      } else if (attr === 'classList') {
        el.classList.add(...attrs[attr])
      } else {
        el.setAttribute(attr, attrs[attr])
      }
    }
    children.forEach(child => el.appendChild(child));
    return el;
  }
  // ~~element  ~~dataset 
  static setElementDataset(el, dataObj = {}) {
    if (!this.isObjectEmpty(dataObj) && el) Object.entries(dataObj).forEach(([prop, val]) => el.dataset[prop] = val);
    else this.log('no data provided')
  }

  static help() {
    const helpText = console.log(`
*******************
HAM FUNCTIONS
*******************
	
- newElement(tag = 'div', attrs = {}, children = [], textContent = ');
	
- qs(selector, parentEl = document);
	
- qsa(selector, parentEl = document);

- selectAllContent(target = Element) 
	
- isObjectEmpty(obj) { return Object.keys(obj).length === 0 };

- mapFromObject(obj) { return new Map(Object.entries(obj)) };
	
- setElementDataset(el, dataObj = {});
	
- log(msg = '') { console.log(msg) };
********************
`.trim());
    // console.log(helpText);
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