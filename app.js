require('@babel/register');
const express = require('express');
const config = require('./config/index');
const { sequelize } = require('./db/models');

// require routes
const homeRouter = require('./routes/home.routes');
const registrRouter = require('./routes/registration.routes');
const loginRouter = require('./routes/login.routes');
const lkRouter = require('./routes/lk.routes');
const formCardRouter = require('./routes/formCard.routes');
const logoutRouter = require('./routes/logout.routes');

const app = express();
const PORT = process.env.PORT ?? 3000;
config(app);

// routes use
app.use('/', homeRouter);
app.use('/registration', registrRouter);
app.use('/login', loginRouter);
app.use('/lk', lkRouter);
app.use('/lk', formCardRouter);
app.use('/logout', logoutRouter);

app.listen(PORT, async () => {
  console.log(`S E R V E R S T A R T E D A T ${PORT} P O R T`);
  try {
    await sequelize.authenticate();
    console.log('БД-сервер подключен успешно');
  } catch (error) {
    console.log('БД-сервер не подключен');
    console.log(error.message);
  }
});
