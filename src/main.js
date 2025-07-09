import { galleryItems } from './js/gallery-items.js';

const galleryListElement = document.querySelector('.js-gallery');

console.log(galleryListElement);

const createGalleryItems = (arr) => {
  return arr.map((item) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="Tulips"
        />
      </a>
    </li>`;
  }).join('');
};

const markup = createGalleryItems(galleryItems);

console.log(markup);

galleryListElement.innerHTML = markup;

new SimpleLightbox('.js-gallery a', {
  
});