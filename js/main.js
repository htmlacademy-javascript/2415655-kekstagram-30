//import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import {loadPictures} from './api.js';
import {showErrorMessage} from './util.js';


import './form.js';
import {initFilter} from './filters.js';
//renderGallery(getPictures());

async function bootstrap() {
  try {
    const pictures = await loadPictures();
    renderGallery(pictures);
    initFilter(pictures);

  } catch(error) {
    showErrorMessage();
  }
}
bootstrap();
