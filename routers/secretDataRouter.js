import { Router } from 'express';
import { requireLogin } from './tools/requireLogin.js';
import validateid from '../util/validateid.js';

const router = Router();

router.get('/secret-data', requireLogin, (req, res) => {
  if (validateid(req.session.userkey)) {
    res.send({ secret: 'SECRET DATA FOR SECRETS!' });
  } else {
    res.send({ secret: 'YOU SHALL NOT PASS' });
  }
});

export default router;
