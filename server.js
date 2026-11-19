const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const greeting = process.env.GREETING ||
  'Hello from your deployed app!';

app.get('/', (req, res) => {
  res.send('Practice 12 Application is Running!');
});

app.get('/api/message', (req, res) => {
  res.json({ message: greeting });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
