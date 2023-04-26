import { Router } from 'express';
import { getForgotPasswordPage } from '../util/pages.js';
import firebaseManager from '../util/repository/firebaseManager.js';

const router = Router();

router.get('/forgot-password', (req, res) => {
  res.send(getForgotPasswordPage());
});

router.post('/forgot-password', async (req, res) => {
    const email = req.body.emailInput
    const resetPassword = await firebaseManager.resetPassword(email)
    if(resetPassword){
      res.status(200).send('Password reset email sent')
    } else {
      res.status(500).send('Error sending password reset email');
    }
})

export default router;
