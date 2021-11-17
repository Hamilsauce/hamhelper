export default {
  zip(...arrs) {
    return arrs[0]
      .reduce((acc, curr, i) => {
        let row = [];
        arrs.forEach((arr, j) => row = [...row, arr[i]]);
        return [...acc, row];
      }, []);
  },

  zipIntoObject(arr1, arr2, comparer) {
    return arr1.reduce((obj, el, i) => {
      return { ...obj, [i <= arr2.length ? arr1[i] : `COLUMN ${i}`]: arr2[i] }
    }, {});
  },


  multiFilter(array = [], ...criteria) {
    
  },


  groupBy() {},


  difference(arr1, arr2, comparer) { return arr1.filter(arr1El => !arr2.includes(arr1El)) },
  intersection(arr1, arr2, comparer) { return arr1.filter(arr1El => arr2.includes(arr1El)) },
  union(arr1, arr2, comparer) { return [...new Set([...arr1, ...arr2])] },



  async asyncPromise() {
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const allResults = await Promise.all(items.map(async (item) => {
      return 'poop'
    }))
  },


  help(method = null) {
    return `
    
      === Array ===
  
- zip(...arrs); 
- zipIntoObject(arr1, arr2, comparer);
- difference(arr1, arr2, comparer); 
- intersection(arr1, arr2, comparer); 
- union(arr1, arr2, comparer);
    `.trim();
  }
}