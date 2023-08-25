import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import { fetcher, searchShowsSWR } from '../../api';
import SearchItemSkeletons from '../../components/skeleton/skeleton';
import ErrorState from '../../components/errors/error-state';
import useQuery from '../../hooks/useQuery';

import ImageGrid from '../../components/image-grid/image-grid';
import { decodeUrl } from '../../utils/url-handler';

export default function SearchPage() {
  const navigate = useNavigate();
  const q = useQuery();
  const { data, error } = useSWR(searchShowsSWR(q), fetcher);
  const onClickShow = (name: string) => navigate(`/show/${decodeUrl(name)}`);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Timeout after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || data === undefined) return <SearchItemSkeletons />; // Loading state
  if (error) return <ErrorState error={error} />;
  if (data && data.length === 0) return <div>No results found</div>;

  // Data state
  return <ImageGrid data={data} onClickShow={onClickShow} />;
}
