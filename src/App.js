import { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/Search/SearchBar";
import VideoList from "./components/Video/VideoList";
import ChannelShortcuts from "./components/ChannelShortcuts/ChannelShortcuts";

function App() {
  const [searchData, setsearchData] = useState("");

  const onSearchHandler = (term) => {
    setsearchData(term);
  };

  const onClickHandler = (term) => {
    setsearchData(term)
  }

  return (
    <>
      {/* empty divs for styling purposes only */}
      <div className={`${styles.bgImage} ${styles.bgFixedPos}`}></div>
      <div className={`${styles.bgVignette} ${styles.bgFixedPos}`}></div>

      <div className={`${styles.container} ${styles.bgFixedPos}`}>
        <main className={styles.app}>
          <section className={styles.left}>
            <ChannelShortcuts onClick={onClickHandler} />
          </section>
          <section className={styles.center}>
            <SearchBar onSearch={onSearchHandler} />
            <VideoList searchData={searchData} />
          </section>
          <textarea className={styles.textarea} placeholder="Take notes..." />
        </main>
      </div>
    </>
  );
}

export default App;
