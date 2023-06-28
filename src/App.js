import { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/Search/SearchBar";
import VideoList from "./components/Video/VideoList";

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

      <div className={styles.container}>
        <main className={styles.app}>
          <SearchBar onSearch={onSearchHandler} />
          <VideoList searchTerm={searchTerm} />
        </main>
      </div>
    </>
  );
}

export default App;
