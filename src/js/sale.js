const refs = {
  toggleShowDescrText: document.querySelector('.js-toggle-show-descr-text'),
  saleDescrText: document.querySelector('.js-sale-descr-text'),
  toggleShowDetails: document.querySelector('.js-toggle-show-details'),
  saleDetails: document.querySelector('.js-sale-details'),
};

refs.toggleShowDescrText.addEventListener('click', handlerToggleDescr);
refs.toggleShowDetails.addEventListener('click', handlerToggleDetails);

function handlerToggleDescr() {
  refs.saleDescrText.classList.toggle('show-descr');
}

function handlerToggleDetails() {
  refs.saleDetails.classList.toggle('show-details');
}
