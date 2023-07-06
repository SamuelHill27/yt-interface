import styles from "./ChannelList.module.css";
import { useState } from "react";

const ChannelList = () => {
  const [channels, setChannels] = useState([
    "MXR Plays",
    "Brett Cooper",
    "Eridium",
    "Aba and Preach",
  ]);

  return (
    <ul className={styles.list}>
      <li><button className={styles.button}>Watchlist</button></li>
      <li className={styles.divider}></li>
      {channels.map((channel) => {
        return (
          <li key={Math.random()} className={styles.list__item} draggable>
            <button className={styles.button}>{channel}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ChannelList;
