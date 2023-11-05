import {MAX_PHOTO, getPhotosDesc} from './data.js';
import {renderPhotos} from './photos.js';

const photoArray = getPhotosDesc(MAX_PHOTO);
renderPhotos(photoArray);

console.log(photoArray)


console.log(
  getPhotosDesc()
);
