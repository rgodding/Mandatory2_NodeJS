import { Router } from 'express';
import { getFrontpagePage } from '../util/pages.js';

const router = Router();

router.get('/', (req, res) => {
  if(req.session.user === undefined){
    req.session.user = {name: 'anon', userkey: 'anon'}
  }
  res.send(getFrontpagePage(req.session.user.userkey))
});

export default router;
