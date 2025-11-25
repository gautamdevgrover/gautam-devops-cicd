const express = require('express');
const app = express();

app.use(express.json());

let todos = [
  { id: 1, title: "Learn Jenkins" },
  { id: 2, title: "Practice Docker" }
  { id: 3, title: "Ci/Cd" }
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = { id: todos.length + 1, title: req.body.title };
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(3000, () => {
  console.log("Todo API running on port 3000");
});
