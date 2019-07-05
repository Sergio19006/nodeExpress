const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const MovieSchema = new Schema({
  title:  String,
  year: String,
  cast:   String,
  genres: Array,
  like: Boolean
});

const Movie = Mongoose.model("Movie", MovieSchema);

Mongoose.connect("mongodb://localhost:27017/movie");
Mongoose.set("useFindAndModify", false);

module.exports = Movie;