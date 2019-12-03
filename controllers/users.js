/* eslint-disable prefer-destructuring */
const User = require('../models/User.js');

module.exports.container = (app) => {
  // register a User
  app.post('/users/register', (request, response) => {
    // eslint-disable-next-line prefer-destructuring
    const name = request.body.name;
    const email = request.body.email;
    const password = request.body.password;
    const newUser = new User({
      name,
      email,
      password,
    });
    User.createUser(newUser, (error, user) => {
      if (error) {
        response.status(422).json({
          message: 'Something went wrong/. Please try again after some time!',
        });
      }
      response.send({ user });
    });
  });
};
