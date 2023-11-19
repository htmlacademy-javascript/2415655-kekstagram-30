import {
  init as initEffect,
  //reset as resetEffect
} from './effect.js';
import { sendPictures } from './api.js';
import {showSuccesMessage,showErrorMessage} from './message.js';
import {resetToDefault} from './scale.js';

const MAX_TAG = 5;
const VALID = /^#[a-za-яё0-9]{1,19}$/i;
const FILE_TYPES = ['jpg','jpeg','png'];

const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_TAG} хэштэгов`,
  NOT_UNIQ: 'Хэштэги должны быть уникальными',
  INVALID_PATTERN: 'Неверный хэштэг',
};

const SubmitButtonCaption = {
  SUBMITING: 'Отправляю...',
  IDLE: 'Опубликовать',
};

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

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  form.requestFullscreen();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === commentField;

const normalizeTags = (tagString) => tagString.trim().split('').filter((tag) => Boolean(tag.length));

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
};

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID.test(tag));
const hasValidCount = (value) => normalizeTags(value).length <= MAX_TAG;

const hasUniqTag = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

function onDocumentKeydown(evt) {
  const isErrorMessageExists = Boolean(document.querySelector('.error'));
  if(evt.key === 'Escape' && !isTextFieldFocused() && !isErrorMessageExists){
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {

  hideModal();
};

const onFileInputChange = () => {
  const file = fileField.files[0];

  if (file && isValidType(file)){
    photoPreview.src = URL.createObjectURL(file);
    effectsPreviews.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreview.src}')`;
    });
  }
  showModal();
  resetToDefault();
};

async function sendForm(formElement){
  if(!pristine.validate()){
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

pristine.addValidator(
  hashtagField,
  hasValidCount,
  ErrorText.INVALID_COUNT,
  3,
  true
);
pristine.addValidator(
  hashtagField,
  hasUniqTag,
  ErrorText.NOT_UNIQ,
  2,
  true
);
pristine.addValidator(
  hashtagField,
  hasValidTags,
  ErrorText.INVALID_PATTERN,
  1,
  true
);

fileField.addEventListener('change', onFileInputChange);
cancelBtn.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);
initEffect();
