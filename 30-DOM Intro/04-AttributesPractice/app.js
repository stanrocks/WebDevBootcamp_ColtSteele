// Let's get some practice working with DOM element attributes. I've provided you with some very basic markup.  Please select the image element and:

// change its source to this url: (broken link)

// change its alt text to be "chicken"

// Colt: The url you need: 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg'
// Stan: that link doesn't work, I assume there should be an image of a chicken. So here is a proper link: 'https://cdn-icons-png.flaticon.com/512/2911/2911359.png'

const img = document.querySelector('img');
img.setAttribute(
  'src',
  'https://cdn-icons-png.flaticon.com/512/2911/2911359.png'
);
img.setAttribute('alt', 'chicken');

// Option 2:
img.src = 'https://cdn-icons-png.flaticon.com/512/2911/2911359.png';
img.alt = 'chicken';
