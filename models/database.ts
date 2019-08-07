const mongoose = require('mongoose');
const movie = require('./models');

export class Database {
  constructor() {
  }

  async findAllMovies() {
    const movies = await movie.find();
    return movies;

  }

  async findMovie(title: string) {
    return await movie.findOne({ title: title });
  }

  async like(title: string) {
    return await movie.findOneAndUpdate({title:title}, {$set:{like:true}});
  }

  async  dislike(title: string) {
    return await movie.findOneAndUpdate({title:title}, {$set:{like:false}});
  }

  
  async addMovie(mov: any) {
    let data = new movie({
      title: mov.title,
      year: mov.year,
      cast: mov.cast,
      genres: mov.genres,
      like: mov.like
    });

    data.save();
    return data;
  }

  async updateMovie(title: string, newTitle: string) {
    return await movie.findOneAndUpdate({title: title}, {$set: {title: newTitle}});
  }

  async removeMovie(title: string) {
    return await movie.deleteOne({title:title});
  }

}



