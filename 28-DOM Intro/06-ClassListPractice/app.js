// In index.html, you'll find 6 <li> elements, two of which have the 'highlight' class applied to them.

// Please use JavaScript and the classList property to invert which elements have the highlight class.

// Basically iterate over all the <li> elements and toggle the class of 'highlight' on each one.

// WRITE YOUR CODE IN HERE:

const items = document.querySelectorAll('li');

for (item of items) {
  item.classList.toggle('highlight');
}
