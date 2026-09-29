import "./style.css";

import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

function clearContent() {
    content.textContent = "";
}

homeButton.addEventListener("click", () => {
    clearContent();
    loadHomePage();
});

menuButton.addEventListener("click", () => {
    clearContent();
    loadMenuPage();
});

contactButton.addEventListener("click", () => {
    clearContent();
    loadContactPage();
});

loadHomePage();