import {
  init as initEffect,
  //reset as resetEffect
} from './effect.js';
import { sendPictures } from './api.js';
import { showSuccesMessage, showErrorMessage } from './message.js';
import { resetToDefault } from './scale.js';
import { isValid, resetValidation } from './validation.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const overlay = form.querySelector('.img-upload__overlay');
const cancelBtn = form.querySelector('.img-upload__cancel');
const fileField = form.querySelector('.img-upload__input');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');

const submitButton = form.querySelector('.img-upload__submit');
const photoPreview = form.querySelector('.img-upload__preview img');
const effectsPreviews = form.querySelectorAll('.effects__preview');

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'webp'];

const SubmitButtonCaption = {
  SUBMITING: 'Отправляю...',
  IDLE: 'Опубликовать',
};

function toggleSubmitButton(isDisabled) {
  submitButton.disabled = isDisabled;
  if (isDisabled) {
    submitButton.textContent = SubmitButtonCaption.SUBMITING;
  } else {
    submitButton.textContent = SubmitButtonCaption.IDLE;
  }
  // submitButton.textContent = isDisabled
  //   ? SubmitButtonCaption.SUBMITING
  //   ! SubmitButtonCaption.IDLE;
}

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  resetValidation();
  form.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === commentField;

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
};

function onDocumentKeydown(evt) {
  const isErrorMessageExists = Boolean(document.querySelector('.error'));
  if (evt.key === 'Escape' && !isTextFieldFocused() && !isErrorMessageExists) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  const file = fileField.files[0];

  if (file && isValidType(file)) {
    photoPreview.src = URL.createObjectURL(file);
    effectsPreviews.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreview.src}')`;
    });
  }
  showModal();
  resetToDefault();
};

async function sendForm(formElement) {
  if (!isValid()) {

    return;
  }
  try {

    toggleSubmitButton(true);
    await sendPictures(new FormData(formElement));

    toggleSubmitButton(false);

    hideModal();
    showSuccesMessage();

  } catch {
    showErrorMessage();
    toggleSubmitButton(false);
  }
}

const onFormSubmit = (evt) => {
  evt.preventDefault();
  sendForm(evt.target);
};

fileField.addEventListener('change', onFileInputChange);
cancelBtn.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);
initEffect();
