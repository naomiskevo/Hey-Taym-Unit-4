const User = require('../models/user');

module.exports = {
    userById,
    getOne,
    update
}

function getOne(req, res) {
    req.profile.hased_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile);
}

function update(req, res) {
    User.findOneAndUpdate(
        { _id: req.profile._id },
        { $set: req.body },
        { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    err: 'You are not authorized to preform this action'
                });
            }
            user.hased_password = undefined
            user.salt = undefined
            res.json(user);
        }
    );
    
};

function userById(req, res, next, id) {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                err: 'User not found'
            });
        };
        req.profile = user
        next();
    });
};