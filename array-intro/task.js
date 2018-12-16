// sort pair of numbers in descending order, e.g. [2, 3] should become [3, 2]
// while [5, 4] should stay [5, 4].
// pair is always an array of _just_ 2 numbers.
// please _don't_ use Array.prototype.sort() method
function sortPairDesc(pair) {
  return pair.sort(function(a, b) {
    return b - a;
  });
}

// arr1 and arr2 are arrays.
// return longer array or first one.
// if sizes are equal - return arr1
function getLonger(arr1, arr2) {
  if (arr1.length >= arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
}

// values is an array with numbers.
// return sum of all the elements.
// please don't over-complicate it, use _for_ loop
function getSum(values) {
  return values.reduce((a, b) => a + b);
}

// * arr1 and arr2 are arrays with numbers.
// return array where sum of all the numbers is greater.
// if sum is equal - return longer array
// note: you can use functions implemented above
function getWithBiggerSum(arr1, arr2) {

  var sumArr1 = getSum(arr1);
  var sumArr2 = getSum(arr2);

  if (sumArr1 > sumArr2) {
    return arr1;
  } else if (sumArr1 === sumArr2) {
    return getLonger(arr1, arr2);
  } else {
    return arr2;
  }
}
