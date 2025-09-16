
const { v4: uuidv4 } = require('uuid');

function assignUuid(req, res, next) {
  if (!req.cookies || !req.cookies.user_uuid) {
    const newUuid = uuidv4();
    res.cookie('user_uuid', newUuid, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    });
    console.log(`Assigned new UUID: ${newUuid}`);
  } else {
    console.log(`Existing UUID: ${req.cookies.user_uuid}`);
  }
  next();
}

module.exports = assignUuid;
