export function initScrollToStory() {
  const storyBtn = document.querySelector(".header__list--story");
  const storySection = document.getElementById("story");

  if (storyBtn && storySection) {
    storyBtn.addEventListener("click", () => {
      storySection.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}
