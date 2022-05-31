require('dotenv').config();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const bcrypt = require('bcrypt');
const Registration = require('../views/Registration');
const { User } = require('../db/models/index');
const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    const regis = React.createElement(Registration, {
      title: 'Регистрация',
      user: req.session.uid,
    });

    const regisHtml = ReactDOMServer.renderToStaticMarkup(regis);
    res.write('<!DOCTYPE html>');
    res.end(regisHtml);
  })
  .post(async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.send('Такой пользователь уже зарегистрирован');
      res.redirect('/login');
    } else {
      const newUser = await User.create({
        name, email, password: await bcrypt.hash(password, 10),
      });
      req.session.uid = newUser;
      res.redirect('/');
    }
  });

module.exports = router;
