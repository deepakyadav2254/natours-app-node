const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const tourRouter = require('./routes/tourRouter');
const morgan = require('morgan');
const port = 5000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.listen(port, () => {
  console.log('application running on 3000');
});
