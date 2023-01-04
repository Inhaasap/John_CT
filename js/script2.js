// // ------ Module 2/1 ------

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// // ------ Module 2/2 ------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//     return "Access denied, wrong password!";

//   // Change code above this line
// }

// // ------ Module 2/3 ------

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
//     return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }

// // ------ Module 2/4 ------

//  // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

// // ------ Module 2/5 ------

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// // ------ Module 2/6 ------

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits [1] = "peach";
// fruits [3] = "banana";

// // ------ Module 2/7 ------

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length; 

// // ------ Module 2/8 ------

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits [lastElementIndex];

// // ------ Module 2/9 ------

// function getExtremeElements(array) {
//   // Change code below this line
// const firstElement = array[0];
// const lastElement = [array.length-1];
  
// return [array[0],array[array.length-1]];
//   // Change code above this line
// }

// // ------ Module 2/10 ------

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// // ------ Module 2/11 ------

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// const quantityWords = message.split(' ')
// const totalPrice = pricePerWord * quantityWords.length
// return totalPrice


//    // Change code above this line
// }

// // ------ Module 2/12 ------

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

// string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// // ------ Module 2/13 ------

// function slugify(title) {
//   // Change code below this line

// return title.toLowerCase().split(' ').join('-');

//   // Change code above this line
// }

// // ------ Module 2/14 ------

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,-1);
// const lastThreeEls = fruits.slice(-3);

// // ------ Module 2/15 ------

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// // ------ Module 2/16 ------

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const allArray = firstArray.concat(secondArray);
//   if (allArray.length > maxLength) {
//     return allArray.slice(0, maxLength);
//   } else {
//     return allArray;
//   }
//   // Change code above this line
// }

// // ------ Module 2/17 ------

// const start = 3;
// const end = 7;

// for (let i = start; i <=end; i += 1) { // Change this line
//   console.log(i);
// }

// // ------ Module 2/18 ------

// function calculateTotal(number) {
//  // Change code below this line
// let total = 0;
//   for (let i = 1; i <= number; i +=1) {
//     total += i;
//   }
//   return total;
//   // Change code above this line
// }

// // ------ Module 2/19 ------

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) {
//   const fruit = fruits[i]; // Change this line
  
//   console.log(fruit);
// }

// // ------ Module 2/20 ------

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// // ------ Module 2/21 ------

// function findLongestWord(string) {
//   // Change code below this line
//   const arr = string.split(" ");
//   let longest = arr[0];
//   for (let i = 1; i <= arr.length - 1; i += 1) {
//     if (arr[i].length > longest.length) {
//       longest = arr[i];
//     }
//   }
//   return longest;
//   // Change code above this line
// }

// // ------ Module 2/22 ------

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <=max; i += 1) {
//   numbers.push (i);
// }
//   // Change code above this line
//   return numbers;
// }

// // ------ Module 2/24 ------

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;

//   // Change code above this line
// }

// // ------ Module 2/24 ------

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }


// // ------ Module 2/25 ------

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
// for(const item of array1) {
//   if (array2.includes(item)) {
//     newArray.push(item)
//   }
// }
// return newArray;

//  // Change code above this line
// }
// // ------ Module 2/26 ------

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const score of order) {
//     total +=score
//   }

//   // Change code above this line
//   return total;
// }

// // ------ Module 2/27 ------

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const i of numbers) {
//     if (i > value) {
//       filteredNumbers.push(i);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// // ------ Module 2/28 ------

// // Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// // ------ Module 2/29 ------

// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const newArr = []
//   for(let i = start; i<= end; i++){
//   if(i % 2 === 0){
//     newArr.push(i)
//   }
// }
// return newArr
//     // Change code above this line
// }

// // ------ Module 2/30 ------

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// // ------ Module 2/31 ------

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number = 0;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//     return i;
//     }
//   }
  
//   // Change code above this line
// }

// // ------ Module 2/32 ------

// function includes(array, value) {
//   // Change code below this line
// for (const item of array) {
//   if (item === value) {
//     return true;
//   }
 
// }
//    return false;
//   // Change code above this line
// }
