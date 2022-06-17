// Timeout (run function once after some time)

console.log('Hello!');
setTimeout(() => {
  console.log('... are u still there?');
}, 2000);

console.log('goodbye!');

// Interval (run function periodically)

const id = setInterval(() => {
  console.log(Math.random());
}, 1000);

// Global method to cancel repeating action defined in interval

clearInterval(id);
