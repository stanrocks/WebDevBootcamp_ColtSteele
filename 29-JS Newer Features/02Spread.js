// 1. Spread for function calls:
const nums = [9, 3, 2, 8];
Math.max(nums); // NaN
//Use spread!
Math.max(...nums); // 9
// Same as calling:
// Math.max(9,3,2,8)

// 2. Spread in Array Literals (create new arr using existing arr)
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

[...nums1, ...nums2]; // [1, 2, 3, 4, 5, 6]

['a', 'b', ...nums2]; // ['a', 'b', 4, 5, 6]

[...nums1, ...nums2, 7, 8, 9]; // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 3. Spread in object literals
const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };

const dog = { ...canine, isPet: true }; // { family: 'Caninae', furry: true, isPet: true }

const lion = { ...feline, genus: 'Panthera' }; // { legs: 4, family: 'Felidae', genus: 'Panthera' }

const catDog = { ...feline, ...canine }; // { legs: 4, family: 'Caninae', furry: true };
