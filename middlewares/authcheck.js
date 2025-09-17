const { getuser } = require("../services/checkAuth");
function authCheck(req, res, next) {
  const token = req.cookies.auth_uuid;
  const user = getuser(token);

  if (!user) {
    return res.status(401).render("login", { error: "Please login to access this page" });
  }
  req.user = user;

  next();
}

module.exports = authCheck;
