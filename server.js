
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'movieratingapplicationsecretkey';

const app = express();
const router = express.Router();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

// Connect to mongodb
mongoose.connect('mongodb://localhost/movie_rating_app', { useNewUrlParser: true }, () => {
  console.log('Connection has been made');
})
  .catch((err) => {
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

// Include controllers
const route = require('./controllers/movies');
const route1 = require('./controllers/users');

route1.container(app);
route.controller(app);

router.get('/', (req, res) => {
  res.json({ message: 'API Initialized!' });
});

const port = process.env.API_PORT || 8081;
app.use('/', router);
app.listen(port, () => {
  console.log(`api running on port ${port}`);
});
