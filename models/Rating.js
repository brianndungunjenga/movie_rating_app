/* jshint esversion: 6 */
const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
const RatingSchema = new Schema({
  movie_id: String,
  user_id: String,
  rate: Number,
})

const Rating = mongoose.model('Rating', RatingSchema);
module.exports = Rating;
