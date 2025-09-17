import aboutPageImage from "./assets/images/about-page-image.jpg";

export function loadAboutPage() {

  const content = document.getElementById("content");
  //Clear any content before rendering new content.
  content.innerHTML = "";

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