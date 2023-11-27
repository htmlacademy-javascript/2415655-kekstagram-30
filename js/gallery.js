import { renderThumbnails } from './thumb.js';
import { showPicture } from './picture.js';

const container = document.querySelector('.pictures');

const pictures = [];

const clearGallery = () => {
  // eslint-disable-next-line no-shadow
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((item) => item.remove());
};

const renderGallery = (data) => {
  clearGallery();
  pictures.length = 0;
  pictures.push(...data.slice())
  renderThumbnails(pictures, container);
};

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

export {renderGallery};
