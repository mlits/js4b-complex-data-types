// receives a single English letter and returns true if it's a vowel,
// false otherwise
function isVowel(letter) {
  var vowels = ['a', 'o', 'u', 'y', 'i', 'e'];
  var isVowel = vowels.includes(letter);
  return isVowel;
}

// 'hello' => 'olleh'
// hint: you may want to use .split(), .reverse() and one more function ;)
function reverse(str) {
  var arrayStr = str.split('');
  arrayStr = arrayStr.reverse();
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
  var array = str.split('');
  var openingBracketsArray = ['`', '(', '{', '[', '"', '<', "'"];
  var closingBracketsArray = ['`', ')', '}', ']', '"', '>', "'"];
  var arrayForBrackets = [];
  var indexOpeningBrackets = [];
  var indexClosingBrackets = [];
  var isOnlyClothingBrackets;
  for (let i = 0; i < array.length; i++) {
    if (openingBracketsArray.includes(array[i])) {
      indexOpeningBrackets.push((openingBracketsArray.indexOf(array[i])).toString());
      arrayForBrackets.push(array[i]);
    }
    if (closingBracketsArray.includes(array[i])) {
      indexClosingBrackets.push((closingBracketsArray.indexOf(array[i])).toString());
      if (indexOpeningBrackets[indexOpeningBrackets.length - 1] == indexClosingBrackets[indexClosingBrackets.length - 1]) {
        isOnlyClothingBrackets = arrayForBrackets.pop();  /// Правильный ли if? Мне не нравится, что он выводит в консоль
        indexOpeningBrackets.pop();                       /// Должен же выводить элемент == элемент, верно??
        indexClosingBrackets.pop();
      } else {
        return false;
      }
    }
  }
  if (isOnlyClothingBrackets == undefined) {
    return false;
  }
  if (arrayForBrackets.length != 0) {
    return false;
  }
  return true;
}