const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    // Gets token from header
    const token = req.header('x-auth-token');

    // Check if no token
    if (!token) {
        return res.status(401).json({
            msg: 'No token, authorization denied'
        });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        // User is attached to the id in the payload
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({
            msg: 'Token is not valid'
        });
    }
}