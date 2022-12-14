require('@babel/register');
require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const dbConnectionCheck = require('./src/lib/dbConnectionCheck');

// const renderTemplate = require('./src/lib/renderTemplate');

const homeRouter = require('./src/routers/homeRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnectionCheck();

app.use('/', homeRouter);

const PORT = process.env.PORT || 3001;
// const { PORT, SESSION_SECRET } = process.env;

app.listen(PORT, () => {
  console.log(`the server is working hard on ${PORT} port!`);
});
