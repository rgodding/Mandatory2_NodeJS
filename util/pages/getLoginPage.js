import templateEngine from "../templateEngine.js";
import { loginPath } from "../store/paths.js";

export default function getLoginPage(userkey){
    const page = templateEngine.readPage(loginPath);
    const renderedPage = templateEngine.renderPage(page, {
      tabTitle: "Front Page",
      cssLink: `<link rel="stylesheet" href="/pages/login/login.css">`,
      userkey: userkey,
    });
    return renderedPage;
}