const admin = require('firebase-admin');

const login = (req, res) => {
    // Creates session cookie that lives for one day
    const idToken = req.body.idToken.toString();
    var uid;
    admin
      .auth()
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        uid = decodedToken.uid;
      })
      .catch((error) => {
        res.status(404).send('Something went wrong.');
      });
    const expiresIn = 60 * 60 * 24 * 1 * 1000;
    admin
        .auth()
        .createSessionCookie(idToken, { expiresIn })
        .then(
            (sessionCookie) => {
                const options = { maxAge: expiresIn, httpOnly: true };
                res.cookie('session', sessionCookie, options);
                res.cookie('uid', uid)
                res.end(JSON.stringify({ status: 'success' }));
            },
            (error) => {
                res.status(401).send('UNAUTHORIZED REQUEST');
            }
        );
}

const profile = (req, res) => {
    const sessionCookie = req.cookies.session || "";
    const uid = req.cookies.uid;
    admin
        .auth()
        .verifySessionCookie(sessionCookie, true)
        .then(() => {
            // Gets user id and gets user info from db
            var db = admin.database();
            var ref = db.ref('users/'+uid);
            var userInfo;
            ref.on("value", function (snapshot) {
                // console.log(snapshot.val());
                userInfo = snapshot.val();
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
            res.render('profile', { birthday: userInfo.birthday, email: userInfo.email, levels: userInfo.levels, name: userInfo.name, points: userInfo.points, rank: userInfo.rank, role: userInfo.role  });
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