// sort pair of numbers in descending order.
// pair is always an array of just 2 numbers.
function sortPairDesc(pair) {
  return pair.sort(function (a, b) {
    return b - a;
  });
}

// arr1 and arr2 are arrays.
// return longer array or first one.
// if sizes are equal - return arr1
function getLonger(arr1, arr2) {
  if (arr1.length >= arr2.length)
    return arr1;
  return arr2;
}

// values is an array with numbers.
// return sum of all the elements.
function getSum(values) {
  function sum(a, b) {
    return a + b;
  }
  return values.reduce(sum);
}

// * arr1 and arr2 are arrays with numbers.
// return array where sum of all the numbers is greater.
// if sum is equal - return longer array
function getWithBiggerSum(arr1, arr2) {
  if (getSum(arr1) == getSum(arr2)) return getLonger(arr1, arr2);
  if (getSum(arr1) > getSum(arr2))
    return arr1; else
    return arr2;
}


