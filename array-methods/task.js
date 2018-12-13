// receives a single English letter and returns true if it's a vowel,
// false otherwise
function isVowel(letter) {
  var vowels = ['a', 'o', 'u', 'y', 'i', 'e'];
  return vowels.includes(letter);
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
  var resArr = luckyNumbers.slice();
  if (resArr.indexOf(13) >= 0) {
    resArr.splice(resArr.indexOf(13), 1);
  }
  return resArr;
}


// * the function receives an expression like this one: '3a + [2 - (a * b)]'
// it should return true if [] and () brackets in the expression are "balanced" - 
// check tests to understand what that means. and false otherwise
// hint: organize a stack, using .push() and .pop() methods
function isBalanced(str) {
  str = str.split('');
  var stack = [];
  var res = '';
  for (var i = 0; i < str.length; i++) {
    if ( str[i] == '[' || str[i] == '(' ) {
      stack.push(str[i]);
    } else if (str[i] == ']'){
      res = stack[stack.length - 1] == '[';
      stack.pop();
      return res;
    } else if (str[i] == ')'){
      res = stack[stack.length - 1] == '(';
      stack.pop();
      return res;
    }    
  }
  return stack.length < 0;
}