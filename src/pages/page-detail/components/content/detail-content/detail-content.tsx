import { CastMember } from '@/assets/src/types/cast.types';
import { TVShow } from '@/assets/src/types/show.types';

import DetailImage from '../detail-image/detail-image';
import Description from '../detail-description/description';
import CastList from '../../../../../components/casts/cast-list/cast-list';
import InnerContent from '../inner-content';

import './detail-content.css';

type DetailContentProps = {
  singleShow: TVShow['show'];
  casts: CastMember[];
};

const DetailContent = ({ singleShow, casts }: DetailContentProps) => {
  const { summary, name: title, genres, image } = singleShow;

  return (
    <>
      <div className="flex flex-row items-start self-stretch md:gap-16 md:ml-8 md:mr-10">
        <DetailImage name={title} image={image} />
        <div className="flex flex-col mt-4 gap-10 w-[620px] items-start order-1 xl:order-2 mr-4 md:mr-0">
          <div className="flex flex-col items-start self-stretch gap-5 ml-px">
            <InnerContent title={title} genres={genres} />
            <Description summary={summary || ''} />
          </div>
          <div className="hidden md:block">
            <CastList data={casts} />
          </div>
        </div>
      </div>
      <div className="mt-10 md:hidden">
        <CastList data={casts} />
      </div>
    </>
  );
};

export default DetailContent;
