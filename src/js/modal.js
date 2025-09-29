export function initJoinModal() {
  const joinButton = document.querySelector(".header__button--second");
  const joinModal = document.getElementById("joinModal");
  const joinClose = document.querySelector(".modal__close");
  const form = joinModal.querySelector(".modal__form");
  const alert = document.getElementById("funAlert");

  if (!joinButton || !joinModal || !joinClose || !form || !alert) return;

  joinButton.addEventListener("click", () => {
    joinModal.classList.add("show");
  });

  joinClose.addEventListener("click", () => {
    joinModal.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === joinModal) joinModal.classList.remove("show");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    joinModal.classList.remove("show");
    alert.classList.add("show");
    setTimeout(() => {
      alert.classList.remove("show");
    }, 3000);
    form.reset();
  });
}
