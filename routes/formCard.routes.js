require('dotenv');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const FormCard = require('../views/FormCard');
const { Card, User } = require('../db/models/index');

router.route('/')
  .get((req, res) => {
    const formCard = React.createElement(FormCard, {
      title: 'Личный кабинет',
    });

    const htmlForm = ReactDOMServer.renderToStaticMarkup(formCard);
    res.write('<!DOCTYPE html>');
    res.end(htmlForm);
  })
  .post(async (req, res) => {
    const { title, description } = req.body;
    const card = await Card.findOne({ where: { title } });
    if (card) {
      res.send('Такая карточка уже создана');
      res.redirect('/lk');
    } else {
      const newCard = await Card.create({
        title, description, user_id: req.session.user.id,
      });
      res.redirect('/lk');
    }
  });

module.exports = router;
