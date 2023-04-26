import { adminkey } from '../../util/store/creds.js';

export const requireLogin = (req, res, next) => {
  if (req.session === undefined) {
    res.redirect('/login');
  } else
  if(req.session.user === undefined){
    res.redirect('/login');
  } else 
  if (req.session.user.userkey === adminkey) {
    next();
  }
  res.redirect('/login')
};
