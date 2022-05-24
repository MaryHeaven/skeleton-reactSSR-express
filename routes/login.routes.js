require('dotenv');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const Authorization = require('../views/Authorization');
const { User } = require('../db/models/index');

router.route('/')
  .get((req, res) => {
    const auth = React.createElement(Authorization, {
      title: 'Вход',
    });

    const htmlAuth = ReactDOMServer.renderToStaticMarkup(auth);
    res.write('<!DOCTYPE html>');
    res.end(htmlAuth);
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.user = user;
      res.redirect('/');
    } else {
      res.send({ message: 'Не, такого челика нет, либ неверное пароль' });
      res.redirect('/login');
    }
  });

module.exports = router;
