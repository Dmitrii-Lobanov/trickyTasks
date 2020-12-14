/*
  Given an array of 1s and 0s which has all 1s first followed by all 0s. 
  Find the number of 0s. Count the number of zeroes in the given array.
*/

function firstZero(arr, low, high) {
  let mid;
  if(high >= low) {
    mid = low + Math.floor((high - low) / 2);
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) return mid;
    if (arr[mid] === 1) return firstZero(arr, mid + 1, high);
    return firstZero(arr, low, mid - 1);
  }
  
  return -1;
}

function countZeroes(arr) {
  const first = firstZero(arr, 0, arr.length - 1);
  if(first === -1) return 0;
  
  return arr.length - first;
}

countZeroes([1,1,1,1,0,0]);
countZeroes([1,1,0,0,0,0]);
