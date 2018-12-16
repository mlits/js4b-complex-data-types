// receives a single English letter and returns true if it's a vowel,
// false otherwise
function isVowel(letter) {
  var vowels = ['a', 'o', 'u', 'y', 'i', 'e'];
  return vowels.indexOf(letter.toLowerCase()) >= 0 ? true : false;
}

// 'hello' => 'olleh'
// hint: you may want to use .split(), .reverse() and one more function ;)
function reverse(str) {
  return str.split('').reverse().join('');
}

// luckyNumbers is an array of numbers which besides the lucky numbers
// contains 13, exactly once. find and remove 13 from the array.
// requirements: use .indexOf(), slice() and .splice(),
// _DO NOT_ modify the array passed as the parameter
function removeUnlucky(luckyNumbers) {
  var array = luckyNumbers.slice();
  array.splice(array.indexOf(13), 1);
  return array;
}


// * the function receives an expression like this one: '3a + [2 - (a * b)]'
// it should return true if [] and () brackets in the expression are "balanced" - 
// check tests to understand what that means. and false otherwise
// hint: organize a stack, using .push() and .pop() methods
function isBalanced(str) {
  var array = str.split('');
  var stack = [];
  
  if (str === '' || array === []) {
    return false;
  }

  for (var i = 0; i < array.length; i++) {

    if (array[i] === '(' || array[i] === '[') {
      stack.push(array[i]);
    }

    if (array[i] === ')' && (stack.pop() !== '(')) {
      return false;
    }

    if (array[i] === ']' && (stack.pop() !== '[')) {
      return false;
    }

  }

  if (stack.length) {
    return false; 
  }

  return true;
}
