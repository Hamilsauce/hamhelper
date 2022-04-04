import { getElementDataset, coerceData } from '/modules/dom.get-element-data.js'

export default {

  // @element  @dataset 
  setElementDataset(el, dataObj = {}) {
    if (dataObj && el) Object.entries(dataObj).forEach(([prop, val]) => el.dataset[prop] = val);
    else this.log('no data provided')
  },

  // @element  @dataset 
  getElementDataset(el) {
    if (!el) return;
   return getElementDataset(el)
  },



  // @ ADD REMOVE CLASS
  classList(el, add = true, ...classes) {
    if (typeof selector === 'string') return parentEl.querySelector(selector);
    else console.error('error: selector must be string (in HamHelper.qs()).');
  },

  // @queryselector
  qs(selector, parentEl = document) {
    if (typeof selector === 'string') return parentEl.querySelector(selector);
    else console.error('error: selector must be string (in HamHelper.qs()).');
  },

  // @querySelectorAll
  qsa(selector, parentEl = document) {
    if (typeof selector === 'string') return parentEl.querySelectorAll(selector);
  },

  // @createElement
  newElement(tag = 'div', attrs = {}, children = [], template = '') {
    const el = attrs.namespaceURI ? document.createElementNS(attrs.namespaceURI, tag) : document.createElement(tag);

    el.innerHTML = template;

    for (let attr of Object.keys(attrs)) {
      if (attr === 'data') { Object.entries(attrs[attr]).forEach(([prop, val]) => el.dataset[prop] = val) }
      else if (attr === 'classList') { el.classList.add(...attrs[attr]) }
      else if (attr === 'style') {
        if (typeof attrs[attr] === 'string') el.style = `${el.style} ${attrs[attr]}`
        else Object.entries(attrs[attr]).forEach(([prop, val]) => el.style[prop] = val);
      }
      else el.setAttribute(attr, attrs[attr])
    }
    children.forEach(child => el.appendChild(child));
    return el;
  },

  // @removeAllChildren
  removeAllChildren(parent) {
    try {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
      }
    }
    catch (e) { console.error(`HAM ERROR: Unable to remove children from PARENT (${parent})`) }
  },

  help() {
    return `
   === DOM ===
   
- setElementDataset(el, dataObj = {}): adds to dataset

- getElementData(el) => new Map of coerced data attributes

- DOM.newElement(tag = 'div', attrs = {}, children = [], template = '');

- DOM.qs(selector, parentEl = document);

- DOM.qsa(selector, parentEl = document);

- DOM.removeAllChildren(parent = element);

- DOM.setElementDataset(el, dataObj = {});

  `.trim();
  }
}
