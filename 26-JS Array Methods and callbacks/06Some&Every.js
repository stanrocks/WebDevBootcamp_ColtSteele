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
