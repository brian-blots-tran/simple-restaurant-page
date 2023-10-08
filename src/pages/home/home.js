import "./home.css";
import {
  createDiv,
  appendInOrder,
  setAttributes,
} from "../../helpers/helpers.js";
const hero = () => {
  const headingContainer = createDiv("id", "home-page-heading");
  const squircleContainer = createDiv("id", "squircle-container");
  const squircleDiv = createDiv("id", "squircle");
  squircleContainer.appendChild(squircleDiv);
  const headingTitleContainer = createDiv("id", "heading-title-container");
  const headingTitle = createDiv("id", "heading-title");
  headingTitle.textContent = "Restaurant dishes with all security measures!";
  const headingSubtitle = createDiv("id", "heading-subtitle");
  headingSubtitle.textContent =
    "In the incorporation of the new normality we're allowing 30% of restaurant's capacity.";
  const subtitlelink = document.createElement("a");
  setAttributes(subtitlelink, {
    id: "subtitle-link",
    href: "#",
  });
  subtitlelink.textContent = "Book now";
  headingSubtitle.appendChild(subtitlelink);

  const titleImage = createDiv("id", "title-image-container");
  const headingCTAContainer = createDiv("id", "heading-CTAcontainer");
  const CTAtext = createDiv("id", "CTAtext");
  const boldtext = document.createElement("b");
  boldtext.innerHTML = "Subscribe to our news letter ";
  boldtext.setAttribute("class", "cta-text-embolden");
  CTAtext.appendChild(boldtext);
  CTAtext.appendChild(document.createTextNode(" and get special offers!"));
  const CTAform = document.createElement("form");
  setAttributes(CTAform, {
    id: "CTA-form",
    action: "",
  });

  const CTAformTextBox = document.createElement("input");
  setAttributes(CTAformTextBox, {
    id: "cta-form-input",
    name: "email",
    type: "email",
    placeholder: "Email",
  });
  const CTAformBtn = document.createElement("button");
  CTAformBtn.setAttribute("id", "cta-form-btn");
  CTAformBtn.textContent = "Sign up";
  appendInOrder(CTAform, CTAformTextBox, CTAformBtn);
  appendInOrder(headingCTAContainer, CTAtext, CTAform);
  appendInOrder(
    headingTitleContainer,
    headingTitle,
    headingSubtitle,
    titleImage,
    headingCTAContainer
  );

  appendInOrder(headingContainer, squircleContainer, headingTitleContainer);
  return headingContainer;
};

const homepage = () => {
  const homepage = createDiv("id", "home-page");

  homepage.appendChild(hero());

  return homepage;
};

export default homepage;
