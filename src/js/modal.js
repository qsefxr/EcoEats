// modal.js
export function initJoinModal() {
  const joinButton = document.querySelector(".header__button--second");
  const joinModal = document.getElementById("joinModal");
  const joinClose = joinModal.querySelector(".modal__close");

  if (!joinButton || !joinModal || !joinClose) return;

  joinButton.addEventListener("click", () => {
    joinModal.style.display = "flex";
  });

  joinClose.addEventListener("click", () => {
    joinModal.style.display = "none";
  });

  joinModal.addEventListener("click", (e) => {
    if (e.target === joinModal) {
      joinModal.style.display = "none";
    }
  });
}
