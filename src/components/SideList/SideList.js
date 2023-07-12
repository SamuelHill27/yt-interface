import styles from "./SideList.module.css";
import List from "./List/List";
import Card from "./UI/Card";

const SideList = ({ onSelect, newChannelShortcut }) => {
  const selectHandler = (channel) => {
    onSelect(channel);
  };

  // const tempChannelShortcuts = [
  //   {
  //     id: Math.random(),
  //     value: "MxR Plays",
  //   },
  //   {
  //     id: Math.random(),
  //     value: "Aba and Preach",
  //   },
  // ];
  // localStorage.setItem("items", JSON.stringify(tempChannelShortcuts));

  return (
    <>
      <div className={styles.watchlist}>
        <Card>
          <button>Watchlist</button>
        </Card>
      </div>
      <div className={styles.divider}></div>
      <List onSelect={selectHandler} newItem={newChannelShortcut} />
    </>
  );
};

export default SideList;
