import aboutPageImage from "./assets/images/about-page-image.jpg";

export function loadAboutPage() {

  const content = document.getElementById("content");
  content.innerHTML = "";

  const aboutContent = document.createElement("div");
  aboutContent.setAttribute("id", "about-content");
  
  const storyContainer = document.createElement("div");
  storyContainer.setAttribute("id", "story-container");

  const ourStoryTitle = document.createElement("h1");
  ourStoryTitle.setAttribute("id", "story-title");
  ourStoryTitle.textContent = "Our Story";

  const ourStoryText = document.createElement("p");
  ourStoryText.setAttribute("id", "story-text");
  ourStoryText.textContent = `At the heart of our kitchen is fire—ancient, elemental, 
  and alive. From the very beginning, we set out to honor the craft of flame grilling, 
  pairing time-honored techniques with the refinement of modern fine dining.\n Every
  cut of meat we serve is carefully selected, prepared with respect, and kissed by open 
  flame until it reaches perfection. It’s not just cooking—it’s a ritual of smoke, heat, 
  and patience that turns simple ingredients into unforgettable meals.`;

  const imageContainer = document.createElement("figure");
  imageContainer.setAttribute("id", "image-container");
  const imageCaption = document.createElement("figcaption");
  imageCaption.textContent = "Sear's Pit & Flame, in New York";

  const image = document.createElement("img");
  image.setAttribute("id", "about-image");
  image.src = aboutPageImage;

  storyContainer.appendChild(ourStoryTitle);
  storyContainer.appendChild(ourStoryText);
  
  imageContainer.appendChild(image);
  imageContainer.appendChild(imageCaption);

  aboutContent.appendChild(storyContainer);
  aboutContent.appendChild(imageContainer);

  content.appendChild(aboutContent);
}