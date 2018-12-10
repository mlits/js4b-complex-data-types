// sort pair of numbers in descending order.
// pair is always an array of just 2 numbers.
function sortPairDesc(pair) {
  debugger;
  pair.reverse();
  return pair;
}

// arr1 and arr2 are arrays.
// return longer array or first one.
// if sizes are equal - return arr1
function getLonger(arr1, arr2) {
  if (arr1.length < arr2.length) {
    return arr2
  } else {
    return arr1;
  }
}

// values is an array with numbers.
// return sum of all the elements.
function getSum(values) {
  // // var sum = 0;
  // // for (var a = 0; a < values.length; a++) {
  // //   sum += values[a];
  // }
  var result = values.reduce(function (sum, current) {
    return sum + current;
  }, 0);
  return result;
}

// * arr1 and arr2 are arrays with numbers.
// return array where sum of all the numbers is greater.
// if sum is equal - return longer array
function getWithBiggerSum(arr1, arr2) {

  return arr1;

}

