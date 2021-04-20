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

var firebase = require('firebase/app');
require('firebase/auth');
var firebaseConfig = {
    apiKey: "AIzaSyBOYNfxWFWkuk1JPCRxbpoeydtuP41XL9U",
    authDomain: "javattack-abe7d.firebaseapp.com",
     projectId: "javattack-abe7d",
    storageBucket: "javattack-abe7d.appspot.com",
    messagingSenderId: "663006084713",
    appId: "1:663006084713:web:43bbe0cce21b3a3cdfacf8",
    measurementId: "G-JB3Q6WWXL5"
};
firebase.initializeApp(firebaseConfig);