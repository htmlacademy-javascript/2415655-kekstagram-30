import './photos-error.js';
import {MESSAGE} from './data.js';
import {getRandomArrayElement} from './util.js';

const picturesList = document.querySelector('.pictures');
const modal = document.querySelector('.big-picture');
const closeModalButton = modal.querySelector('.big-picture__cancel');
const modalImgblock = modal.querySelector('.big-picture__img');
const modalImg = modalImgblock.querySelector('img');
const modalLikesCount = modal.querySelector('.likes-count');
const modalDescription = modal.querySelector('.social__caption');
const modalShownCommentsCount = modal.querySelector('.social__comment-shown-count');
const modalAllComments = modal.querySelector('.social__comment-total-count');
const commentsBlock = document.querySelector('.social__comments');
//const socialComment = document.querySelectorAll('.social__comment');
const comment = document.querySelector('#comment').content;
const commentTemplate = comment.querySelector('li');


const comments = [];
let showCommentsCount = 0;
const removeComments = () => {
  document.querySelectorAll('.social__comment').forEach((comment)=> {
    comment.remove();
  })
}
const renderComment = (showComment) => {
  const commentElement = commentTemplate.cloneNode(true);
  const commentElementImg = commentElement.querySelector('.social__picture');
  commentElementImg.src = comment.avatar;
  commentElementImg.alt = comment.name;
  commentElement.querySelector('.social__text').textContent = showComment.message;
  return commentElement;
  //commentsFragment.appendChild(commentElement);
}
const renderComments = () => {
  const commentsFragment = document.createDocumentFragment();
  console.log('comments', comments);
  const portion = comments.splice(0, MESSAGE);
  portion.forEach((item)=> {
    console.log('comment', item)
    commentsFragment.appendChild(renderComment(item))
    showCommentsCount ++;
  })
}


closeModalButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.add('hidden');
  }
});

const showModal = (photo) => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

const hideModal = (photo) => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const renderModal = (photo) => {
  modalImg.src = photo.url;
  modalShownCommentsCount.textContent = photo.comments.length;
  modalLikesCount.textContent = photo.likes;
  modalAllComments.textContent = photo.comments.length;
  modalDescription.textContent = photo.description;

  removeComments();
  renderComments();
}
const setLocalComments = (data) => {
  comments.length = 0;
  comments.push(...data.slice());
  showCommentsCount = 0;
}
const openModal = (photo) => {
  showModal();
  setLocalComments(photo.comments);
  renderModal(photo);

 console.log('Hello-', photo)
}

export {openModal}
