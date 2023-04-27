import dotenv from 'dotenv/config';

export default function validateid(id) {
  if (process.env.ADMIN_ID === undefined) {
    return false;
  } else if (process.env.ADMIN_ID === id) {
    return true;
  }
}
