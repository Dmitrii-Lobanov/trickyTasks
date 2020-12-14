function first(arr, low, high, num) {
  let mid; 
  
  if(high >= low) {
    mid = Math.floor((low + high) / 2);
    if((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      return first(arr, mid + 1, high, num);
    } else {
      return first(arr, low, mid - 1, num);
    }
  }  
  return -1;
}

function last(arr, low, high, num) {
  let mid;
  
  if(high >= low) {
    mid = Math.floor((low + high) / 2);
    if((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      return last(arr, low, mid - 1, num);
    } else {
      return last(arr, mid + 1, high, num);
    }
  }
  return -1;
}

function countOccurences(arr, num) {
  // Get the index of first occurence of num
  let i = first(arr, 0, arr.length - 1, num);
  
  if(i === -1) return i;
  
  // Get the index of last occurence of num
  let j = last(arr, i, arr.length - 1, num);
  
  return j - i + 1;
}

countOccurences([1, 1, 2, 2, 2, 2, 3], 2);
countOccurences([1, 1, 2, 2, 2, 2, 3], 3);
