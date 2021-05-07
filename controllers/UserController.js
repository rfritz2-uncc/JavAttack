const admin = require('firebase-admin');

const login = (req, res) => {
    var db = admin.database();
    var ref = db.ref();
    ref.on("value", function(snapshot) {
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    const idToken = req.body.idToken.toString();
    // session cookie lives for five days
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    admin
        .auth()
        .createSessionCookie(idToken, { expiresIn })
        .then(
            (sessionCookie) => {
                const options = { maxAge: expiresIn, httpOnly: true };
                res.cookie('session', sessionCookie, options);
                res.end(JSON.stringify({ status: 'success' }));
            },
            (error) => {
                console.log('UserController error');
                res.status(401).send('UNAUTHORIZED REQUEST');
            }
        );
}

const profile = (req, res) => {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render('profile');
      })
      .catch((error) => {
        res.redirect('/');
      });
}

const register = (req, res) => {
    res.render('registration');
}

const play = (req, res) => {
    const sessionCookie = req.cookies.session || "";
    admin
      .auth()
      .verifySessionCookie(sessionCookie, true)
      .then(() => {
        res.render('level_page');
      })
      .catch((error) => {
        res.redirect('/');
      });
}

module.exports = {
    login,
    profile,
    register, 
    play
}