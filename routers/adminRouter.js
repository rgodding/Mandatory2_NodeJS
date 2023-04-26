import { Router } from 'express';
import { getAdminPage } from '../util/pages.js';
import { requireLogin } from './tools/requireLogin.js';

const router = Router();

router.get('/admin', requireLogin, (req, res) => {
  res.send(getAdminPage(req.session.userkey));
});

export default router;
