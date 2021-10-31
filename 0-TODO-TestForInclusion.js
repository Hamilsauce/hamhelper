import utils from './modules/utils.js'
import ham from './hamhelper1.0.0.js'
const { getValueType } = utils;
const { help } = ham;

class InclusionConfig {
  poop = 'poo'
}

export const testForInclusion = (collection = null, queryItem = null) => {
  const inclusionMap = new Map(
    [
      [
        'string',
        () => collection.length !== 0 && collection.includes(queryItem)
      ],
      [
        'array',
        () => collection.length !== 0 && collection.includes(queryItem) ?
        collection.reduce((output, el, i) => el === queryItem ?
          ({ count: ++output.count, indexes: [...output.indexes, i] }) :
          output, { count: 0, indexes: [] }) :
        false
      ],
      [
        'map',
        () => collection.size !== 0 && collection.has(queryItem)
      ],
      [
        'set',
        () => collection.size !== 0 && collection.has(queryItem)
      ],
      [
        'object',
        /* Object keys must be strings */
        () => itemType === 'string' ? Object.keys(collection).includes(queryItem) : null
      ],
    ]
  );

  const [collectionType, itemType] = [getValueType(collection), getValueType(queryItem)];
  if (['undefined', 'null', 'number', 'date'].includes(collectionType) || itemType === null) return null
  return inclusionMap.has(collectionType) ? inclusionMap.get(collectionType)() : null;
}



/*  TODO   SCRATCH  TODO */

const deepTestForInclusion = (collection = [], queryItem = null) => {
  //TODO Test for inclusion in nested collections
  return this.tableData.every(_ => !['APPROVED', 'UNDER REVIEW'].includes(_.status_.toUpperCase() || '')) || false;
}

const NOTES = (collection = [], queryItem = null) => {
  /**
   * 
   * PARAMS: collection, queryItem(s)?, equality type/case-sensitivity, quantifier (some, every)
   * 
   * 
   * Given an array, map, object, or string, and a query value, 
   * Test if provided collection contains item.
   * 
   * 
   * Allow user to set a quantifier (every or some)
   * 
   * 
   * Idea - If not found, return false; If FOUND, return object containing
   * count of occurences, indexes/positions, etc
   * 
   * 
   * Idea - Allow passing in of multiple COLLECTIONS and/or ITEMS;
   *   Maybe allow for user to pass in config object specifying different query params
   *   for different collections/items (ie, for collection 1 test for every, collection 2 test for some)
   * 
   * 
   * 
   */
}

{testForInclusion}