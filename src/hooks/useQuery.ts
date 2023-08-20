import { useLocation } from 'react-router-dom';
import { encodeUrl } from '../utils/url-handler';

export default function useQuery() {
  const location = useLocation();
  const newPath = location.pathname.split('/')[2];
  return encodeUrl(newPath);
}
