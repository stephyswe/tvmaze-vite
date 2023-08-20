import Logo from '../../components/logo/logo';
import SearchDefault from '../../components/search/search';

import './landing.css';

export default function LandingPage() {
  return (
    <div data-testid="landing-page" className="landing-container">
      <Logo />
      <div className="landing-search">
        <SearchDefault />
      </div>
    </div>
  );
}
