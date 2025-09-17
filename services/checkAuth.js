const jwt = require('jsonwebtoken');

const secret = process.env.JWT;
function setUser(user) {
    const token = jwt.sign(user, secret);
    return token;
    
}
function getuser(token) {
    try {
        const user = jwt.verify(token, secret);
        return user;
    } catch (err) {
        return null;
    }
}
module.exports = { setUser, getuser };