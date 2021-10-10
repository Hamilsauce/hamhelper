/* Last updated: 10/1/21 */
import c2j from './modules/csvToJson.js';
import dom from './modules/DOM.js';
import date from './modules/date.js';
import array from './modules/array.js';
import text from './modules/text.js';
import event from './modules/event.js';
import help from './modules/help.js';

export default class HamHelper {
  // constructor() {}

/* @ CSVTOJSON */
  static get csvToJson() { return c2j(csv, ',') }
 
 /* @ DOM */
  static get DOM() { return dom }

 /* @ TEXT */
  static get text() { return text }

  /* @ DATE */
  static get date() { return date }

  /* @ ARRAY */
  static get array() { return array }
 
  /* @ EVENT */
  static get event() {return event}
  
  /* @ HELP */
  static get help() { return help }

  /* @ MAP */
  static mapFromObject(obj) { return new Map(Object.entries(obj)) }

  /* @ OBJECT */
  static isObjectEmpty(obj) { return Object.keys(obj).length === 0 }

  /* @ OBJECT */
  static arrayFromObjectProperties(obj, propName = 'propertyName') {
    return Object.entries(obj)
      .reduce((acc, [key, value]) => {
        if (!acc[propName]) value[propName] = key;
        return [...acc, { ...value }]
      }, [])
  }

}

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