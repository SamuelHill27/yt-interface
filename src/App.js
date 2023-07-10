import { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/Search/SearchBar";
import Videos from "./components/Video/Videos";
import SideList from "./components/SideList/SideList";
import ListVideoList from "./context/list-videolist";

function App() {
  const [searchData, setSearchData] = useState();

  const searchHandler = (term) => {
    setSearchData({ searchTerm: term, searchFilter: "relevance" });
  };

  const shortcutSelectHandler = (term) => {
    // console.log(term);
    // setSearchData({searchTerm: term, searchFilter: "date"})
  };

  return (
    <ListVideoList.Provider
      value={{
        newItem: false,
      }}
    >
      {/* empty divs for styling purposes only */}
      <div className={`${styles.bgImage} ${styles.bgFixedPos}`}></div>
      <div className={`${styles.bgVignette} ${styles.bgFixedPos}`}></div>

      <div className={`${styles.container} ${styles.bgFixedPos}`}>
        <main className={styles.app}>
          <section className={styles.left}>
            <SideList onSelect={shortcutSelectHandler} />
          </section>
          <section className={styles.center}>
            <SearchBar onSearch={searchHandler} />
            <Videos searchData={searchData} />
          </section>
          <textarea className={styles.textarea} placeholder="Take notes..." />
        </main>
      </div>
    </ListVideoList.Provider>
  );
}

export default App;
