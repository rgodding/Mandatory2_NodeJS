import { Router } from 'express';
import { rateLimit } from "express-rate-limit";

import { getLoginPage } from '../util/pages.js';
import { requireVisit } from './tools/requireVisit.js';
import getUser from '../util/repository/getUser.js';


const router = Router();

const apiLimiter = rateLimit({
  windowMs: 15,
  max: 4,
  standardHeaders: true,
  legacyHeaders: false,
})

router.use(apiLimiter)

router.use("/auth", rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 4,
  standardHeaders: true,
  legacyHeaders: false,
}))


router.get('/login', requireVisit, (req, res) => {
  res.send(getLoginPage())
});

router.post('/auth/login', (req, res) => {
  const user = getUser(req.body.emailInput, req.body.passwordInput);
  if(user === undefined){
    res.redirect('/login')
  } else {
    req.session.user = user;
    res.redirect('/')
  }
})

router.get('/logout', requireVisit, (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

export default router;
