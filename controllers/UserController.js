const login = (req, res) => {
    res.render('home');
}

const register = (req, res) => {
    res.render('registration');
}

module.exports = {
    login,
    register
}