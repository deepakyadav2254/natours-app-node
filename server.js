const mongoose = require('mongoose');
const dotenv = require('dotenv'); // this is needed to pass all the variables defined in config.env to node.
dotenv.config({ path: './config.env' }); // tell the path of configuration file.
const app = require('./app');
const port = process.env.PORT || 3000;
const DB = process.env.DATABASE;
mongoose.connect(DB, {}).then((data) => {
  console.log('DB connected successfully. ');
});
/* console.log(process.env); process.env we can see all the node global variables. */

app.listen(port, () => {
  console.log('application running on 3000');
});
