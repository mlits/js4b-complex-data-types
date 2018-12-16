// receives a single English letter and returns true if it's a vowel,
// false otherwise
function isVowel(letter) {
  var vowels = ['a', 'o', 'u', 'y', 'i', 'e'];
  var isVowel = vowels.includes(letter.toLowerCase());
  return isVowel;
}

// 'hello' => 'olleh'
// hint: you may want to use .split(), .reverse() and one more function ;)
function reverse(str) {
  var arrayStr = str.split('').reverse();
  var string = arrayStr.join('');
  return string;
}

// luckyNumbers is an array of numbers which besides the lucky numbers
// contains 13, exactly once. find and remove 13 from the array.
// requirements: use .indexOf(), slice() and .splice(),
// _DO NOT_ modify the array passed as the parameter
function removeUnlucky(luckyNumbers) {
  var array = luckyNumbers.slice();
  var index = array.indexOf(13);
  array.splice(index, 1);
  return array;
}


// * the function receives an expression like this one: '3a + [2 - (a * b)]'
// it should return true if [] and () brackets in the expression are "balanced" - 
// check tests to understand what that means. and false otherwise
// hint: organize a stack, using .push() and .pop() methods
function isBalanced(str) {
  var array = str.replace(/\s/g, '').split('');
  var stack = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '[' || array[i] == '(') {
      stack.push(array[i]);
    } else if (array[i] == ']' || array[i] == ')') {
      if (array[i] == ']' && stack[stack.length - 1] == '[') {
        stack.pop();
      } else if (array[i] == ')' && stack[stack.length - 1] == '(') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return (stack.length == 0);
}
