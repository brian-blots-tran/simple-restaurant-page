import "./navbar.css";
import { createElement, appendInOrder } from "../../helpers/helpers.js";

const navbar = () => {
  const logoContainer = createElement("div", { id: "logo-container" });
  logoContainer.appendChild(createElement("div", { id: "logo" }));

  const navGroup = createElement("ul", { id: "nav-group" });
  const navlinkNames = ["Home", "Contact", "Menu"];

  for (let item in navlinkNames) {
    const navItem = createElement("li", {
      id: `${navlinkNames[item]}`,
      class: "nav-item",
    });
    navItem.appendChild(document.createTextNode(navlinkNames[item]));
    navGroup.appendChild(navItem);
  }

  const navbarContainer = createElement("div", { id: "navbar" });
  return appendInOrder(navbarContainer, logoContainer, navGroup);
};

export default navbar;
