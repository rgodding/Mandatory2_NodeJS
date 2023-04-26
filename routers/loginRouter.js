import { Router } from 'express';
import { getLoginPage } from '../util/pages.js';
import { requireVisit } from './tools/requireVisit.js';
import getUser from '../util/repository/getUser.js';

const router = Router();

router.get('/login', requireVisit, (req, res) => {
  res.send(getLoginPage())
});

router.post('/login', (req, res) => {
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
