// sort pair of numbers in descending order.
// pair is always an array of just 2 numbers.
function sortPairDesc(pair) {
  return pair.sort(function (prev, current) {
    return current - prev;
  });
}

// arr1 and arr2 are arrays.
// return longer array or first one.
// if sizes are equal - return arr1
function getLonger(arr1, arr2) {
  if (arr1.length >= arr2.length) return arr1;
  return arr2;
}

// values is an array with numbers.
// return sum of all the elements.
function getSum(values) {
  return values.reduce(function (a, b) {
    return a + b;
  });
}

// * arr1 and arr2 are arrays with numbers.
// return array where sum of all the numbers is greater.
// if sum is equal - return longer array
function getWithBiggerSum(arr1, arr2) {
  function getSum(a, b) {                         // можно было вынести данную функцию в глабольную и сократить общий код
    return a + b;
  }
  if (arr1.reduce(getSum) == arr2.reduce(getSum)) return getLonger(arr1, arr2);
  if (arr1.reduce(getSum) > arr2.reduce(getSum))
    return arr1; else
    return arr2;
}

