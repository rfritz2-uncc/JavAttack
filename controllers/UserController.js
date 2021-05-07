const admin = require('firebase-admin');

const login = (req, res) => {
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
    res.render('profile');
}

const register = (req, res) => {
    res.render('registration');
}

const play = (req, res) => {
    res.render('level_page');
}

module.exports = {
    login,
    profile,
    register, 
    play
}