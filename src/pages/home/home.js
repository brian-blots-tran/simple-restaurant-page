import "./home.css";

import Image from "../../images/cake.png";
import { createElement, appendInOrder } from "../../helpers/helpers.js";

const hero = () => {
  //create content and container for left side of hero
  const leftContainer = createElement("div", { id: "squircle-container" });
  leftContainer.appendChild(createElement("div", { id: "squircle" }));

  //create content for right side of hero starting with headings

  const headingTitle = createElement("div", { id: "heading-title" });
  headingTitle.textContent =
    "Oooey Gooey delicious deserts made fresh every day!";

  //subheading
  const headingSubtitle = createElement("div", { id: "heading-subtitle" });
  headingSubtitle.textContent =
    "Come and treat yourself to some of the most delectable and interesting desert you'll ever eat.";
  const subtitlelink = createElement("a", {
    id: "subtitle-link",
    href: "#",
  });
  subtitlelink.textContent = "Book now";
  headingSubtitle.appendChild(subtitlelink);

  //CTA section of right side of hero
  const headingCTAContainer = createElement("div", {
    id: "heading-CTAcontainer",
  });
  const CTAtext = createElement("div", { id: "CTAtext" });
  const boldtext = document.createElement("b", { class: "cta-text-embolden" });
  boldtext.innerHTML = "Subscribe to our news letter ";
  appendInOrder(
    CTAtext,
    boldtext,
    document.createTextNode("and get special offers!")
  );

  //CTA form
  const CTAform = document.createElement("form", {
    id: "CTA-form",
    action: "",
  });

  const CTAformTextBox = createElement("input", {
    id: "cta-form-input",
    name: "email",
    type: "email",
    placeholder: "Email",
  });

  const CTAformBtn = createElement("input", {
    id: "cta-form-btn",
    type: "submit",
  });
  appendInOrder(CTAform, CTAformTextBox, CTAformBtn);

  //append CTA content to container
  appendInOrder(headingCTAContainer, CTAtext, CTAform);

  //image section of right side of hero
  const titleImage = createElement("div", { id: "title-image-container" });
  titleImage.appendChild(
    createElement("img", { id: "title-image", src: Image })
  );
  //append right side content to right side container
  const rightContainer = createElement("div", {
    id: "heading-title-container",
  });
  appendInOrder(
    rightContainer,
    headingTitle,
    headingSubtitle,
    titleImage,
    headingCTAContainer
  );

  //append left and right side containers to a hero container and return
  const heroContainer = createElement("div", { id: "home-page-heading" });
  return appendInOrder(heroContainer, leftContainer, rightContainer);
};
const homepage = () => {
  const homepage = createElement("div", { id: "home-page" });
  homepage.appendChild(hero());

  return homepage;
};

export default homepage;
