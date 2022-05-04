let dataUrl = '../data/FOLDERPATHS.json'


let targetName = 'Sibelius';
let targetPath = [
  '003 Music Exchange (Shared Projects)',
  '.VSTs. DAWS, SOFTWARE',
  'MIDI and DAW Stuff',
  'Sibelius',
].join('\\');

const folders = (await (await fetch(dataUrl)).json()).folders

function onePointerSearch(collection, criteria) {
  for (let i = 0; i < collection.length - 1; i++) {
    if (collection[i].Folder === criteria.targetName) {
      return { index: i, path: collection[i].FolderPath.join('\\') }
    }
  }
  return [];
}

function twoPointerSearch(collection, criteria) {
  let left = 0,
    right = collection.length - 1;

  while (left < right) {
    const curr = [collection[left], collection[right]]
    if (curr[0].Folder === criteria.targetName) {
      return {
        index: left,
        pointer: 'left',
        path: curr[0].FolderPath.join('\\')
      }
    }

    if (curr[1].Folder === criteria.targetName) {
      return { 
        index: right,
        pointer: 'right', 
        path: curr[1].FolderPath.join('\\') }
    }

    right--;
    left++;
  }
  return ['ploot'];
}



console.time('onePointerSearch')
console.log(onePointerSearch(folders, { targetName, targetPath }))
console.timeEnd('onePointerSearch')


console.time('twoPointerSearch')
console.log(twoPointerSearch(folders, { targetName, targetPath }))
console.timeEnd('twoPointerSearch')



function onePointerSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] + arr[j] === target) return [arr[i], arr[j]];
  return [];
}
/*
The runtime of this solution would be O(n ^ 2).Because of the nested loops.Can we do better ? We
  are not using the fact that the array is SORTED!
  We can use two pointers: one pointer starting from the left side and the other from the right side.
Depending on whether the sum is bigger or smaller than the target, we move right or left.If the
sum is equal to the target, we
return the current left and right pointer’ s values.
Solution 2: Two Pointers
*/


function twoPointerSum(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    else if (sum > target) right--;
    else left++;
  }
  return [];
}



// console.table([onePointerSum([-5, -3, 1, 10], 7), twoPointerSum([-5, -3, 1, 10], 7)]);
// [-3, 10] // (10 - 3 = 7)
// console.table([onePointerSum([-5, -3, -1, 1, 2], 30), twoPointerSum([-5, -3, -1, 1, 2], 30)]);
// [] // no 2 numbers add up to 30
// console.table([onePointerSum([-3, -2, -1, 1, 1, 3, 4], -4), twoPointerSum([-3, -2, -1, 1, 1, 3, 4], -4)]);
// [-3, -1] // (-3 -1 = -4)



// console.time('onePointerSum')
// onePointerSum([-3, -2, -1, 1, 1, 3, 4], -4)
// console.timeEnd('onePointerSum')


// console.time('twoPointerSum')
// twoPointerSum([-3, -2, -1, 1, 1, 3, 4], -4)
// console.timeEnd('twoPointerSum')
