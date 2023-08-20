import './cast-item.css';

type CastItemProps = {
  image: string;
  personName: string;
  characterName: string;
};

const CastItem = ({ image, personName, characterName }: CastItemProps) => (
  <div className="cast-item">
    <img alt="cast-item" src={image ?? 'https://via.placeholder.com/150'} />
    <div className="cast-item-details">
      <div className="cast-item-name">{personName}</div>
      <div className="cast-item-character">as {characterName}</div>
    </div>
  </div>
);

export default CastItem;
