import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/icons8-search.svg";
import { useRef } from "react";

const SearchBar = (props) => {
  const searchTerm = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm.current.value);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.search}>
      <input
        type="search"
        placeholder="Youtube Search..."
        className={styles.searchBar}
        ref={searchTerm}
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
