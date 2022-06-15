const express = require('express');
const config = require('config');
// const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const seed = require('./seed/seeder');

const app = express();

// Authentication
const authenticateJwt = require('./controllers/auth/authenticate');

const { host, user, pass } = config.get('database');
mongoose
  .connect(`mongodb+srv://${host}`, {
    user,
    pass,
    dbName: 'VR',
  })
  .then((conn) => {
    console.log('Connection success!');
    // seed(); // One time seed - uncomment to seed database
  })
  .catch((err) => {
    // throw new Error(err.message);
    console.log(err);
  });

// Cross origin resource sharing: CORS
app.use(cors());
app.use(express.static('public'));
// app.use(bodyParser.json());
app.use(express.json());

app.use('/login', require('./controllers/login/router'));
app.use('/product', authenticateJwt, require('./controllers/product/router'));
app.use('/customer', require('./controllers/customer/router'));

app.use('/', (req, res) => {
  console.log(req.url);
  res.send('api server');
});

app.use((err, req, res, next) => {
  res.status = 500;
  res.json({
    hasError: true,
    message: 'Server Error',
  });
});

module.exports = app;
