import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchButton from './search-button/search-button';
import SearchInput from './search-input/search-input';

import { decodeUrl } from '../../utils/url-handler';

function getFromLocalStorage() {
  return localStorage.getItem('query') || ''; // default to an empty string if nothing is found
}

export default function SearchDefault() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState(getFromLocalStorage);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('query', searchValue);
    navigate(`/search/${decodeUrl(searchValue)}/`);
  };

  return (
    <form data-testid="search-default" className="flex" onSubmit={onSubmit}>
      <SearchInput searchValue={searchValue} handleInputChange={handleInputChange} />
      <SearchButton disabled={searchValue === ''} />
    </form>
  );
}
