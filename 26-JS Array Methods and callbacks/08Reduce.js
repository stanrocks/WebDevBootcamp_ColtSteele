// Summing an array

[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// callback 1: accumulator = 3, currentValue = 5, return value = 8
// callback 2: accumulator = 8, currentValue = 7, return value = 15
// callback 3: accumulator = 15, currentValue = 9, return value = 24
// callback 4: accumulator = 24, currentValue = 11, return value = 35

// Example 1:
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);
