require('dotenv');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const Lk = require('../views/Lk');
const { User } = require('../db/models/index');

router.route('/')
  .get((req, res) => {
    const lk = React.createElement(Lk, {
      title: 'Личный кабинет',
    });

    const htmlLk = ReactDOMServer.renderToStaticMarkup(lk);
    res.write('<!DOCTYPE html>');
    res.end(htmlLk);
  });

module.exports = router;
