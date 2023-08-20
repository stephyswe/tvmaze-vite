import { FC } from 'react';

import styles from './search-button.module.css';

type SearchButtonProps = {
  variant?: 'default' | 'alternative';
  disabled?: boolean;
};

const SearchButton: FC<SearchButtonProps> = ({ variant = 'default', disabled }) => {
  let buttonClass;
  let textClass;

  if (variant === 'default') {
    buttonClass = styles.buttonDefault;
    textClass = styles.textDefault;
  } else if (variant === 'alternative') {
    buttonClass = styles.buttonAlternative;
    textClass = styles.textAlternative;
  } else {
    return null;
  }

  return (
    <button type="submit" className={buttonClass} disabled={disabled}>
      <span className={textClass}>Search</span>
    </button>
  );
};

export default SearchButton;
