import './modal-photos.js';
import {openModal} from './modal-photos.js';

const templateFragment = document.querySelector('#picture').content.querySelector('a');


const picturesContainer = document.querySelector('.pictures');

const fragment = document.createDocumentFragment();

const renderPhotos = (photoArray) => {
  photoArray.forEach(({id, url, desc, likes, comments}) => {
    const element = templateFragment.cloneNode(true);
    element.dataset.id = id;
    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture__img').alt = desc;
    element.querySelector('.picture__likes').textContent = likes;
    element.querySelector('.picture__comments').textContent = comments.length;


    fragment.appendChild(element);
  });

  picturesContainer.appendChild(fragment);
 setListener(photoArray)
};
const setListener = (photoArray) => {
  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')){
      console.log(evt.target.closest('.picture').dataset.id)
      const id = parseInt(evt.target.closest('.picture').dataset.id)
      const photo = photoArray.find((item) => item.id === id)
      openModal(photo)
    }

  });
}


export {renderPhotos};
