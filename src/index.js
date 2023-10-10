import "./style.css";
import navbar from "./pages/components/navbar";
import homepage from "./pages/home/home.js";
import contact from "./pages/contact/contact";
import menu from "./pages/menu/menu";

document.body.appendChild(navbar());

function navigateTo(destination) {
  if (destination === "Home") {
    console.log("switching to home page");
    document.body.removeChild(document.body.lastChild);
    document.body.appendChild(homepage());
  } else if (destination === "Contact") {
    console.log("switching to contacts page");
    document.body.removeChild(document.body.lastChild);
    document.body.appendChild(contact());
  } else if (destination === "Menu") {
    console.log("switching to menu page");
    document.body.removeChild(document.body.lastChild);
    document.body.appendChild(menu());
  }
}

document.getElementById("Home").addEventListener("click", (e) => {
  navigateTo("Home");
});
document.getElementById("Contact").addEventListener("click", (e) => {
  navigateTo("Contact");
});
document.getElementById("Menu").addEventListener("click", (e) => {
  navigateTo("Menu");
});

window.onload = function () {
  console.log("script is running..");
  document.body.appendChild(homepage());
};
