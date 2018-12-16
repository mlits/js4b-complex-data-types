function sortPairDesc(array) {
  if (array[0] < array[1]) {
    var container = array[0];
    array[0] = array[1];
    array[1] = container;
  }
  return array;
}


function sortArrayMaxToMin(array) {
  for (var i = 0; i < array.length; i++) {
    for (var l = i; l < array.length; l++) {
      if (array[i] < array[l + 1]) {
        var container;
        container = array[i];
        array[i] = array[l + 1];
        array[l + 1] = container;
      }
    }
  }
  return array;
}


function getLonger(arr1, arr2) {
  if (arr1.length >= arr2.length) {
    return (arr1);
  } else {
    return (arr2);
  }
}


function getSum(values) {
  var sum = 0;
  for (var i = 0; i < values.length; i++) {
    sum = sum + values[i];
  }
  return sum;
}


function getWithBiggerSum(arr1, arr2) {
  var sumArr1 = getSum(arr1);
  var sumArr2 = getSum(arr2);
  var longer = getLonger(arr1, arr2);
  if (sumArr1 > sumArr2) {
    return arr1;
  } else if (sumArr1 < sumArr2) {
    return arr2;
  } else {
    return longer;
  }
}