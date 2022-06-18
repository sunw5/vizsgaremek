const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.ACCESS_TOKEN_SECRET;

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    // Bearer sdfdsfsdfdsfds14651651sdf65sd1f6sd1f.sdf654dsf6
    const token = authHeader.split(' ')[1];
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        console.log('err', err);
        return res.sendStatus(401);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
