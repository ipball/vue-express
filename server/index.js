const express = require('express');
const bodyPrser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyPrser.json());
app.use(cors());

// root page
app.get('/', (req, res) => {
  res.send('Hello world!');
});

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);
// handle production
if (process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(__dirname + '/public/'));

  // spa
  app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
