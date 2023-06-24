const express = require('express');
const app = express();
const path = require('path');
const open = require('opn');
const port = 3030;

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
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  // Open the application in the browser
  open(`http://localhost:${port}/`);
});

process.on('SIGINT', () => {
  server.close();
  process.exit();
});
