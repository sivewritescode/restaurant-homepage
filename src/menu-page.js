import menuDishImage1 from "./assets/images/menu-page-image-1.jpg";
import menuDishImage2 from "./assets/images/menu-page-image-2.jpg";

export function loadMenuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuContent = document.createElement("div");
  menuContent.setAttribute("id", "menu-content");

  const dishOneContainer = document.createElement("div");
  dishOneContainer.setAttribute("id", "dish-one-container");

  const dishOneTitle = document.createElement("h2");
  dishOneTitle.setAttribute("class", "image-title");
  dishOneTitle.textContent = `Slow-Roasted Prime Rib with Baby Carrots & Feta`;

  const dishOneText = document.createElement("p");
  dishOneText.setAttribute("class", "image-description");
  dishOneText.textContent = `A succulent bone-in prime rib, roasted to perfection and 
  served with a sprig of fresh rosemary. Paired with caramelized baby carrots, drizzled 
  with olive oil, and finished with a sprinkle of creamy feta for a delicate balance of 
  earthy sweetness and tang.`;

  const dishOneDescription = document.createElement("div");
  dishOneDescription.setAttribute("class", "dish-description");

  dishOneDescription.appendChild(dishOneTitle);
  dishOneDescription.appendChild(dishOneText);

  const dishOneImage = document.createElement("img");
  dishOneImage.setAttribute("class", "menu-image");
  dishOneImage.src = menuDishImage1;

  const dishTwoContainer = document.createElement("div");
  dishTwoContainer.setAttribute("id", "dish-two-container");

  const dishTwoTitle = document.createElement("h2");
  dishTwoTitle.setAttribute("class", "image-title");
  dishTwoTitle.textContent = `Rib-eye Steak with Roasted Bone Marrow & Seasonal Sides`;

  const dishTwoText = document.createElement("p");
  dishTwoText.setAttribute("class", "image-description");
  dishTwoText.textContent = `Richly marbled ribeye, pan-seared and finished in a savory 
  jus, accompanied by roasted bone marrow for an indulgent touch. Served with golden baby 
  potatoes tossed in herbs and a seasonal vegetable medley, creating a hearty yet refined 
  plate.`;

  const dishTwoDescription = document.createElement("div");
  dishTwoDescription.setAttribute("class", "dish-description");

  dishTwoDescription.appendChild(dishTwoTitle);
  dishTwoDescription.appendChild(dishTwoText);

  const dishTwoImage = document.createElement("img");
  dishTwoImage.setAttribute("class", "menu-image");
  dishTwoImage.src = menuDishImage2;

  dishOneContainer.appendChild(dishOneDescription);
  dishOneContainer.appendChild(dishOneImage);

  dishTwoContainer.appendChild(dishTwoDescription);
  dishTwoContainer.appendChild(dishTwoImage);

  menuContent.appendChild(dishOneContainer);
  menuContent.appendChild(dishTwoContainer);

  content.appendChild(menuContent);
}