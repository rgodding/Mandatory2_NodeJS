import templateEngine from "../templateEngine.js";
import { frontpagePath } from "../store/paths.js";

export default function getFrontpagePage(userkey){
    const page = templateEngine.readPage(frontpagePath);
    const renderedPage = templateEngine.renderPage(page, {
      tabTitle: "Front Page",
      cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`,
      userkey: userkey,
    });
    return renderedPage;
}