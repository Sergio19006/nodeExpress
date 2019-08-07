import { Database } from '../models/database';
import { Router } from 'express';
export const router: Router = Router();


const database = new Database();

router.get('/',async (req,res) => {
  const movies: object = await database.findAllMovies();
  res.status(200).json(movies);
});

router.get('/onlyOne', async (req,res) => {
  console.log(req.body);
  const movies: object = await database.findMovie(req.body.title);
  res.status(200).json(movies);
});

router.post('/like',async (req,res) => {
  let movie: object = await database.like(req.body.title);
  res.status(200).json(movie);
});

router.post('/dislike',async (req,res) => {
  let movie: object = await database.like(req.body.title); 
  res.status(200).json(movie);
})

router.post('/addMovie', async (req,res) => {
  const movies: object = await database.addMovie(req.body);
  res.status(200).send(movies);
})

router.put('/updateMovie', async (req,res) => {
  const movies: object = await database.updateMovie(req.body.title,req.body.newTitle);
  res.status(200).send(movies);
})


router.delete('/removeMovie', async (req,res) => {
  let title: string = req.body.title;
  const movie: object = await database.removeMovie(title);
  res.status(200).send(movie);
})