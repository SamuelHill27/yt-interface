import { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/Search/SearchBar";
import Videos from "./components/Video/Videos";
import SideList from "./components/SideList/SideList";

function App() {
  const [searchData, setSearchData] = useState();

  const onSearchHandler = (term) => {
    setSearchData({searchTerm: term, searchFilter: "relevance"})
  };

  const onSelectHandler = (term) => {
    console.log(term);
    setSearchData({searchTerm: term, searchFilter: "date"})
  }

  return (
    <>
      {/* empty divs for styling purposes only */}
      <div className={`${styles.bgImage} ${styles.bgFixedPos}`}></div>
      <div className={`${styles.bgVignette} ${styles.bgFixedPos}`}></div>

      <div className={`${styles.container} ${styles.bgFixedPos}`}>
        <main className={styles.app}>
          <section className={styles.left}>
            <SideList onSelect={onSelectHandler} />
          </section>
          <section className={styles.center}>
            <SearchBar onSearch={onSearchHandler} />
            <Videos searchData={searchData} />
          </section>
          <textarea className={styles.textarea} placeholder="Take notes..." />
        </main>
      </div>
    </>
  );
}

export default App;
