export default {
  zip(...arrs) {
    return arrs[0]
      .reduce((acc, curr, i) => {
        let row = [];
        arrs.forEach((arr, j) => row = [...row, arr[i]]);
        return [...acc, row];
      }, []);
  },

  difference(arr1, arr2, comparer) { return arr1.filter(arr1El => !arr2.includes(arr1El)) },
  intersection(arr1, arr2, comparer) { return arr1.filter(arr1El => arr2.includes(arr1El)) },
  union(arr1, arr2, comparer) { return [...new Set([...arr1, ...arr2])] },

  groupBy() {},

  help(method = null) {
    return `
    
      === Array ===
  
- zip(...arrs); 
- difference(arr1, arr2, comparer); 
- intersection(arr1, arr2, comparer); 
- union(arr1, arr2, comparer);
    `.trim();
  }
}