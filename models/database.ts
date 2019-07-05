const mongoose = require('mongoose');
const movie = require('./models');

class Database {
  constructor() {
  }

  async findAllmovies() {
    const movies = await movie.find();
    return movies;

  }

  async findmovie(title) {
    return await movie.findOne({ title: title });
  }

  async like(title) {
    return await movie.findOneAndUpdate({title:title}, {$set:{like:true}});
  }

  async  dislike(title) {
    return await movie.findOneAndUpdate({title:title}, {$set:{like:false}});
  }

  async addmovie(movie) {
    let data = new movie({
      title: movie.title,
      year: movie.year,
      cast: movie.cast,
      genres: movie.genres,
      like: movie.like
    });

    data.save();
    return data;
  }

  async updatemovie(title, newTitle) {
    return await movie.findOneAndUpdate({title: title}, {$set: {title: newTitle}});
  }

  async removemovie(title) {
    return await movie.deleteOne({title:title});
  }

}

module.exports = Database;


