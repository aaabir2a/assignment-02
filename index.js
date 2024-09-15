//1. Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.
function calculateDifference(a, b) {
    return a - b;
  }

console.log(calculateDifference(10, 5));

//2. Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(n) {
    return n % 2 !== 0;
  }

console.log(isOdd(11));

//3. Write a function named findMin that takes an array of numbers and returns the smallest number in the array

function findMin(arr) {
    return Math.min(...arr);
  }
console.log(findMin([100, 50, 200, 25]));

// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
console.log(filterEvenNumbers([10, 5, 20, 3, 4]));

//5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
  }
console.log(sortArrayDescending([24.6,23.7,18.9,76.5]));

//6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
function lowercaseFirstLetter(str) {
    if(!str){
        return str;
    }
    else{
    return str.charAt(0).toLowerCase() + str.slice(1);
    }
  }
  console.log(lowercaseFirstLetter("YELLOW"));

//7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
  }
console.log(countVowels("Quick frozEn fox jumps over the lazy dOg."));

//8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
function findAverage(arr) {
    if (arr.length === 0){
        return "empty array";
    }
    else{
    return arr.reduce((acc, current) => acc + current, 0) / arr.length;
    }
  }
console.log(findAverage([22, 42, 17, 49, 32]));

