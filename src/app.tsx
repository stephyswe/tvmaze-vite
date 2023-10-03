import { Route, Routes } from 'react-router-dom';

import Navbar from './layouts/navbar/navbar';
import LandingPage from './pages/landing/landing';
import DetailPage from './pages/page-detail/detail';
import SearchPage from './pages/page-search/page-search';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<Navbar />}>
        <Route path="/search/*" element={<SearchPage />} />
        <Route path="/show/:showName" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}
