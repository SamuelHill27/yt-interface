import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Search from "./components/Search/Search";
import Videos from "./components/Video/Videos";
import SideList from "./components/SideList/SideList";

function App() {
  const [searchData, setSearchData] = useState();
  const [newChannelShortcut, setNewChannelShortcut] = useState();
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const notesInLocalStorage = localStorage.getItem("notes");
    if (notesInLocalStorage) {
      setNotes(notesInLocalStorage);
    }
  }, []);

  const saveNotesLocally = (event) => {
    localStorage.setItem("notes", event.target.value);
  };

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
            <Search onSearch={searchHandler} />
            <Videos
              searchData={searchData}
              onChannelSelect={channelSelectHandler}
            />
          </section>
          <textarea
            className={styles.textarea}
            placeholder="Take notes..."
            onChange={saveNotesLocally}
            defaultValue={notes}
          />
        </main>
      </div>
    </>
  );
}

export default App;
