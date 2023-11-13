//import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import {loadPictures} from './api.js';
import {showErrorMessage} from './util.js';
import './form.js';

//renderGallery(getPictures());

async function bootstrap() {
  try {
    const pictures = await loadPictures();
    renderGallery(pictures);

  } catch(error) {
    showErrorMessage();
  }
}
bootstrap();
