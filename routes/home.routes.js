require('dotenv').config();
const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('../views/Home');
const { Card } = require('../db/models/index');

router.route('/')
  .get(async (req, res) => {
    // const { uid } = req.session;
    console.log('HOME HANDLE USR ', req.session.uid);
    // const user = await User.findByPk(req.session.uid);
    const home = React.createElement(Home, {
      title: 'Скелетик',
      user: req.session.uid,
    });
    const htmlHome = ReactDOMServer.renderToStaticMarkup(home);
    res.write('<!DOCTYPE html>');
    res.end(htmlHome);
  })
  // .delete('/:id', async (req, res) => {
  //   const { id } = req.params;
  //   await Card.destroy({ where: { id } });
  //   res.end();
  // });

module.exports = router;
