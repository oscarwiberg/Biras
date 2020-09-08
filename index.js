const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/test', (req, res) => {
  res.json([
    { id: 1, text: 'Hello World11' },
    { id: 2, text: 'Hello World2' },
    { id: 3, text: 'Hello World3' },
  ]);
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
