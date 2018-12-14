// receives a single English letter and returns true if it's a vowel,
// false otherwise
function isVowel(letter) {
  var vowels = ['a', 'o', 'u', 'y', 'i', 'e'];
  // return vowels.some(function (vow) {
  //   return vow == letter;
  // });
  return vowels.includes(letter.toLowerCase());
}

// 'hello' => 'olleh'
// hint: you may want to use .split(), .reverse() and one more function ;)
function reverse(str) {
  return Array.from(str).reverse().join("");
}


// luckyNumbers is an array of numbers which besides the lucky numbers
// contains 13, exactly once. find and remove 13 from the array.
// requirements: use .indexOf(), slice() and .splice(),
// _DO NOT_ modify the array passed as the parameter
function removeUnlucky(luckyNumbers) {
  var myLuckyNumbers = [];
  luckyNumbers.forEach(element => {
    if (element != 13) myLuckyNumbers.push(element)
  });
  return myLuckyNumbers;
}


// * the function receives an expression like this one: '3a + [2 - (a * b)]'
// it should return true if [] and () brackets in the expression are "balanced" - 
// check tests to understand what that means. and false otherwise
// hint: organize a stack, using .push() and .pop() methods
function isBalanced(str) {
var nextBrace='';
  var bracesOpen = ['(', '['];
  var bracesClose = [')', ']'];
  var arr = [];
  for (var i = 0; i <= str.length-1; i++) {
    if (bracesOpen.includes(str[i])) {
      arr.push(str[i]);
      nextBrace = bracesClose[bracesOpen.indexOf(str[i])];
    }
    if (bracesClose.includes(str[i]) && nextBrace == str[i]) {
      arr.pop(str[i]);
      nextBrace = bracesClose[bracesOpen.indexOf(arr[arr.length-1])];
    }
  }
  return !(!!arr.length);
}