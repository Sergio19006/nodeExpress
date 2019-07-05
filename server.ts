const express = require('express');
const app = express();
app.use(express.json());
const moviesRouter = require('./routes/moviesRouter');

app.use('/movies',moviesRouter);

const PORT = 8081;
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


app.get('/', (req, res) => {
  res.json([{message: 'Hello world'}]);
});

app.get('/users', (req, res) => {
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

function bodyIsEmpty(body){
  if(body == null || body == {} || body.name == null || body.name == "")
    return true;

  else{
    return false;
  }  
}

app.post('/newUser', (req, res) => {
  console.log(req.body);
  if(bodyIsEmpty(req.body)){
    res.status(400).send("Eso no se puede maquina");
    console.log("esta vicio");
  }
  const newUSer = {
    id: Math.floor(Math.random() * 6) + 1,
    name: req.body.name
    
  }
  users.push(newUSer);
  res.json(users);
});




app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
