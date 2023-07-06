import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/icons8-search.svg";
import { useRef } from "react";

const SearchBar = (props) => {
  const searchRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (searchRef.current !== undefined) {
      props.onSearch(searchRef.current.value);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.search}>
      <input
        type="search"
        placeholder="Youtube Search..."
        className={styles.searchBar}
        ref={searchRef}
      />
      <input
        type="image"
        src={SearchIcon}
        alt="search"
        className={styles.searchBtn}
      />
    </form>
  );
};

export default SearchBar;
