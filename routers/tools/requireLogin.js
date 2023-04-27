import dotenv from "dotenv/config";
import validateUid from "./validateUid.js";

export const requireLogin = (req, res, next) => {
  if (validateUid(req.session.userkey)) {
    next();
  } else {
    res.redirect('/login');
  }
};
