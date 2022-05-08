// Rest params collects all remaining arguments into an actual array
function sumAll(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}

sumAll(1, 2); // 3
sumAll(1, 2, 3, 4, 5); // 15

// Using reduce
function sum(...nums) {
  return nums.reduce((total, el) => total + el);
}

// Example 2
function raceResult(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}
