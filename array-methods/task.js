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

console.log(isBalanced("["));

// * the function receives an expression like this one: '3a + [2 - (a * b)]'
// it should return true if [] and () brackets in the expression are "balanced" - 
// check tests to understand what that means. and false otherwise
// hint: organize a stack, using .push() and .pop() methods
function isBalanced(str) {
  var nextBrace;
  var isExpression = false;   // если не встретиться скобок то значит это не наш случай
  const bracesOpen = ['(', '['];
  const bracesClose = [')', ']'];
  var arr = [];
  // Array.from(str).forEach(function(x){   // можно было б такую конструкцию применить, но это читаемость не улучшит
  for (var i = 0; i < str.length; i++)                                                // проходим по всем єлементам стоки
  {
    if (bracesOpen.includes(str[i]) || bracesClose.includes(str[i])) {                // если елемент строки откывающая или закрыв. скобка то делаем
      isExpression = true;
      if (bracesOpen.includes(str[i])) {
        arr.push(str[i]);                              // если открывающая то добавляем
      } else
        if (bracesClose.includes(str[i]) && nextBrace == str[i]) {  // если закрывающая и она соответствует ранее открывающей то удаляем
          arr.pop(str[i]);
        } else return false;                                        // если ничего не выполнилось но тем мение этот символ скобка то значит она сразу закрывающая или не та пара
      nextBrace = bracesClose[bracesOpen.indexOf(arr[arr.length - 1])]; // определяется скобка которая может быть закрывающей, исходя из последеней в стеке 
    }
  }
  return !arr.length && isExpression;
}