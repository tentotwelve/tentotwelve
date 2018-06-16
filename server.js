import express from 'express';

const app = express();
const fs = require('fs');
const rawData = fs.readFileSync('wine-selection.json');
const wines = JSON.parse(rawData);

app.get('/', (req, res) =>
  res.send("Welcome to Ten to Twelve!")
)

app.get('/wines', (req, res) =>
  res.send(wines)
)

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
})
