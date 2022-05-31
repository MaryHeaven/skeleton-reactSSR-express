require('dotenv');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const Authorization = require('../views/Authorization');
const { User } = require('../db/models/index');
const isLogin = require('../middleware/isLogin');

router
  .route('/')
  .get(isLogin, (req, res) => {
    const auth = React.createElement(Authorization, {
      title: 'Вход',
      user: req.session.uid,
    });

    const htmlAuth = ReactDOMServer.renderToStaticMarkup(auth);
    res.write('<!DOCTYPE html>');
    res.end(htmlAuth);
  })
  .post(async (req, res) => {
    const { email, password } = req.body;

    // TODO try/catch
    const user = await User.findOne({ where: { email } });

    // TODO try/catch
    const isSame = await bcrypt.compare(password, user.password);

    if (user && isSame) {
      req.session.uid = user;
      console.log('AFTER LOGIN ', req.session.uid);
      res.redirect('/');
    } else {
      res.send({ message: 'Не, такого челика нет, либ неверное пароль' });
      // res.redirect('/login');
    }
  });

module.exports = router;
