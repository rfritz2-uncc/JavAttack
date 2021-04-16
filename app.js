const express = require('express');
const app = express();
const index = require('./routes/index.js');
const home = require('./routes/home.js')

app.set('view engine', 'ejs'); 
app.use('/assets', express.static('assets'));

app.use('/', index);
app.use("/home", home)

app.listen(3000);