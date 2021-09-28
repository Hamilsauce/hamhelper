export default {
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