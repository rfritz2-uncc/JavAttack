const login = (req, res) => {
    res.render('home');
}
const profile = (req, res) => {
    res.render('profile');
}

const register = (req, res) => {
    res.render('registration');
}

module.exports = {
    login,
    profile
    register
}