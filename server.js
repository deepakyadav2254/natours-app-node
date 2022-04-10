const dotenv = require('dotenv'); // this is needed to pass all the variables defined in config.env to node.
dotenv.config({ path: './config.env' }); // tell the path of configuration file.
const app = require('./app');
const port = process.env.PORT || 3000;

/* console.log(process.env); process.env we can see all the node global variables. */

app.listen(port, () => {
  console.log('application running on 3000');
});
