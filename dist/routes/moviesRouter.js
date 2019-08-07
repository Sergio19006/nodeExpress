"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../models/database");
const express_1 = require("express");
exports.router = express_1.Router();
const database = new database_1.Database();
exports.router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const movies = yield database.findAllMovies();
    res.status(200).json(movies);
}));
exports.router.get('/onlyOne', (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log(req.body);
    const movies = yield database.findMovie(req.body.title);
    res.status(200).json(movies);
}));
exports.router.post('/like', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let movie = yield database.like(req.body.title);
    res.status(200).json(movie);
}));
exports.router.post('/dislike', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let movie = yield database.like(req.body.title);
    res.status(200).json(movie);
}));
exports.router.post('/addMovie', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const movies = yield database.addMovie(req.body);
    res.status(200).send(movies);
}));
exports.router.put('/updateMovie', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const movies = yield database.updateMovie(req.body.title, req.body.newTitle);
    res.status(200).send(movies);
}));
exports.router.delete('/removeMovie', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let title = req.body.title;
    const movie = yield database.removeMovie(title);
    res.status(200).send(movie);
}));
//# sourceMappingURL=moviesRouter.js.map