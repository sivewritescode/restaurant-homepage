import aboutPageImage from "./assets/images/about-page-image.jpg";

export function loadAboutPage() {

  const content = document.getElementById("content");
  content.innerHTML = "";
  
  const storyContainer = document.createElement("div");
  storyContainer.setAttribute("id", "story-container");

  const ourStoryTitle = document.createElement("h1");
  ourStoryTitle.textContent = "Our Story";

  const ourStoryText = document.createElement("p");
  ourStoryText.textContent = "Lorem ipsum dolor sit amet.";

  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("id", "image-container");

  const image = document.createElement("img");
  image.src = aboutPageImage;

  storyContainer.appendChild(ourStoryTitle);
  storyContainer.appendChild(ourStoryText);

  imageContainer.appendChild(image);

  content.appendChild(storyContainer);
  content.appendChild(imageContainer);
}