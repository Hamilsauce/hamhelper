/* Last updated: 10/1/21 */
import dom from './modules/DOM.js';
import date from './modules/date.js';
import array from './modules/array.js';
import text from './modules/text.js';// <<< ERROR
import event from './modules/event.js';
import helpObj from './modules/help.js';
import utils from './modules/utils.js';
import c2j from './modules/csvToJson.js';

export default class HamHelper {
  // constructor() {}

  /* @ CSVTOJSON */
  static get csvToJson() { return c2j(csv, ',') }

  /* @ DOM */
  static get DOM() { return dom }

  /* TODO ERROR    @ TEXT */
  static get text() { return text }

  /* @ DATE */
  static get date() { return date }

  /* @ ARRAY */
  static get array() { return array }

  /* @ EVENT */
  static get event() { return event }

  /* @ UTIL */
  static get utils() { return utils }

  /* @ HELP */
  static get help() {
    const { help } = helpObj;
    return help;
  }

  /* @ MAP */
  static mapFromObject(obj) { return new Map(Object.entries(obj)) }

  /* @ ASYNC */
  static async asyncFetchMap(sources) {
    console.log(sources);
    return await Promise.all(
      sources.map(async ({ name, url }, i) => {
        const response = await fetch(url);
        return { key: name, data: await response.json() }
      }))
  };


  /* @ ASYNC */
  static async asyncReduce({ collectionName, sources }) {
    return (await fetchCollectionSources(sources))
      .reduce((acc, { key, data }, i) => {
        acc.get(collectionName).set(
          key,
          new Map([[key, [...Object.entries({ ...data })]]])
        );
        return acc;
      }, new Map([[collectionName, new Map()]]));
  };


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

  getValueType(target, deepTest = false, customClassType = null) {
    // TODO Work on params
    if (target === null) return 'null';
    if (typeof target === 'undefined') return 'undefined';
    if (typeof target === 'object') {
      if (target instanceof Array || Array.isArray(target)) return 'array';
      if (target instanceof Date) return 'date';
      if (target instanceof Map) return 'map';
      if (target instanceof Set) return 'set';
      else return 'object'
    } else return typeof target;
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