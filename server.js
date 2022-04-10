const dotenv = require('dotenv'); // this is needed to pass all the variables defined in config.env to node.
const app = require('./app');
const port = 3000;

dotenv.config({ path: './config.env' }); // tell the path of configuration file.

/* console.log(process.env); process.env we can see all the node global variables. */
app.listen(port, () => {
  console.log('application running on 3000');
});
