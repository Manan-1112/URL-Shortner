function authCheck(req, res, next) {
  const userUuid = req.cookies.auth_uuid;

  if (!userUuid) {
    return res.status(401).render("login", { error: "Please login to access this page" });
  }

  // Optionally: verify UUID exists in DB
  // const user = await User.findOne({ uuid: userUuid });
  // if (!user) return res.status(401).render("login", { error: "Invalid session" });

  next();
}

module.exports = authCheck;
