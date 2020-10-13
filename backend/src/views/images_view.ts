import Image from '../models/Image';
import { baseURL } from '../config';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${baseURL}/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
