import { CastMember } from '@/assets/src/types/cast.types';
import { TVShow } from '@/assets/src/types/show.types';

import DetailImage from '../detail-image/detail-image';
import Description from '../detail-description/description';
import CastList from '../../../../../components/casts/cast-list/cast-list';
import InnerContent from '../inner-content';

import './DetailContent.css';

type DetailContentProps = {
  singleShow: TVShow['show'];
  casts: CastMember[];
};

const DetailContent = ({ singleShow, casts }: DetailContentProps) => {
  const { summary, name: title, genres, image } = singleShow;
  return (
    <>
      <div className="detail-content--container">
        <DetailImage name={title} image={image} />
        <div className="detail-content--wrapper">
          <div className="detail-content--inner-wrapper">
            <InnerContent title={title} genres={genres} />
            <Description summary={summary || ''} />
          </div>
          <div className="detail-content--list-desktop">
            <CastList data={casts} />
          </div>
        </div>
      </div>
      <div className="detail-content--list-mobile">
        <CastList data={casts} />
      </div>
    </>
  );
};

export default DetailContent;
