// It's time to get practice with the map method! Define a function called cleanNames.  It should accept an array of strings, which may contain additional space characters at the beginning and end. The cleanNames function should use the array map method to return a new array, full of trimmed names.  For example:

// cleanNames([" timothee", "   darth_hater", "sassyfrassy   ", " elton john   "]);
// // => ["timothee", "darth_hater", "sassyfrassy", "elton john"]
// Hint: use a string method to TRIM each string.

// Please note, in the previous lecture we used a predefined array to run our map function on, e.g., const numbers = [1, 2, 3, 4, 5]; but, this exercise is a little different. You will be writing a function that accepts an array of strings as its argument. You won't actually define an array and pass it in to the function, that is done behind the scenes in the exercise's tests. In your code, the function's argument is the array, the argument name is arbitrary and it is implied that it will be an array of strings, you will write your function logic to be called on the array argument variable.

// MY SOLUTION:

// OPTION 1 - using keyword 'function':

// function cleanNames(arr) {
//   return arr.map(function (name) {
//     return name.trim();
//   });
// }

// OPTION 2 - using arrow function (and function expression):

// const cleanNames = (arr) => {
//   return arr.map((name) => {
//     return name.trim();
//   });
// };

// OPTION 3 - using arrow function (and function expression) - but shorter:

const cleanNames = (arr) => arr.map((name) => name.trim());
