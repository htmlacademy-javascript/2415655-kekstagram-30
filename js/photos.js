import { getPhotosDesc, MAX_PHOTO } from './data.js';
import './modal.js';

//находим dom елемент блока куда будем добавлять фотографии
const picturesList = document.querySelector('.pictures');

//находим элемент шаблона для добавления фото
const picture = document.querySelector('#picture').content;
const pictureTemplate = picture.querySelector('a');

//создаем массив с фотографиями при помощи вызова ранее созданнной функции
const photoPostArray = getPhotosDesc(MAX_PHOTO);

//создаем documentFragment
const picturesListFragment = document.createDocumentFragment();

const renderPhotoPosts = () => {
  photoPostArray.forEach(({ url, description, likes, comments }) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.comments = comments;
    photoElement.description = description;
    photoElement.url = url;
    photoElement.likes = likes;
    picturesListFragment.appendChild(photoElement);
  });

  picturesList.appendChild(picturesListFragment);
};
renderPhotoPosts();
