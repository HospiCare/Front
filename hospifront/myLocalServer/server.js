const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST endpoint
app.post('/api/submit', (req, res) => {
  console.log('Received data:', req.body);
  res.status(200).json({ message: 'Form submitted successfully!', data: req.body });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
