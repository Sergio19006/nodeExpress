var express = require("express");
const app = express();
var router = express.Router();
const fs = require("fs");
const _ = require('lodash');
app.use(express.json());
const Db = require('../models/database');

let Database = new Db();

router.get('/',async (req,res) => {
  const movies = await Database.findAllMovies();
  res.status(200).json(movies);
});

router.get('/onlyOne', async (req,res) => {
  const movies = await Database.findMovie(req.body.title);
  res.status(200).json(movies);
});

router.post('/like',async (req,res) => {
  let movie = await Database.like(req.body.title);
  res.status(200).json(movie);
});

router.post('/dislike',(req,res) => {
  let movie = await Database.like(req.body.title); 
  res.status(200).json(movie);
})

router.post('/addMovie', async (req,res) => {
  const movies = await Database.addMovie(req.body);
  res.status(200).send(movies);
})

router.put('/updateMovie', async (req,res) => {
  const movies = await Database.updateMovie(req.body.title,re.body.newTitle);
  res.status(200).send(movies);
})


router.delete('/removeMovie',(req,res) => {
  let title = req.body.title;
  const movie = Database.removeMovie(title);
  res.status(200).send(movie);
})

module.exports = router;