// Imports
const express = require('express');
// const csrf = require('csrf');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser')
const app = express();

const index = require('./routes/index.js');
const home = require('./routes/home.js')
const profile = require('./routes/profile.js')
const game = require('./routes/game.js')
const forum = require('./routes/forum.js')

// Firebase initialization
const firebase = require('firebase/app');
const fbAuth = require('firebase/auth');
const firebaseConfig = {
    apiKey: "AIzaSyBOYNfxWFWkuk1JPCRxbpoeydtuP41XL9U",
    authDomain: "javattack-abe7d.firebaseapp.com",
     projectId: "javattack-abe7d",
    storageBucket: "javattack-abe7d.appspot.com",
    messagingSenderId: "663006084713",
    appId: "1:663006084713:web:43bbe0cce21b3a3cdfacf8",
    measurementId: "G-JB3Q6WWXL5"
};
firebase.initializeApp(firebaseConfig);

// Express setup
app.set('view engine', 'ejs'); 
app.use('/assets', express.static('assets'));

// Setup paths to routes
app.use('/', index);
app.use('/login', index);
app.use('/home', home);
app.use('/profile', profile);
app.use('/play', game);
app.use('/forum', forum)

app.listen(3000);