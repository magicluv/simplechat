/**
 * modules dependencies for server
 */
const express = require('express');
const bodyParser = require('body-parser');

// server config
const serverConfig = require('./config.js');

// initialize express
const app = express();

// get data from html froms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// apply route
require('./router.js')(app);

// up server
app.listen(serverConfig.PORT, (error) => {
    if(error) throw error;
    console.log(`App listening on port ${serverConfig.PORT}`);
});
