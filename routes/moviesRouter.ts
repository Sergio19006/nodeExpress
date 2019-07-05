const Express = require("express");
const router = Express.Router();
const Db = require('../models/database');

let database = new Db();

console.log(database);

router.get('/',async (req,res) => {
  const movies = await database.findAllMovies();
  console.log(movies);
  res.status(200).json(movies);
});

router.get('/onlyOne', async (req,res) => {
  const movies = await database.findMovie(req.body.title);
  res.status(200).json(movies);
});

router.post('/like',async (req,res) => {
  let movie = await database.like(req.body.title);
  res.status(200).json(movie);
});

router.post('/dislike',async (req,res) => {
  let movie = await database.like(req.body.title); 
  res.status(200).json(movie);
})

router.post('/addMovie', async (req,res) => {
  const movies = await database.addMovie(req.body);
  res.status(200).send(movies);
})

router.put('/updateMovie', async (req,res) => {
  const movies = await database.updateMovie(req.body.title,req.body.newTitle);
  res.status(200).send(movies);
})


router.delete('/removeMovie', async (req,res) => {
  let title = req.body.title;
  const movie = await database.removeMovie(title);
  res.status(200).send(movie);
})

module.exports = router;