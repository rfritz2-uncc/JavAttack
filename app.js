const csrf = require('csurf');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserController.js');

// Firebase Admin SDK configuration
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://javattack-abe7d-default-rtdb.firebaseio.com"
})

const csrfMiddleware = csrf({ cookie: true });

// Express setup
const app = express();
const index = require('./routes/index.js');
const home = require('./routes/home.js')
const profile = require('./routes/profile.js')
const game = require('./routes/game.js')
const forum = require('./routes/forum.js')
const urlencodedParser = bodyParser.urlencoded({ extended: false });

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