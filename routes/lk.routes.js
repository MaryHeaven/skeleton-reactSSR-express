require('dotenv');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const Lk = require('../views/Lk');
const { User, Card } = require('../db/models/index');
const isLogin = require('../middleware/isLogin');

router.route('/')
  .get(async (req, res) => {
    const card = await Card.findAll({ raw: true });
    const user = req.session.uid;
    const lk = React.createElement(Lk, {
      title: 'Личный кабинет',
      user,
      card,
    });

    const htmlLk = ReactDOMServer.renderToStaticMarkup(lk);
    res.write('<!DOCTYPE html>');
    res.end(htmlLk);
  });

module.exports = router;
