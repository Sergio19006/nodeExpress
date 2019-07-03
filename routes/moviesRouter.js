var express = require("express");
const app = express();
var router = express.Router();
const fs = require("fs");
const bodyParse = require('body-parser');
const _ = require('lodash');
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

function loadMovies() {
  let content;
  content = fs.readFileSync("./mov.json", "utf-8");
  content = JSON.parse(content);
  return content;
}

function saveMovies(movies){
  fs.writeFile('mov.json', JSON.stringify(movies), (err) => {  
    if (err) throw err;
    console.log('movies saved!');
  });
} 
let movies = loadMovies();


router.get('/',(req,res) => {
  res.status(200).json(movies);
});

router.get('/like',(req,res) => {
  console.log("estoy en like");
  let title = req.body.title;
  movies.map(m =>{
    if(title == m.title)
      m.like = true;
  });

  saveMovies(movies);
  res.status(200).json(movies);
});

router.get('/dislike',(req,res) => {
  console.log("estoy en dislike");
  let title = req.body.title;
  let peli = movies.find(m => title == m.title)
  peli.like = false;
  res.status(200).send(peli);
})

router.get('/addMovie',(req,res) => {
  let movie = req.body;
  movies.push(movie);
  saveMovies(movies);
  res.status(200).send(movie);
})


router.get('/removeMovie',(req,res) => {
  let movie = req.body;
  let newMovies = _.remove(movies,function(m){
    return m.title != movie.title;
  })
  saveMovies(newMovies);
  res.status(200).send(movie);
})

module.exports = router;