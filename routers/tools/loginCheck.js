export function checkIfLoggedOut(req, res, next) {
  if (req.session.userkey === undefined || req.session.userkey === null) {
    next();
  } else {
    res.redirect('/');
  }
}
