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
    <div aria-hidden="true" onClick={() => onClickShow(name)} className="column column-block">
      <div className="cursor-pointer">
        <figure>
          <img alt={name} src={imageUrl} className="w-full" />
        </figure>
        <div className="mt-3">
          <div className="font-['Helvetica'] font-bold text-white mb-2">{name}</div>
          <RatingImage />
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
