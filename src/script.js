AOS.init({
  duration: 1000,
  once: true,
});

import { initScrollButton } from "../src/js/scroll.js";
document.addEventListener("DOMContentLoaded", () => {
  initScrollButton();
});

import { initScrollToSection } from "./js/scrollToSection.js";
initScrollToSection();

import { initScrollToStory } from "./js/scrollToStory.js";
initScrollToStory();

import { initScrollToMenu } from "./js/scrollToMenu.js";
initScrollToMenu();

import { initScrollToReserve } from "./js/scrollToSection.js";
initScrollToReserve();
