const User = require('../models/user');

module.exports = {
    signup,
}

function signup (req, res) {
    console.log('req.body', req.body)
    const user = new User(req.body)
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err
            });
        }
        res.json({
            user
        });
    });
};

