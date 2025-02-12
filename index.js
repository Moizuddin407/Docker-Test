const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Backend API!');
});

// Example API route
app.get('/api/data', (req, res) => {
  res.json({
    message: 'This is sample data from the API.',
    data: [1, 2, 3, 4, 5]
  });
});
app.get('/api/newdata', (req, res) => {
  res.json({
    message: 'This is sample data from the API.',
    data: [1, 2, 3, 4, 5]
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

