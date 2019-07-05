const mongoose = require('mongoose');
const Movie = require('./models');

class Database {
  constructor() {
    console.log("hola");
  }

  async findAllMovies() {
    const Movies = await Movie.find();
    return Movies;

  }

  async findMovie(title) {
    console.log(title);
    return await Movie.findOne({ title: title });
  }

  async like(title) {
    return await Movie.findOneAndUpdate({title:title}, {$set:{like:true}});
  }

  async  dislike() {
    return await Movie.findOneAndUpdate({title:title}, {$set:{like:false}});
  }

  async addMovie(movie) {
    let data = new Movie({
      title: movie.title,
      year: movie.year,
      cast: movie.cast,
      genres: movie.genres,
      like: movie.like
    });

    data.save();
    return data;
  }

  async updateMovie(title,newTitle) {
    return await Movie.findOneAndUpdate({title: title}, {$set: {title: newTitle}});
  }

  async  removeMovie(title) {
    return await Movie.deleteOne({title:title});
  }

}

module.exports = Database;


