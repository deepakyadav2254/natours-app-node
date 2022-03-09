const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const tourRouter = require('./routes/tourRouter');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
