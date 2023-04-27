import { database } from '../../config/firebase.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signOut } from 'firebase/auth';

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
      });
  });
}

function signOutOfAccount() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
}

async function resetPassword(email) {
  try {
    sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    return false;
  }
}

export default {
  createAccount,
  loginToAccount,
  signOutOfAccount,
  resetPassword,
};
