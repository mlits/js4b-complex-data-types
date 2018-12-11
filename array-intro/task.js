// sort pair of numbers in descending order, e.g. [2, 3] should become [3, 2]
// while [5, 4] should stay [5, 4].
// pair is always an array of _just_ 2 numbers.
// please _don't_ use Array.prototype.sort() method
function sortPairDesc(pair) {
  return pair.sort(function (a, b) {
    return a - b;
  }).reverse();
}

// arr1 and arr2 are arrays.
// return longer array or first one.
// if sizes are equal - return arr1
function getLonger(arr1, arr2) {
  return arr1.length !== arr2.length && arr1.length < arr2.length ? arr2 : arr1
}

// values is an array with numbers.
// return sum of all the elements.
// please don't over-complicate it, use _for_ loop
function getSum(values) {
  return values.reduce(function (a, b) {
    return a + b;
  })
}

// * arr1 and arr2 are arrays with numbers.
// return array where sum of all the numbers is greater.
// if sum is equal - return longer array
// note: you can use functions implemented above
function getWithBiggerSum(arr1, arr2) {
  var arr1Length = arr1.length;
  var arr2Length = arr2.length;
  var arr1Sum = getSum(arr1);
  var arr2Sum = getSum(arr2);

  if (arr1Sum === arr2Sum) return getLonger(arr1, arr2);

  return arr1Sum !== arr2Sum && arr1Sum < arr2Sum ? arr2 : arr1
}
