const User = require('../models/User')
const verifyAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).send("Not authorized as an admin");
    }
};

module.exports =  verifyAdmin 