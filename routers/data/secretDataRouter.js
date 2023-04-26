import { Router } from 'express';
import { requireLogin } from '../tools/requireLogin.js';
import { adminkey } from '../../util/store/creds.js';

const router = Router();

router.get('/secret-data', requireLogin, (req, res) => {
  if(req.session.user.userkey === adminkey){
    res.send({ data: 'Welcome to the secret'})
  }
  res.send({ nosecretforyou: 'you shall not pass'})
});

export default router;
