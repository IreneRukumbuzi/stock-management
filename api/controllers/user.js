const passport = require('passport');
// const db = require('../config/database');

exports.landing = (req, res) => {
    res.send('Hello');
}

exports.login = (req, res) => {
    res.send('Login');
}

exports.logOut = (req, res) => {
    res.send('Logging out');
}

exports.google = passport.authenticate('google', {
    scope: ['profile']
});

exports.redirect = (req, res) => {
    res.send('Logged in successfully');
}


