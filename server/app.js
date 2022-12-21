require('@babel/register');
require('dotenv').config();

const cors = require('cors');

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const dbConnectionCheck = require('./src/lib/dbConnectionCheck');

const homeRouter = require('./src/routers/homeRouter');
const allRestRouter = require('./src/routers/restRouter');

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  optionsSuccessStatus: 200,
  credentials: true, // принимать куки от сторонних источников
};

app.use(cors(corsOptions));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnectionCheck();

app.use('/', homeRouter);
app.use('/', allRestRouter);

const PORT = process.env.PORT || 9999;
// const { PORT, SESSION_SECRET } = process.env;

app.listen(PORT, () => {
  console.log(`the server is working hard on ${PORT} port!`);
});
