require('@babel/register');
const path = require('path');
require('dotenv').config();

const cors = require('cors');

const express = require('express');
const morgan = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const dbConnectionCheck = require('./src/lib/dbConnectionCheck');

const homeRouter = require('./src/routers/homeRouter');
const allRestRouter = require('./src/routers/restRouter');
const oneRestRouter = require('./src/routers/restRouter');

const regRouter = require('./src/routers/regRouter');
const loginRouter = require('./src/routers/loginRouter');

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  optionsSuccessStatus: 200,
  credentials: true, // принимать куки от сторонних источников
};

app.use(cors(corsOptions));

// const PORT = process.env.PORT || 9999;
const { PORT, SESSION_SECRET } = process.env;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Создание конфига для куки
const sessionConfig = {
  name: 'yelpCookie', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET, // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};

// подключение мидлвара для куки
app.use(session(sessionConfig));

dbConnectionCheck();

app.use('/', homeRouter);
app.use('/', allRestRouter);
app.use('/', oneRestRouter);

app.use('/', regRouter);
app.use('/', loginRouter);

app.get('/isauth', (req, res) => {
  // console.log('isAuth==== в App.js на бэке => req.session', req.session);
  if (req.session?.userEmail) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

app.get('/logout', async (req, res) => {
  try {
    if (req.session?.userName) {
      req.session.destroy(() => {
        res.clearCookie('yelpCookie');
        res.sendStatus(200);
        // res.redirect('/');
      });
    }
  } catch (error) {
    console.log('Error destroy session', error);
  }
});

app.listen(PORT, () => {
  console.log(`the server is working hard on ${PORT} port!`);
});
