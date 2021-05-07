const csrf = require('csurf');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserController.js');

// Firebase configuration
const firebase = require('firebase');
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

var firebaseConfig = {
    apiKey: "AIzaSyBOYNfxWFWkuk1JPCRxbpoeydtuP41XL9U",
    authDomain: "javattack-abe7d.firebaseapp.com",
    projectId: "javattack-abe7d",
    storageBucket: "javattack-abe7d.appspot.com",
    messagingSenderId: "663006084713",
    appId: "1:663006084713:web:43bbe0cce21b3a3cdfacf8",
    measurementId: "G-JB3Q6WWXL5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://javattack-abe7d-default-rtdb.firebaseio.com"
});

const csrfMiddleware = csrf({ cookie: true });

// Express setup
const app = express();
const index = require('./routes/index.js');
const home = require('./routes/home.js')
const profile = require('./routes/profile.js')
const game = require('./routes/game.js')
const forum = require('./routes/forum.js')

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


// Firebase setup
app.use(bodyparser.json());
app.use(cookieparser());
app.use(csrfMiddleware);

app.all('*', (req, res, next) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    next();
});

// Setup paths to routes
app.use('/', index);
app.use('/login', index);
app.use('/home', home);
app.use('/profile', profile);
app.use('/play', game);
app.use('/forum', forum)

app.listen(3000);