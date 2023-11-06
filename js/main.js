import {MAX_PHOTO, getPhotosDesc} from './data.js';
import {renderPhotos} from './photos-error.js';
import './photos-error.js';

const photoArray = getPhotosDesc(MAX_PHOTO);
renderPhotos(photoArray);


