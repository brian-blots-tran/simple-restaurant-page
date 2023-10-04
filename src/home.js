import "./home.css";
const homepage = () => {
  const homepage = document.createElement("div");
  homepage.setAttribute("id", "home-page");
  const headingContainer = document.createElement("div");
  headingContainer.setAttribute("id", "home-page-heading");
  const squircleDiv = document.createElement("div");
  squircleDiv.setAttribute("id", "squircle");

  headingContainer.appendChild(squircleDiv);

  homepage.appendChild(headingContainer);

  return homepage;
};

export default homepage;
