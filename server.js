const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for '/layout'
app.get('/layout', (req, res) => {
  const layoutPath = path.join(__dirname, 'layout.html');
  res.sendFile(layoutPath);
});

// Define a route for '/'
app.get('/', (req, res) => {
  const homePath = path.join(__dirname, 'index.html');
  res.sendFile(homePath);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
