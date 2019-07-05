var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Express = require("express");
const router = Express.Router();
const Db = require('../models/database');
let database = new Db();
console.log(database);
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const movies = yield database.findAllMovies;
    console.log(movies);
    res.status(200).json(movies);
}));
router.get('/onlyOne', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const movies = yield database.findMovie(req.body.title);
    res.status(200).json(movies);
}));
router.post('/like', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let movie = yield database.like(req.body.title);
    res.status(200).json(movie);
}));
router.post('/dislike', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let movie = yield database.like(req.body.title);
    res.status(200).json(movie);
}));
router.post('/addMovie', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const movies = yield database.addMovie(req.body);
    res.status(200).send(movies);
}));
router.put('/updateMovie', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const movies = yield database.updateMovie(req.body.title, req.body.newTitle);
    res.status(200).send(movies);
}));
router.delete('/removeMovie', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let title = req.body.title;
    const movie = yield database.removeMovie(title);
    res.status(200).send(movie);
}));
module.exports = router;
