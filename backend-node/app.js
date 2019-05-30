const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('./router/users');

//helps in parsing incoming request data
app.use(bodyParser.json());

app.use((req, res, next) => {
  //CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  //allow requests for these headers if present
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //allow methods
  res.setHeader("Access-Control-Allow-Methods", "POST");

  next();
})

app.use('/api/user', userRoutes);
module.exports = app;
