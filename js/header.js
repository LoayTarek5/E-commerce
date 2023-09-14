import {shoppingCart} from "./items.js"
import {cartIcon} from "./showCart.js"

shoppingCart

// Header of Page
let header = document.querySelector("header");

let catalog = document.getElementById("catalog");
let collection = document.getElementById("collections");


// Bar Magent
let barMagnet = document.querySelector(".bar-magnet");
let nav = document.querySelector("nav");
let closeBar = document.querySelector(".close-magnet");
//Timer to clear setIntervalTime toclose the Meaga menu bar
let timer;

// arrow of bar magnets
let arrows = document.querySelectorAll(".arrow");


// To Change header according the scroll window
function headerScroll() {
  window.onscroll = () => {
    if (window.scrollY >= header.scrollHeight) {
      document.querySelector(".main-header").style.display = "none";
    } else {
      document.querySelector(".main-header").style.display = "flex";
    }
  };
}

// Loop on each arrow and display the selected one
function arrowMenuCheck() {
  document.querySelectorAll(".arrow").forEach((arr) => {
    arr.addEventListener("click", (e) => {
      e.target.classList.toggle("active");
      if (e.target.classList.contains("arrow-catalog")) {
        document.querySelector(".bar-menu-catalog").classList.toggle("active");
      } else if (e.target.classList.contains("arrow-main-menu")) {
        document
          .querySelector(".bar-menu-catalog-1")
          .classList.toggle("active");
      } else if (e.target.classList.contains("arrow-account")) {
        document
          .querySelector(".bar-menu-catalog-2")
          .classList.toggle("active");
      } else if (e.target.classList.contains("arrow-collections")) {
        document
          .querySelector(".bar-menu-collection")
          .classList.toggle("active");
      }
    });
  });
}

// Hover on megamenu it will pop up
function HoverMegaMenus() {
  catalog.onmouseover = function () {
    openMenu(this);
  };
  // ON Leave megamenu it will close after 0.5sec
  catalog.onmouseleave = function () {
    closeMenu(this);
  };
  collection.onmouseover = function () {
    openMenu(this);
  };
  // ON Leave megamenu it will close after 0.5sec
  collection.onmouseleave = function () {
    closeMenu(this);
  };
}

function closeAllOpendBarMenu() {
  arrows.forEach((arrow) => {
    arrow.classList.remove("active");
  });
  document.querySelector(".bar-menu-catalog").classList.remove("active");
  document.querySelector(".bar-menu-catalog-1").classList.remove("active");
  document.querySelector(".bar-menu-catalog-2").classList.remove("active");
  document.querySelector(".bar-menu-collection").classList.remove("active");
}

// hover on to open Menu of the nav bar
function openMenu(e) {
  // Remove the open menu to prevent the collapsing
  document.querySelectorAll("nav li").forEach((li) => {
    if (li.classList.contains("open")) li.classList.remove("open");
  });
  clearTimeout(timer);
  e.classList.add("open");
}

// leave mouse to close Menu of the nav bar
function closeMenu(e) {
  timer = setTimeout(() => {
    e.classList.remove("open");
  }, 500);
}

// Open or close the bar magent when click the bar of the close button
// function toggleBarMagnet() {}
barMagnet.onclick = () => {
  // If nav bar is closed Then close all opened menu bar
  if (!nav.classList.contains("active")) closeAllOpendBarMenu();

  nav.classList.toggle("active");
  closeBar.classList.toggle("active");
  closeBar.onclick = () => {
    barMagnet.click();
  };
};


export {headerScroll, HoverMegaMenus, arrowMenuCheck, shoppingCart,cartIcon}