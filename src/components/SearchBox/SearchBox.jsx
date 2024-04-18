import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchBox}>
      <p className={css.searchTitle}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={(e) => {console.log('e.target.value: ', e.target.value);
          onFilter(e.target.value)}}
          
      />
    </div>
  );
};

export default SearchBox;
