// Create web server
// Use Express.js to create a web server
const express = require('express');
const app = express();
app.use(express.json());

// Create a variable to store comments
const comments = [];

// Create a GET endpoint that returns all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a POST endpoint that creates a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Create a DELETE endpoint that deletes a comment
app.delete('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = comments.findIndex(comment => comment.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});