import "./menu.css";
import { createElement, appendInOrder } from "../../helpers/helpers.js";

export default function menu() {
  const tempHeading = createElement("h1", { class: "temp-heading" });
  tempHeading.textContent = "Menu Page";
  const menuPage = createElement("div", { id: "menu-page" });
  menuPage.appendChild(tempHeading);
  return menuPage;
}
