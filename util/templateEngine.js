import fs from 'fs';
import { navbarPath, footerPath, navbarOptionsPath, navbarOptionsAdminPath } from './store/paths.js';
import { adminkey } from './store/creds.js';

function renderPage(page, config = {}) {
  const navbar = getNavbar(config);
  const footer = getFooter(config);
  return navbar + page + footer;
}

function readPage(pagePath) {
  return fs.readFileSync(pagePath).toString();
}

function getNavbar(config = {}) {
  const navbar = readPage(navbarPath)
    .replace('$CSS_LINK', config.cssLink || '')
    .replace('$OPTIONS', navbarOptions(config.userkey) || '');
  return navbar;
}
function navbarOptions(user) {
  if (user === adminkey) {
    return readPage(navbarOptionsAdminPath);
  } else {
    return readPage(navbarOptionsPath);
  }
}

function getFooter(config = {}) {
  const footer = readPage(footerPath);
  return footer;
}

export default {
  renderPage,
  readPage,
};
