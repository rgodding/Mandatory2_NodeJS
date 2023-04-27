import dotenv from 'dotenv/config';
import validateid from '../../util/validateid.js';

export const requireLogin = (req, res, next) => {
  if (validateid(req.session.userkey)) {
    next();
  } else {
    res.redirect('/login');
  }
};
