var express = require("express");
const app = express();
var router = express.Router();
const fs = require("fs");
const _ = require('lodash');
app.use(express.json());

function loadMovies() {
  let content;
  content = fs.readFileSync("./mov.json", "utf-8");
  content = JSON.parse(content);
  return content;
}

function saveMovies(movies){
  fs.writeFile('./mov.json', JSON.stringify(movies), (err) => {  
    if (err) throw err;
    console.log('movies saved!');
  });
} 

let movies = loadMovies();

router.get('/',(req,res) => {
  res.status(200).json(movies);
});

router.post('/like',(req,res) => {
  let title = req.body.title;
  movies.map(m =>{
    if(title == m.title)
      m.like = true;
  });
  saveMovies(movies);
  movies = loadMovies();
  res.status(200).json(movies);
});

router.post('/dislike',(req,res) => {
  let title = req.body.title;
  movies.map(m => { 
    if(title == m.title)
      m.like = false;
  });
  saveMovies(movies);
  movies = loadMovies();
  res.status(200).send(movies);
})

router.post('/addMovie',(req,res) => {
  let movie = req.body;
  movies.push(movie);
  saveMovies(movies);
  movies = loadMovies();
  res.status(200).send(movies);
})

router.put('/updateMovie',(req,res) => {
  let newtitle = req.body.newtitle;
  let title = req.body.title;
  movies.map(m => { 
    if(title == m.title)
      m.title = newtitle;
  });
  saveMovies(movies);
  movies = loadMovies();
  res.status(200).send(movies);

})


router.delete('/removeMovie',(req,res) => {
  let movie = req.body;
  let newMovies = _.remove(movies,function(m){
    return m.title != movie.title;
  })
  saveMovies(newMovies);
  movies = loadMovies();
  res.status(200).send(movie);
})

module.exports = router;