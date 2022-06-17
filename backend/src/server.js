const express = require('express');
const config = require('config');
// const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const seed = require('./seed/seeder');

const swaggerDocument = YAML.load('./docs/swagger.yaml');
const options = {
  swaggerOptions: {
    persistAuthorization: true
  }
};

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.use('/', (req, res) => {
  console.log(req.url);
  res.send('api server');
});

app.use((err, req, res, next) => {
  // logger.error(err.message);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  
  res.json({
    status: err.status || 500,
    message: err.message,
    error: err.error
  });
  
  // res.status = 500;
  // res.json({
  //   hasError: true,
  //   message: 'Server Error',
  // });
});

module.exports = app;
