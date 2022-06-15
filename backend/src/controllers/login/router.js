const express = require('express');
const router = express.Router();

const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');

// post
router.post('/', async (req, res, next) => {
  /* 
  // seed the database, created by Jozsi's script
  const newUser = new User({
        email: 'test@test.hu',
        lastName: 'Elek',
        firstName: 'Test',
        password: 'test789',
    });

    try {
        await newUser.save();
    } catch(e) {
        res.statusCode = 401;
        return res.json({error: 'Database Error!'});
    }
    return res.json({message: 'user created'});
 */

  /* 
  // seed the database, created by Gabor's script
  const user = new User({
    firstName: 'Jill',
    lastName: 'Doe',
    email: 'jilldoe@gmail.com',
    password: '123',
  });
  user
    .save()
    .then((result) => {
      res.json({
        message: 'User created!',
        result,
      });
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
*/

  const { email, password, role } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.sendStatus(401);
  }

  user.comparePassword(password, function (err, isMatch) {
    if (err) {
      return res.sendStatus(401);
    }

    const accessToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '1h',
      }
    );

    res.json({
      success: true,
      accessToken,
      user: { ...user._doc, password: '' },
    });
  });
});

module.exports = router;

/*
fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"email": "test@test.hu", "password": "test789"}',
}).then(r => r.json())
    .then( d => console.log(d) );
*/

/* 
// get token
fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com',
  password: '123',
})
}).then(res=>res.json()).then(res=>console.log(res)) 
*/
