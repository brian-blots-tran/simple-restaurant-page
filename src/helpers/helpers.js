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
function setAttributes(element, attributes) {
  for (var key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  return element;
}

export { createDiv, appendInOrder, setAttributes };
