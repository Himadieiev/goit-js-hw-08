import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const listOfImages = createGallery(galleryItems);

function createGallery (galleryItems){
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <div><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></div>`;
  })
    
    .join('');
}

gallery.insertAdjacentHTML("afterbegin", listOfImages);

const lightbox = new SimpleLightbox(".gallery a",
{ captions: true, captionsData: "alt", captionDelay: 250, });