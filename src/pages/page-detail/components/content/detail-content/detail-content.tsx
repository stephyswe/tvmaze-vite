import { CastMember } from '@/assets/src/types/cast.types';
import { TVShow } from '@/assets/src/types/show.types';

import DetailImage from '../detail-image/detail-image';
import Description from '../detail-description/description';
import CastList from '../../../../../components/casts/cast-list/cast-list';
import InnerContent from '../inner-content';

type DetailContentProps = {
  singleShow: TVShow['show'];
  casts: CastMember[];
};

const DetailContent = ({ singleShow, casts }: DetailContentProps) => {
  const {
    summary,
    name: title,
    genres,
    image: { medium: image },
  } = singleShow;
  return (
    <>
      <div className="self-stretch flex flex-row md:gap-16 items-start md:ml-8 md:mr-10 order">
        <DetailImage name={title} image={image} />
        <div className="flex flex-col mt-4 gap-10 w-[620px] items-start order-1 xl:order-2 mr-4 md:mr-0">
          <div className="self-stretch flex flex-col ml-px gap-5 items-start">
            <InnerContent title={title} genres={genres} />
            <Description summary={summary || ''} />
          </div>
          <div className="hidden md:block">
            <CastList data={casts} />
          </div>
        </div>
      </div>
      <div className="md:hidden mt-10">
        <CastList data={casts} />
      </div>
    </>
  );
};

export default DetailContent;
