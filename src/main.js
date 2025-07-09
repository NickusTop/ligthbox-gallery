import { galleryItems } from './js/gallery-items.js';
import Handlebars from "handlebars";

const galleryListElement = document.querySelector('.js-gallery');

// const galleryTemplate = document.querySelector('.gallery-teml').innerHTML;
import galleryTempl from './js/galleryTeml.hbs?raw';
const template = Handlebars.compile(galleryTempl);
const createGalleryItems = arr => {
return arr
.map(item => {
return template(item);
})
.join('');
};
// 2 variant - шаблон окремо в файлі імпортується
// import galleryTempl from './js/galleryTeml.hbs?raw';

// const template = Handlebars.compile(galleryTempl);

// const createGalleryItems = arr => {
//   return template(arr);
// };
const markup = createGalleryItems(galleryItems);

console.log(markup);

galleryListElement.innerHTML = markup;
