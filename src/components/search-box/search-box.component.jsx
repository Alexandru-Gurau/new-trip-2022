import './search-box.styles.scss';

const SearchBox = ({ placeholder, onChangeHandler }) => (
  <input
    className='search-box'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
