import styles from "./SideList.module.css";
import List from "./List/List";
import Card from "./UI/Card";

const SideList = ({ onSelect, newChannelShortcut }) => {
  const selectHandler = (channel) => {
    onSelect(channel);
  };

  return (
    <>
      <div className={styles.watchlist}>
        <Card>
          <button>Watchlist</button>
        </Card>
      </div>
      <div className={styles.dividerContainer}>
        <div className={styles.divider}></div>
      </div>
      <List onSelect={selectHandler} newItem={newChannelShortcut} />
    </>
  );
};

export default SideList;
