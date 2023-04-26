import { frontpagePath, loginPath, signupPath, adminPath, navbarPath, navbarOptionsPath, navbarOptionsAdminPath, footerPath } from './store/paths.js';
import { adminkey } from './store/creds.js';
import templateEngine from './templateEngine.js';

// Storage
const navbarAnon = templateEngine.readPage(navbarPath)
.replace('$OPTIONS', templateEngine.readPage(navbarOptionsPath))
const navbarAdmin = templateEngine.readPage(navbarPath)
.replace('$OPTIONS', templateEngine.readPage(navbarOptionsAdminPath))

// Pages
const frontpage = templateEngine.readPage(frontpagePath);
const login = templateEngine.readPage(loginPath);
const signup = templateEngine.readPage(signupPath);
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
export function getAdminPage(userkey, config = {}) {
  return constructPage(admin, userkey)
    .replace('$CSS_LINK', config.cssLink || '')
    .replace('$TAB_TITLE', config.tabTitle || 'Mandatory2');
}

function constructPage(html, userkey) {
  let page = navbar;
  if (adminkey(userkey)) {
    page = page.replace('$OPTIONS', navbarOptionsAdmin);
  } else {
    page = page.replace('$OPTIONS', navbarOptions);
  }
  page += html;
  page += footer;
  return page;
}
