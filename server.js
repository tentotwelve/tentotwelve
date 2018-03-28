import express from 'express';

const app = express();

app.get('/', (req, res) =>
  res.send("Welcome to Ten to Twelve!")
)

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
})
