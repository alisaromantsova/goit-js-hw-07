import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("div.gallery");
const gal = galleryItems
  .map(
    (item) =>
      `
      <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
        </a>
      `
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", gal);

let galle = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scrollZoom: false,
});
