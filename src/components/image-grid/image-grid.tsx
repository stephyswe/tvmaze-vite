import React from 'react';

import ImageList from './image-list/image-list';
import ImageItem from './image-item/image-item';

import { TVShow } from '../../types/show.types';

type ImageGridProps = {
  data: TVShow[];
  onClickShow: (name: string) => void;
};

const ImageGrid: React.FC<ImageGridProps> = ({ data, onClickShow }) => (
  <ImageList>
    {data.map((item: TVShow) => (
      <ImageItem data={item} key={item.show.id} aria-hidden="true" onClickShow={onClickShow} />
    ))}
  </ImageList>
);

export default ImageGrid;
