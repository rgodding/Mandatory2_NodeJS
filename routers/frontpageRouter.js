import { Router } from 'express';
import { getFrontpagePage } from '../util/pages.js';

const router = Router();

router.get('/', (req, res) => {
  res.send(getFrontpagePage(req.session.userkey));
});

export default router;
