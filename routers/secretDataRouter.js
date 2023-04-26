import { Router } from 'express';
import { requireLogin } from './tools/requireLogin.js'

const router = Router();

router.get('/secret-data', requireLogin, (req, res) => {
  res.send({secret: 'SECRET DATA FOR SECRETS!'})
});

export default router;
