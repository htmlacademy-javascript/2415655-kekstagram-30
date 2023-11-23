export const Effect = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

export const effectToFilter = {
  [Effect.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [Effect.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [Effect.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [Effect.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [Effect.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};

export const effectToSliderOptions = {
  [Effect.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effect.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effect.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [Effect.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};

export const MAX_RANDOM_FILTER = 10;

export const FilterEnum = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed',
};

export const COMMENT_SHOW = 5;

export const ScaleSet = {
  SCALE_STEP: {
    PERCENTS: 25,
    VALUE: 0.25,
  },
  MAX_SCALE: {
    PERCENTS: 100,
    VALUE: 1,
  },
  MIN_SCALE: {
    PERCENTS: 25,
    VALUE: 0.25,
  },
  DEFAULT_SCALE: {
    PERCENTS: 100,
    VALUE: 1,
  },
};

export const REMOVE_MESSAGE_TIMEOUT = 5000;

export const MAX_TAG = 5;
export const VALID = /^#[a-za-яё0-9]{1,19}$/i;


export const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_TAG} хэштэгов`,
  NOT_UNIQ: 'Хэштэги должны быть уникальными',
  INVALID_PATTERN: 'Неверный хэштэг',
};
