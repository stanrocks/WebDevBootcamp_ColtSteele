// Every - tests if all elements in array pass provided function. Returns a boolean value

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

words.every((word) => {
  return word.length === 3;
}); // true

words.every((word) => word[0] === 'd'); // false

words.every((w) => {
  let lastLetter = w[w.length - 1];
  return lastLetter === 'g';
}); // true

// shorter option:
words.every((w) => w[w.length - 1] === 'g'); // true

// Some - similar to every, but returns true if ANY of the array elements pass provided function. Returns a boolean value

const otherWords = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

// Are there any words longer than 4 characters?
otherWords.some((word) => {
  return word.length > 4;
}); // true

// Do any words start with 'Z'?
otherWords.some((word) => word[0] === 'Z'); // false

// Do any words contain 'cake'?
otherWords.some((w) => w.includes('cake')); // true
