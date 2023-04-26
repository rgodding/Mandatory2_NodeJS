import { Router } from 'express';
import { rateLimit } from 'express-rate-limit';
import { getLoginPage } from '../util/pages.js';
import firebaseManager from '../util/repository/firebaseManager.js';

const router = Router();

const apiLimiter = rateLimit({
  windowMs: 15,
  max: 4,
  standardHeaders: true,
  legacyHeaders: false,
});

router.use(apiLimiter);

router.use('/auth', rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 4,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

router.get('/login', (req, res) => {
  res.send(getLoginPage());
});

router.post('/auth/login', async (req, res) => {
  let userkey = await firebaseManager.loginToAccount(req.body.emailInput, req.body.passwordInput);
  if (userkey === false) {
    res.redirect('/login');
  } else {
    req.session.userkey = userkey;
    userkey = null;
    res.redirect('/');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

export default router;
