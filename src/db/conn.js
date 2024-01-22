const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/E-commerce').then((res) => {
  console.log('Connection is successfully established!');
}).catch((err) => {
  console.error('Error connecting to the database:', err.message);
});
