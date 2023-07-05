import { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/Search/SearchBar";
import VideoList from "./components/Video/VideoList";
import ChannelList from "./components/ChannelList/ChannelList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchHandler = (prop) => {
    setSearchTerm(prop);
  };

  return (
    <>
      {/* empty divs for styling purposes only */}
      <div className={`${styles.bgImage} ${styles.bgFixedPos}`}></div>
      <div className={`${styles.bgVignette} ${styles.bgFixedPos}`}></div>

      <div className={`${styles.container} ${styles.bgFixedPos}`}>
        <main className={styles.app}>
          <ChannelList />
          <section className={styles.center}>
            <SearchBar onSearch={onSearchHandler} />
            <VideoList searchTerm={searchTerm} />
          </section>
          <textarea className={styles.textarea} placeholder="Take notes..."/>
        </main>
      </div>
    </>
  );
}

export default App;
