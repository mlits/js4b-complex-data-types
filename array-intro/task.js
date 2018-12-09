// sort pair of numbers in descending order.
// pair is always an array of just 2 numbers.
function sortPairDesc(pair) {
  return pair.reverse();
}

// arr1 and arr2 are arrays.
// return longer array or first one.
// if sizes are equal - return arr1
function getLonger(arr1, arr2) {
  if ( arr1.length >= arr2.length ){
    return arr1;
  }else{
    return arr2;
  }
}

// values is an array with numbers.
// return sum of all the elements.
function getSum(values) {
  return values.reduce((a, b) => a + b, 0);
}

// * arr1 and arr2 are arrays with numbers.
// return array where sum of all the numbers is greater.
// if sum is equal - return longer array
function getWithBiggerSum(arr1, arr2) {

  var sumArr1 = arr1.reduce((a, b) => a + b, 0);
  var sumArr2 = arr2.reduce((a, b) => a + b, 0);

  if ( sumArr1 > sumArr2 ){
    return arr1;
  }else if ( sumArr1 === sumArr2 ) {
    return getLonger( arr1, arr2 );
  }else {
    return arr2;
  }
}

