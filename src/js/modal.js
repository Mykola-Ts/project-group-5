const refs = {
  body: document.querySelector('body'),
  openModalBtn: document.querySelector('.js-modal-open'),
  closeModalBtn: document.querySelector('.js-modal-close'),
  modal: document.querySelector('.js-modal'),
};

refs.openModalBtn.addEventListener('click', handlerOpenModal);
refs.closeModalBtn.addEventListener('click', handlerCloseModal);

function handlerOpenModal() {
  refs.modal.classList.remove('is-hidden');
  refs.body.classList.add('open-modal');

  refs.modal.addEventListener('click', handlerCloseModalByBackdrop);
  window.addEventListener('keydown', handlerCloseModalByEscape);
}

function handlerCloseModal() {
  refs.modal.classList.add('is-hidden');
  refs.body.classList.remove('open-modal');

  refs.modal.removeEventListener('click', handlerCloseModalByBackdrop);
  window.removeEventListener('keydown', handlerCloseModalByEscape);
}

function handlerCloseModalByBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    handlerCloseModal();
  }
}

function handlerCloseModalByEscape(evt) {
  if (evt.code === 'Escape') {
    handlerCloseModal();
  }
}
