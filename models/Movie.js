/* jshint esversion: 6 */
const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  name: String,
  description: String,
  release_year: Number,
  genre: String,
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
