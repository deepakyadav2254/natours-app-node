const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).send({
    status: 'success',
    data: tours,
  });
});

console.log(tours);
app.listen(port, () => {
  console.log('application running on 3000');
});
