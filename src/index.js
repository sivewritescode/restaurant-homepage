import "./styles.css";
import { loadHomepage } from "./homepage.js";
import { loadAboutPage } from "./about-page.js";

loadHomepage();

const aboutBtn = document.getElementById("nav-button-about");
aboutBtn.addEventListener("click", () => {
  loadAboutPage();
});

const homeBtn = document.getElementById("nav-button-home");
homeBtn.addEventListener("click", () => {
  loadHomepage();
});