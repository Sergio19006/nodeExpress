const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const users = [
  {
    id:1, 
    name:'juan'
  },
  {
    id:2,
    name:'sergio'
  }
]


const app = express();
app.get('/', (req, res) => {
  console.log("Aparcao: ",req.headers);
  res.json([{message: 'Hello world'}]);
});

app.get('/users', (req, res) => {
  console.log("Aparcao: ",req.headers);
  res.json([{users: users}]);
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => userId == u.id);
  res.json(user);
});

app.get('/login', (req, res) => {
  res.send('Hello you are in the login');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
