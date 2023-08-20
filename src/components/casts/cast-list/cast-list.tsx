import { CastMember } from '@/assets/src/types/cast.types';
import CastItem from '../cast-item/cast-item';

import './cast-list.css';

const CastList = ({ data }: { data: CastMember[] }) => (
  <div className="cast-list">
    <div className="cast-list-title">Cast</div>
    <div className="cast-list-grid">
      {data.map((cast: CastMember) => {
        const personName = cast.person.name;
        const characterName = cast.character.name;
        const image = cast.person.image?.medium;
        return <CastItem key={cast.character.id} personName={personName} characterName={characterName} image={image} />;
      })}
    </div>
  </div>
);

export default CastList;
