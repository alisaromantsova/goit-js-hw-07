import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector("div.gallery");
const gal = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" data-source=${item.original} alt="${item.description}"/>
        </a>
    </div>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", gal);

const onImgClick = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const url = e.target.dataset.source;
  const a = basicLightbox.create(
    `
  		<img width="1400" height="900" src="${url}">
  	`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscape);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscape);
      },
    }
  );
  a.show();

  function onEscape(ev) {
    if (ev.key === "Escape") {
      a.close();
    }
  }
};

gallery.addEventListener("click", onImgClick);
