import "./about-page.css";
import aboutPageImage from "./assets/images/about-page-image.jpg";

export function loadAboutPage() {

  const content = document.getElementById("content");
  content.innerHTML = "";

  content.style["backgroundColor"] = "#f2f0ef";

  const ourStoryTitle = document.createElement("h1");
  ourStoryTitle.textContent = "Our Story";

  const ourStoryText = document.createElement("p");
  ourStoryText.textContent = "Lorem ipsum dolor sit amet.";

  const image = document.createElement("img");
  image.src = aboutPageImage;

  content.appendChild(ourStoryTitle);
  content.appendChild(ourStoryText);
  content.appendChild(image);
}