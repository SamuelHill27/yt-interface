import { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/Search/SearchBar";
import Videos from "./components/Video/Videos";
import SideList from "./components/SideList/SideList";

function App() {
  const [searchData, setSearchData] = useState();
  const [newChannelShortcut, setNewChannelShortcut] = useState();

  const searchHandler = (term) => {
    setSearchData({
      searchTerm: term,
      searchFilter: "relevance",
      channelId: null,
    });
  };

  const shortcutSelectHandler = (shortcut) => {
    setSearchData({
      searchTerm: shortcut.value,
      searchFilter: "date",
      channelId: shortcut.id,
    });
  };

  const channelSelectHandler = (channel) => {
    setNewChannelShortcut(channel);
  };

  return (
    <>
      {/* empty divs for styling purposes only */}
      <div className={`${styles.bgImage} ${styles.bgFixedPos}`}></div>
      <div className={`${styles.bgVignette} ${styles.bgFixedPos}`}></div>

      <div className={`${styles.container} ${styles.bgFixedPos}`}>
        <main className={styles.app}>
          <section className={styles.left}>
            <SideList
              onSelect={shortcutSelectHandler}
              newChannelShortcut={newChannelShortcut}
            />
          </section>
          <section className={styles.center}>
            <SearchBar onSearch={searchHandler} />
            <Videos
              searchData={searchData}
              onChannelSelect={channelSelectHandler}
            />
          </section>
          <textarea className={styles.textarea} placeholder="Take notes..." />
        </main>
      </div>
    </>
  );
}

export default App;
