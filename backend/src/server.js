const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const { host, user, pass } = config.get('database');
mongoose
  .connect(`mongodb+srv://${host}`, {
    user,
    pass,
  })
  .then((conn) => {
    console.log('Connection success!');
    // require('./seed/seeder'); // One time seed - uncomment to seed database   
  })
  .catch((err) => {
    // throw new Error(err.message);
    console.log(err)
  });

// Cross origin resource sharing: CORS
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

// Products
app.use('/product', require('./controllers/product/router'));
app.use('/login', require('./controllers/login/router'));

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
