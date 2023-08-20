import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landing/landing';
import SearchPage from './pages/page-search/page-search';
import Navbar from './layouts/navbar/navbar';
import DetailPage from './pages/page-detail/detail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Navbar />}>
          <Route path="/search/*" element={<SearchPage />} />
          <Route path="/show/:showName" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
