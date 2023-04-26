import { adminkey } from '../../util/store/creds.js';

export const requireLogin = (req, res, next) => {
  if (req.session.userkey === adminkey) {
    next();
  } else {
    res.redirect('/login');
  }
};
