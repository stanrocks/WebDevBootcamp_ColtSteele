let input = prompt('What would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

// If not quit - run loop
while (input !== 'quit' && input !== 'q') {
  // Show todo list
  if (input === 'list') {
    console.log('**************');
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('**************');

    // Create new todo
  } else if (input === 'new') {
    const newTodo = prompt('OK, what is the new todo?');
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);

    // Delete task from list
  } else if (input === 'delete') {
    const index = parseInt(prompt('Ok, enter an index to delete:'));
    // check if user-defined index is a number
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log('Unknown index');
    }
    // another issue - user may enter a number of index that doesn't exist (eg. too high), so it's better also to check if index exists in array
  }
  input = prompt('What would you like to do?');
}

// Show goodbye
console.log('OK, you quit the app!');
