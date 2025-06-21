const LS_KEY_FAVORITE_ITEMS = 'favorite-items';
const errorMessage = 'Oops, something went wrong. Try reloading the page.';
const refs = {
  catalogList: document.querySelector('.js-catalog-list'),
  catalogItems: document.querySelectorAll('.js-catalog-list-item'),
};
const favorites = [];

try {
  const savedItems =
    JSON.parse(localStorage.getItem(LS_KEY_FAVORITE_ITEMS)) || [];

  favorites.push(...savedItems);
} catch (error) {
  console.error(errorMessage);
}

refs.catalogList.addEventListener('click', handlerAddToFavorites);

refs.catalogItems.forEach(item => {
  if (favorites.includes(item.dataset.id)) {
    item.classList.add('catalog-favorite-item');
  }
});

function handlerAddToFavorites(evt) {
  evt.preventDefault();

  const targetEl = evt.target;
  const targetBtnFavorite = targetEl.closest('.js-favorites-button');

  if (targetBtnFavorite) {
    const targetCatalogItem = targetEl.closest('.js-catalog-list-item');
    const itemId = targetCatalogItem?.dataset.id;
    const itemIdx = favorites.indexOf(itemId);

    !~itemIdx ? favorites.push(itemId) : favorites.splice(itemIdx, 1);

    try {
      localStorage.setItem(LS_KEY_FAVORITE_ITEMS, JSON.stringify(favorites));
      targetCatalogItem.classList.toggle('catalog-favorite-item');
      targetBtnFavorite.blur();
    } catch (error) {
      console.error(errorMessage);
    }
  }
}
