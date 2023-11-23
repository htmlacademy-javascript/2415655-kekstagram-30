const form = document.querySelector('.img-upload__form');
const hashtagField = form.querySelector('.text__hashtags');
// const commentField = form.querySelector('.text__description');

const MAX_TAG = 5;
const VALID = /^#[a-za-яё0-9]{1,19}$/i;


const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_TAG} хэштэгов`,
  NOT_UNIQ: 'Хэштэги должны быть уникальными',
  INVALID_PATTERN: 'Неверный хэштэг',
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const normalizeTags = (tagString) => tagString.replace(/ */, ' ').trim().split(' ').filter((tag) => Boolean(tag.length));


const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID.test(tag));
const hasValidCount = (value) => normalizeTags(value).length <= MAX_TAG;

const hasUniqTag = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
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

const isValid = () => pristine.validate();

const resetValidation = () => {
  pristine.reset();
};

export { isValid, resetValidation };
