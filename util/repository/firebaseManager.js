import { database } from '../../config/firebase.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();

async function loginToAccount(email, password) {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        resolve(false);
      });
  });
}
// TODO Create
async function createAccount(email, password) {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        resolve(false);
      })
  })
}
// TODO Signout
function signOutOfAccount(){
    signOut(auth).then(() => {
        // Signed out
    }).catch((error) => {
        // error?
    })
}

export default {
    createAccount,
    loginToAccount,
    signOutOfAccount
}