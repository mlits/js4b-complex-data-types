// sort pair of numbers in descending order.
// pair is always an array of just 2 numbers.

function sortPairDesc(pair) {
  var a = Math.max.apply(null, pair);
  var b = Math.min.apply(null, pair);
  pair[0] = a; pair[1] = b;
  return pair;
}

// function sortPairDesc(pair) {
//   var pi = pair[0]; 
//   var pii = pair[1];
//   if (pair[0] >= pair[1]) {
//   return pair;
//   } else if (pair[1] > pair[0]) {
//     pair[0] = pii;
//     pair[1] = pi;
//     return pair;
// }}

// arr1 and arr2 are arrays.
// return longer array or first one.
// if sizes are equal - return arr1
function getLonger(arr1, arr2) {
  for (var i = 0; i <= arr1.length; i++);
  for (var i2 = 0; i2 <= arr2.length; i2++);
  if (i >= i2) return arr1;
  else return arr2;
}

// values is an array with numbers.
// return sum of all the elements.
function getSum(values) {
  var sum = 0;
  for (var i = 0; i < values.length; i++) {
    sum = sum + values[i];
  }
  return sum;
}

// * arr1 and arr2 are arrays with numbers.
// return array where sum of all the numbers is greater.
// if sum is equal - return longer array
function getWithBiggerSum(arr1, arr2) {
  var sum1 = 0;
  var sum2 = 0;
  for (var i0 = 0; i0 < arr1.length; i0++) {
    sum1 = sum1 + arr1[i0];
  }
  for (var i1 = 0; i1 < arr2.length; i1++) {
    sum2 = sum2 + arr2[i1];
  }
  if (sum1 > sum2) {
    return arr1;
  } else if (sum1 < sum2) {
    return arr2;
  } else if (sum1 === sum2 && i0 >= i1) {
    return arr1;
  } else if (sum1 === sum2 && i1 > i0) {
    return arr2;
  }
}

