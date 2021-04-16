const login = (req, res) => {
    res.render('home');
}
const profile = (req, res) => {
    res.render('profile');
}

module.exports = {
    login,
    profile
}