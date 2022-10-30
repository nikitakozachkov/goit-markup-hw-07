const refs = {
  openModalButton: document.querySelector("[data-open-modal]"),
  closeModalButton: document.querySelector("[data-close-modal]"),
  backdrop: document.querySelector("[data-backdrop]"),
};

refs.openModalButton.addEventListener("click", toggleModal);
refs.closeModalButton.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
  refs.backdrop.classList.toggle("is-hidden");
}

function logBackdropClick() {
  console.log("modal");
}
