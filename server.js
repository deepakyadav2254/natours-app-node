const app = require('./app');
const port = 3000;

/* console.log(process.env); process.env we can see all the node global variables. */
app.listen(port, () => {
  console.log('application running on 3000');
});
