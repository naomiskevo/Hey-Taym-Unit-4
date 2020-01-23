const User = require('../models/user');
const { errorHandler } = require("../helpers/dbErrorHandler");
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');



function logout(req, res) {
    res.clearCookie('t')
    res.json({ message: 'Logged Out!' })
}

function signup(req, res) {
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        user.salt = undefined
        user.hashed_password = undefined
        res.json({
            user
        });
    });
};



function login(req, res) {
    const { email, password } = req.body
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist. Please sign up'
            });
        }
        //creat auth method in user model
        if (!user.authenticate(password)) {
            return res.status(401).json({
                err: 'Email and password do not match'
            })
        }
        //generate a token with user id
        const token = jwt.sign({ _id: user._id }, process.env.SECRET)
        res.cookie('t', token, { expire: new Date() + 9999 })
        const { _id, name, email, role } = user
        return res.json({ token, user: { _id, email, name, role } })
    });
};

const requireLogin = expressJwt({
    secret: process.env.SECRET,
    userProperty: 'auth'
});


module.exports = {
    signup,
    login,
    logout,
    requireLogin
}