import { adminkey } from '../../util/store/creds.js';

export const requireLogin = (req, res, next) => {
  if (adminkey(req.session.userkey)) {
    next();
  } else {
    res.redirect('/login');
  }
};
