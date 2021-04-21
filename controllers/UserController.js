const login = (req, res) => {
    res.render('home');
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