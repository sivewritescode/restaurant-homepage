import "./styles.css";

const content = document.getElementById("content");

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

content.appendChild(welcomeText);
content.appendChild(horizontal);
content.appendChild(headlineText);
content.appendChild(findATableBtn);