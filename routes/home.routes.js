require('dotenv').config();
const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('../views/Home');
const { User } = require('../db/models/index');

router.route('/')
  .get(async (req, res) => {
    const user = await User.findByPk(req.session.uid);
    const home = React.createElement(Home, {
      title: 'Скелетик',
      // name: user.name,
    });
    const htmlHome = ReactDOMServer.renderToStaticMarkup(home);
    res.write('<!DOCTYPE html>');
    res.end(htmlHome);
  });

module.exports = router;
