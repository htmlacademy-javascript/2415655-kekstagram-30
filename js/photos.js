
const templateFragment = document.querySelector('#picture').content.querySelector('a');


const picturesContainer = document.querySelector('.pictures');

const fragment = document.createDocumentFragment();

const renderPhotos = (photoArray) => {
  photoArray.forEach(({url, desc, likes, comments}) => {
    const element = templateFragment.cloneNode(true);
    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture__img').alt = desc;
    element.querySelector('.picture__likes').textContent = likes;
    element.querySelector('.picture__comments').textContent = comments.length;


    fragment.appendChild(element);
  });

  picturesContainer.appendChild(fragment);
};

export {renderPhotos};

