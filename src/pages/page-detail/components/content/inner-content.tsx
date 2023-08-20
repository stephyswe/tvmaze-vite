import RatingImage from '../../../../components/rating';

const Genre = ({ genre, showDivider }: { genre: string; showDivider: boolean }) => (
  <span>
    {showDivider && ' | '}
    {genre}
  </span>
);

type InnerContentProps = {
  title: string;
  genres: string[];
};

const InnerContent = ({ title, genres }: InnerContentProps) => (
  <div className="flex flex-col gap-2 items-start">
    <div className="text-4xl font-['Helvetica'] font-bold text-white mb-px ml-px">{title}</div>
    <RatingImage />
    <div className="font-['Helvetica'] font-bold leading-[25px] text-white ml-px">
      Genres:{' '}
      <div className="text-[#d5d5d5] contents" id="GenresComedyRom">
        {genres.map((genre: string, index: number) => (
          <Genre key={genre} genre={genre} showDivider={index !== 0} />
        ))}
      </div>
    </div>
  </div>
);

export default InnerContent;
