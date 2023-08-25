import RatingImage from '../../rating';
import { TVShow } from '../../../types/show.types';

import './image-item.css';

type ImageItemProps = {
  data: TVShow;
  onClickShow: (name: string) => void;
};

const defaultImage = 'https://via.placeholder.com/160x225';

const ImageItem = ({ data, onClickShow }: ImageItemProps) => {
  const {
    show: { name, image },
  } = data;

  const imageUrl = image?.medium || defaultImage;

  return (
    <div aria-hidden="true" onClick={() => onClickShow(name)} className="column column-block image-item">
      <div className="image-item__picture">
        <figure>
          <img alt={name} src={imageUrl} />
        </figure>
        <div className="image-item__title">{name}</div>
        <RatingImage />
      </div>
    </div>
  );
};

export default ImageItem;
