import useSWR from 'swr';
import { useParams } from 'react-router-dom';

import { fetcher, getCastByShowIdSWR, searchShowsSWR } from '../../api';
import BackToSearchResults from './components/back-to-search-results/back-to-search-results';
import DetailContent from './components/content/detail-content/detail-content';
import { encodeUrl } from '../../utils/url-handler';

export default function DetailPage() {
  const { showName } = useParams();
  const decodedShowName = encodeUrl(showName as string);

  const { data: allShows, error: showError } = useSWR(() => searchShowsSWR(decodedShowName), fetcher);
  const showId = allShows?.[0]?.show?.id;

  const { data: casts, error: castError } = useSWR(() => (showId ? getCastByShowIdSWR(showId) : null), fetcher);

  // Combine errors and loading checks
  if (showError || castError) return <div>error</div>;
  if (!allShows || !casts) return <div>loading</div>;

  return (
    <>
      <BackToSearchResults />
      <DetailContent singleShow={allShows[0].show} casts={casts} />
    </>
  );
}
