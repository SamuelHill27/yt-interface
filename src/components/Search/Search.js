import styles from "./Search.module.css";
import SearchIcon from "../../assets/icons8-search.svg";
import { useRef } from "react";

const Search = (props) => {
  const searchRef = useRef();

  const sortOptions = ["Relevance", "Recent", "Popular", "etc..."];

  const submitHandler = (event) => {
    event.preventDefault();
    if (searchRef.current !== undefined) {
      props.onSearch(searchRef.current.value);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.search}>
      <input
        type="search"
        placeholder="Youtube Search..."
        className={styles.searchBar}
        ref={searchRef}
      />

      <select id={styles.sorts} name="sorts">
        {sortOptions.map((option) => <option value={option}>{option}</option>)}
      </select>

      <input
        type="image"
        src={SearchIcon}
        alt="search"
        className={styles.searchBtn}
      />
    </form>
  );
};

export default Search;
