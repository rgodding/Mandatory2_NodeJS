import { frontpagePath, loginPath, adminPath, navbarPath, navbarOptionsPath, navbarOptionsAdminPath, footerPath } from './store/paths.js';
import { adminkey } from './store/creds.js';
import templateEngine from './templateEngine.js';

// Pages
const frontpage = templateEngine.readPage(frontpagePath);
const login = templateEngine.readPage(loginPath);
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
export function getAdminPage(userkey, config = {}) {
  return constructPage(admin, userkey)
    .replace('$CSS_LINK', config.cssLink || '')
    .replace('$TAB_TITLE', config.tabTitle || 'Mandatory2');
}

function constructPage(html, userkey) {
  let page = navbar;
  if (userkey === adminkey) {
    page = page.replace('$OPTIONS', navbarOptionsAdmin);
  } else {
    page = page.replace('$OPTIONS', navbarOptions);
  }
  page += html;
  page += footer;
  return page;
}
