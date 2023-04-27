import { frontpagePath, loginPath, signupPath, forgotpasswordPath, adminPath, navbarPath, navbarOptionsPath, navbarOptionsAdminPath, footerPath } from './store/paths.js';
import templateEngine from './templateEngine.js';
import dotenv from 'dotenv/config';
import validateid from './validateid.js';

// Storage
const navbarAnon = templateEngine.readPage(navbarPath).replace('$OPTIONS', templateEngine.readPage(navbarOptionsPath));
const navbarAdmin = templateEngine.readPage(navbarPath).replace('$OPTIONS', templateEngine.readPage(navbarOptionsAdminPath));

// Pages
const frontpage = templateEngine.readPage(frontpagePath);
const login = templateEngine.readPage(loginPath);
const signup = templateEngine.readPage(signupPath);
const forgotpassword = templateEngine.readPage(forgotpasswordPath);
const admin = templateEngine.readPage(adminPath);

// Navbar Options
const navbar = templateEngine.readPage(navbarPath);
const navbarOptions = templateEngine.readPage(navbarOptionsPath);
const navbarOptionsAdmin = templateEngine.readPage(navbarOptionsAdminPath);

// Footer
const footer = templateEngine.readPage(footerPath);

export function getFrontpagePage(user, config = {}) {
  return constructPage(frontpage, user)
    .replace('$CSS_LINK', config.cssLink || '')
    .replace('$TAB_TITLE', config.tabTitle || 'Mandatory2');
}
export function getLoginPage(userkey, config = {}) {
  return constructPage(login, userkey)
    .replace('$CSS_LINK', config.cssLink || '')
    .replace('$TAB_TITLE', config.tabTitle || 'Mandatory2');
}
export function getSignupPage(userkey, config = {}) {
  return constructPage(signup, userkey)
    .replace('$CSS_LINK', config.cssLink || '')
    .replace('$TAB_TITLE', config.tabTitle || 'Mandatory2');
}
export function getForgotPasswordPage(userkey, config = {}) {
  return constructPage(forgotpassword, userkey)
    .replace('$CSS_LINK', config.cssLink || '')
    .replace('$TAB_TITLE', config.tabTitle || 'Mandatory2');
}
export function getAdminPage(userkey, config = {}) {
  if (validateid(userkey)) {
    return constructPage(admin, userkey)
      .replace('$CSS_LINK', config.cssLink || '')
      .replace('$TAB_TITLE', config.tabTitle || 'Mandatory2');
  } else {
    return 'NAN';
  }
}

function constructPage(html, userkey) {
  let page = navbar;
  if (validateid(userkey)) {
    page = page.replace('$OPTIONS', navbarOptionsAdmin);
  } else {
    page = page.replace('$OPTIONS', navbarOptions);
  }
  page += html;
  page += footer;
  return page;
}
