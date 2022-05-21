require('dotenv').config();
require('@babel/register');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const upload = require('express-fileupload');
const morgan = require('morgan');
// const { sequelize } = require('./db/models');

const sessionConfig = require('./sessionConfig');
const corsConfig = require('./corsConfig');

const config = (app) => {
  // cors
  app.use(cors(corsConfig));

  // set
  app.set('views', path.join(process.env.PWD, 'views'));

  // use
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(process.env.PWD, 'public')));
  app.use(morgan('dev'));
  app.use(cors());
  app.use(upload({ useTempFiles: true }));

  // sessions
  app.use(cookieParser());
  app.use(session(sessionConfig));
};

module.exports = config;
