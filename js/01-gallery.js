import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const cards = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML('beforeend', cards);
galleryList.addEventListener('click', onClick);


function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return ` 
               <div class="gallery__item">
                  <a class="gallery__link"
            href = "${original}" >
                    <img class="gallery__image" 
            src = "${preview}"
            data-source="${original}"
            alt = "${description}" />
                  </a>
                </div>
                `;
        }).join('');
}

function onClick(e) {
    // console.log(e.target);
    e.preventDefault();

    const imgSize = e.target.classList.contains('gallery__image');
    if (!imgSize) {
        return;
    }
    const sizeEl = e.target;
    let parent = sizeEl.closest('.gallery__image');
    parent = basicLightbox.create(` <img 
       src = "${parent.dataset.source}" "width="1280" height="800"
            >`).show()
    
}

console.log(galleryItems);