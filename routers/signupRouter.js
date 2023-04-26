import { Router } from 'express';
import { getSignupPage } from '../util/pages.js';
import firebaseManager from '../util/repository/firebaseManager.js';
import { checkIfLoggedOut } from './tools/loginCheck.js';

const router = Router();

router.get('/signup', checkIfLoggedOut, (req, res) => {
    if(req.session.userkey === undefined){
        res.send(getSignupPage());
    } else {
        res.redirect('/');
    }
    
});

router.post('/signup', async (req, res) => {
    const email = req.body.emailInput;
    const password = req.body.passwordInput;
    firebaseManager.createAccount(email, password)
    .then(()=> {
        res.redirect('/')
    })
});

export default router;
