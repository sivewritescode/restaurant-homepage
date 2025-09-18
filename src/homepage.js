import "./homepage.css";
export function loadHomepage() {

  const content = document.getElementById("content");
  content.innerHTML = "";

  content.style.backgroundImage = "url('assets/images/sear-background-image.jpg')";

  content.style["backgroundColor"] = "#3C3836";

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
}

  // background-image: url("assets/images/sear-background-image.jpg");
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center center;
  // backdrop-filter: brightness(60%);
  // background-color: rgba(255, 255, 255, 0.5);