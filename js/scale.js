import { ScaleSet } from './constants';

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const previewElement = document.querySelector('.img-upload__preview img');

const { SCALE_STEP, MAX_SCALE, MIN_SCALE, DEFAULT_SCALE } = ScaleSet;

let currentScale = DEFAULT_SCALE.VALUE;

const scaleSmaller = () => {
  if (currentScale > MIN_SCALE.VALUE) {
    const smallerScale = currentScale - SCALE_STEP.VALUE;
    previewElement.style.transform = `scale(${smallerScale})`;
    currentScale = smallerScale;
  }
  scaleValueElement.value = `${currentScale * 100}%`;
};

const scaleBigger = () => {
  if (currentScale < MAX_SCALE.VALUE) {
    const biggerScale = currentScale + SCALE_STEP.VALUE;
    previewElement.style.transform = `scale(${biggerScale})`;
    currentScale = biggerScale;
  }
  scaleValueElement.value = `${currentScale * 100}%`;
};

const onScaleSmallerClick = () => {
  scaleSmaller();
};

const onScaleBiggerClick = () => {
  scaleBigger();
};

const resetToDefault = () => {
  previewElement.style.transform = `scale(${DEFAULT_SCALE.VALUE})`;
  currentScale = DEFAULT_SCALE.VALUE;
};

scaleSmallerButton.addEventListener('click', onScaleSmallerClick);

scaleBiggerButton.addEventListener('click', onScaleBiggerClick);

export {resetToDefault};
