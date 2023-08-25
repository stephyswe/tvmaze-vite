type DetailImageProps = {
  name: string;
  image: {
    medium: string;
  };
};

const DetailImage = ({ name, image }: DetailImageProps) => (
  <div className="relative flex flex-col w-[150px] md:w-[230px] xl:w-[271px] shrink-0 items-start order-2 md:order-1">
    <div className="md:w-[270px] md:h-[380px]">
      <img
        alt={name}
        src={image?.medium ?? 'https://via.placeholder.com/220x310'}
        className="relative w-[220px] md:m-0"
      />
    </div>
  </div>
);

export default DetailImage;
