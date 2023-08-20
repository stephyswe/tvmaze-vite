import styles from './search-input.module.css';

type SearchInputProps = {
  searchValue: string;
  handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ searchValue, handleInputChange }: SearchInputProps) => (
  <input
    id="q"
    type="search"
    name="q"
    aria-label="Search for TV shows"
    placeholder="Search for TV shows"
    className={styles.searchInput}
    value={searchValue}
    onChange={handleInputChange}
  />
);

export default SearchInput;
