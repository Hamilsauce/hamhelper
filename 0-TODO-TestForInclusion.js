import { getValueType } from './0-get-type-instanceof.js'

console.log('getValueType', getValueType([]));

const deepTestForInclusion = (collection = [], queryItem = null) => {
  // Test for inclusion in nested collections
  return this.tableData.every(_ => !['APPROVED', 'UNDER REVIEW'].includes(_.status_.toUpperCase() || '')) || false;
}

class InclusionConfig {
  poop = 'poo'
}

const testForInclusion = (collection = [], queryItem = null) => {
  const hasNoActivePayoutRequest = () => {
    return (this.tableData.every(_ => !['APPROVED', 'UNDER REVIEW'].includes(_.status_.toUpperCase() || '')) || false);
  }


  const exprMap = new Map();
  exprMap.set(typeof collection === 'string', 'string')
  exprMap.set(collection instanceof Array, 'array')
  exprMap.set(collection instanceof Set, 'set')
  exprMap.set(collection instanceof Map, 'map')
  let nul = null
  // console.log('typeof un', nul instanceof null)

  console.log('[...exprMap.entries()]', [...exprMap.entries()])

  // console.log('exprMap.get(collection', exprMap.get(true))
  // }
  // switch (exprMap.get()) {
  // case: 
  // }

  /**
   * 
   * @PARAMS collection, queryItem(s)?, equality type/case-sensitivity, quantifier (some, every)
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

const coll = new Map([['suck', 'me']])

testForInclusion(coll)




const notes = (collection = [], queryItem = null) => {
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