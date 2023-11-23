import { renderThumbnails } from './thumb.js';
import { showPicture } from './picture.js';

const container = document.querySelector('.pictures');

const clearGallery = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((item) => item.remove());
};

const renderGallery = (pictures) => {
  clearGallery();
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (! thumbnail) {
      return;
    }
    evt.preventDefault();
    const thumbnailId = +thumbnail.dataset.thumbnailId;
    const pictureData = pictures.find(({id}) => id === thumbnailId);
    showPicture(pictureData);
  });
  renderThumbnails(pictures, container);
};

export {renderGallery};
