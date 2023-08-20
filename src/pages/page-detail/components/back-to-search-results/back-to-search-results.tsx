import './back-to-search-results.css';

const BackToSearchResults = () => {
  const onClick = () => window.history.back();

  return (
    <div aria-hidden="true" onClick={onClick} className="back-container">
      <img alt="back-to-search-results" src="https://file.rendit.io/n/LveI4rZscl2ML1t4zxRG.svg" />
      <div className="back-text">Back to search results</div>
    </div>
  );
};

export default BackToSearchResults;
