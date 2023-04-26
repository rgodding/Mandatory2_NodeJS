export const requireVisit = (req, res, next) => {
  if (req.session === undefined) {
    res.redirect('/');
  } else if(req.session.user === undefined){
    res.redirect('/');
  } else {
    next();
  }
};
