(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  const openModal = () => {
    refs.modal.classList.remove("is-hidden");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    refs.modal.classList.add("is-hidden");
    document.body.style.overflow = "";
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);
})();
