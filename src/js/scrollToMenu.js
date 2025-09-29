export function initScrollToMenu() {
  const menuBtn = document.querySelector(".header__list--menu");
  const menuSection = document.getElementById("menu");

  if (menuBtn && menuSection) {
    menuBtn.addEventListener("click", () => {
      menuSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}
