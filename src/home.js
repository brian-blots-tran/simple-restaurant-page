import "./home.css";
const createDiv = (attribute, attributeName) => {
  const div = document.createElement("div");
  div.setAttribute(attribute, attributeName);
  return div;
};
const appendInOrder = (parent, ...children) => {
  for (let i = 0; i < children.length; i++) {
    parent.appendChild(children[i]);
  }
  return parent;
};

const heading = () => {
  const headingContainer = createDiv("id", "home-page-heading");
  const squircleDiv = createDiv("id", "squircle");
  const headingTitleContainer = createDiv("id", "heading-title-container");
  const headingTitle = createDiv("id", "heading-title");
  headingTitle.textContent = "Restaurant dishes with all security measures!";
  const headingSubtitle = createDiv("id", "heading-subtitle");
  headingSubtitle.textContent =
    "In the incorporation of the new normality we're allowing 30# of restaurant's capacity.";
  const subtitlelink = document.createElement("a");
  subtitlelink.textContent = "Book now";
  headingSubtitle.appendChild(subtitlelink);

  const titleImage = createDiv("id", "title-image-container");
  const headingCTAContainer = createDiv("id", "heading-CTAcontainer");
  appendInOrder(
    headingTitleContainer,
    headingTitle,
    headingSubtitle,
    titleImage,
    headingCTAContainer
  );

  appendInOrder(headingContainer, squircleDiv, headingTitleContainer);
  return headingContainer;
};
const homepage = () => {
  const homepage = createDiv("id", "home-page");

  homepage.appendChild(heading());

  return homepage;
};

export default homepage;
