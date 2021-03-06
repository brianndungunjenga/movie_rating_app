/* jshint esversion: 6 */
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

module.exports.createUser = (newUser, callback) => {
  bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(newUser.password, salt, (error, hash) => {
      // store the hashed password
      const newUserResource = newUser;
      newUserResource.password = hash;
      newUserResource.save(callback);
    });
  });
};
