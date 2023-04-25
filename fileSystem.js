const fs = require('fs');

// Create a file named "welcome.txt" containing one line "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt created!');
});

// Read data from file hello.txt and console.log it
fs.readFile('hello.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
