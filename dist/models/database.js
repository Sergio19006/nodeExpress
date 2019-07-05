var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mongoose = require('mongoose');
const movie = require('./models');
class Database {
    constructor() {
    }
    findAllmovies() {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield movie.find();
            return movies;
        });
    }
    findmovie(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield movie.findOne({ title: title });
        });
    }
    like(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield movie.findOneAndUpdate({ title: title }, { $set: { like: true } });
        });
    }
    dislike(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield movie.findOneAndUpdate({ title: title }, { $set: { like: false } });
        });
    }
    addmovie(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = new movie({
                title: movie.title,
                year: movie.year,
                cast: movie.cast,
                genres: movie.genres,
                like: movie.like
            });
            data.save();
            return data;
        });
    }
    updatemovie(title, newTitle) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield movie.findOneAndUpdate({ title: title }, { $set: { title: newTitle } });
        });
    }
    removemovie(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield movie.deleteOne({ title: title });
        });
    }
}
module.exports = Database;
