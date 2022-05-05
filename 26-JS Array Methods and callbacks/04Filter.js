// Filter creates new array with all elements that pass the test in provided function

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const odds = nums.filter((n) => {
  return n % 2 === 1; // our callback returns true or false
  // if it returns true, n is added to the filtered array
}); // [9,7,5,3,1]

const smallNums = nums.filter((n) => n < 5);
// [4,3,2,1]
