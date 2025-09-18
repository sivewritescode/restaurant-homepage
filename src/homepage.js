export function loadHomepage() {

  const content = document.getElementById("content");
  content.innerHTML = "";

  const homeContent = document.createElement("div");
  homeContent.setAttribute("id", "home-content");

  const welcomeText = document.createElement("p");
  welcomeText.setAttribute("id", "welcome-text");
  welcomeText.textContent = "WELCOME TO SEAR";

  const horizontal = document.createElement("hr");

  const headlineText = document.createElement("h1");
  headlineText.setAttribute("id", "headline-text");
  headlineText.textContent = "Meat. Fire. Mastery.";

  const findATableBtn = document.createElement("button");
  findATableBtn.setAttribute("id", "find-a-table");
  findATableBtn.textContent = "Find a Table";

  homeContent.appendChild(welcomeText);
  homeContent.appendChild(horizontal);
  homeContent.appendChild(headlineText);
  homeContent.appendChild(findATableBtn);

  content.appendChild(homeContent);
}