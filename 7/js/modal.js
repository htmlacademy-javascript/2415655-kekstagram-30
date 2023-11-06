import './photos.js';
const picturesList = document.querySelector('.pictures');
const modal = document.querySelector('.big-picture');
const closeModalButton = modal.querySelector('.big-picture__cancel');
const modalImgblock = modal.querySelector('.big-picture__img');
const modalImg = modalImgblock.querySelector('img');
const modalLikesCount = modal.querySelector('.likes-count');
const modalDescription = modal.querySelector('.social__caption');
const modalShownCommentsCount = modal.querySelector('.social__comment-shown-count');
const modalAllComments = modal.querySelector('.social__comment-total-count');

//открытие модального окна при клике на миниатюру и рендеринг комментариев
picturesList.addEventListener('click', (evt) => {
  modal.classList.remove('hidden');
  const photo = evt.target.parentElement;
  modalImg.src = photo.url;
  modalShownCommentsCount.textContent = photo.comments.length;
  modalLikesCount.textContent = photo.likes;
  modalAllComments.textContent = photo.comments.length;
  modalDescription.textContent = photo.description;
  renderComments(photo.comments);

});

//закрытие модального окна
closeModalButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.add('hidden');
  }
});

//функция для рендеринга комментариев
const renderComments = (commentsArray) => {
  const commentsBlock = document.querySelector('.social__comments');
  commentsBlock.textContent = '';
  const comment = document.querySelector('#comment').content;
  const commentTemplate = comment.querySelector('li');
  const commentsFragment = document.createDocumentFragment();
  commentsArray.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentElementImg = commentElement.querySelector('.social__picture');
    commentElementImg.src = comment.avatar;
    commentElementImg.alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentsFragment.appendChild(commentElement);
  });
  commentsBlock.appendChild(commentsFragment);
};
