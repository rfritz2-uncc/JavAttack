const express = require('express');
const app = express();
const index = require('./routes/index.js');
const home = require('./routes/home.js')
const profile = require('./routes/profile.js')

app.set('view engine', 'ejs'); 
app.use('/assets', express.static('assets'));

app.use('/', index);
app.use("/home", home)
app.use('/profile', profile)

app.listen(3000);