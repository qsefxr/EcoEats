export function initScrollToSection() {
  const veganMenuItem = document.querySelector(".header__list--vegan");
  const dishesSection = document.getElementById("dishes");

  if (veganMenuItem && dishesSection) {
    veganMenuItem.addEventListener("click", () => {
      dishesSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}
export function initScrollToReserve() {
  const orderBtn = document.querySelector(".header__button--first");
  const reserveSection = document.querySelector(".reserve");

  if (orderBtn && reserveSection) {
    orderBtn.addEventListener("click", () => {
      reserveSection.scrollIntoView({ behavior: "smooth" });
    });
  }
}
