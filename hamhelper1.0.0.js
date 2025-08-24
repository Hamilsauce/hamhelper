/* Last updated: 04/07/23 */

import {
  dom,
  svg,
  date,
  array,
  text,
  helpObj,
  utils,
  c2j,
  pipe,
  twoWayMap,
  json,
  log,
  object,
  templater,
  addDragAction,
  addPanAction,
  addSvgPinchZoom,
  getPanZoom,
  importUMD,
  rxjs,
  timer,
  waitMs,
  sleep,
} from './modules/index.js';

export default class HamHelper {
  
  /* @ waitMs */
  static get waitMs() {
    return waitMs
  }
  
  /* @ sleep */
  static get sleep() {
    return sleep
  }
  
  /* @ addSvgPinchZoom */
  static get addSvgPinchZoom() {
    return addSvgPinchZoom
  }
  
  /* @ addPanAction    */
  static get addPanAction() {
    return addPanAction
  }
  
  /* @ getPanZoom    */
  static get getPanZoom() {
    return getPanZoom
  }
  
  /* @ PIPELINE */
  static get pipeline() { return pipe }
  
  /* @ IMPORT UMD MODULE EXPORTS */
  static get importUMD() { return importUMD }
  
  /* @ RXJS LIBRARY MODULE */
  static get rxjs() { return rxjs }
  
  /* @ TIME LOGGER MODULE */
  static get timer() { return timer }
  
  /* @ CONSTANTS */
  static get CONSTANTS() {
    return {
      ALPHABET: (
        new Array('Z'.charCodeAt() - 'A'.charCodeAt() + 1)
        .fill(null).map((v, i) => ('A'.charCodeAt() === 0 ? 1 : 'A'.charCodeAt()) + i)
      ).map(x => String.fromCharCode(x)),
    }
  }
  
  /* @ JSON */
  static get json() { return json }
  
  /* @ RXJS addDragAction */
  static get addDragAction() { return addDragAction }
  
  /* @ Templater */
  static get template() { return templater }
  
  /* @ object */
  static get object() { return object }
  
  /* @ log */
  static get log() { return log }
  
  /* @ TwoWayMap */
  static get TwoWayMap() { return twoWayMap }
  
  /* @ CSVTOJSON */
  static get csvToJson() { return c2j }
  
  /* @ DOM */
  static get DOM() { return dom }
  
  /* @ SVG */
  static get SVG() { return svg }
  
  /* TODO ERROR    @ TEXT */
  static get text() { return text }
  
  /* @ DATE */
  static get date() { return date }
  
  /* @ ARRAY */
  static get array() { return array }
  
  /* @ UTIL */
  static get utils() { return utils }
  
  /* @ DOWNLOAD */
  static download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  
  
  /* @ HELP */
  static get help() {
    const { help } = helpObj;
    return help;
  }
  
  /* @ MAP */
  static mapFromObject(obj) { return new Map(Object.entries(obj)) }
  
  /* @ ASYNC */
  static async asyncFetchMap(sources) {
    // console.log(sources);
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
          new Map([
            [key, [...Object.entries({ ...data })]]
          ])
        );
        return acc;
      }, new Map([
        [collectionName, new Map()]
      ]));
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