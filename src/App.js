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
    <div className={styles.wrapper}>
      <main className={styles.app}>
        <SearchBar onSearch={onSearchHandler} />
        <VideoList searchTerm={searchTerm} />
      </main>
    </div>
  );
}

export default App;
