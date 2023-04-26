import { Router } from 'express';
import { requireLogin } from './tools/requireLogin.js';
import { getAdminPage } from '../util/pages.js';

const router = Router();

router.get('/admin', requireLogin, (req, res) => {
  res.send(getAdminPage(req.session.user.userkey))
});

router.get('/admin/secret-data', requireLogin, async (req, res) => {
  res.send({ data: 'secret-data'})
})

export default router;
