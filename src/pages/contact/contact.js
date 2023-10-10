import "./contact.css";
import { createElement, appendInOrder } from "../../helpers/helpers.js";
export default function contact() {
  const tempHeading = createElement("h1", { class: "temp-heading" });
  tempHeading.textContent = "Contact Page";
  const contactPage = createElement("div", { id: "contact-page" });
  contactPage.appendChild(tempHeading);
  return contactPage;
}
