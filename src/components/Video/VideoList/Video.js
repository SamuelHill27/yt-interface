import styles from "./Video.module.css";
import Modal from "./Modal";
import { useState } from "react";

const Video = ({ video, onChannelSelect }) => {
  const date = new Date(video.releaseDate).toLocaleDateString("en-GB");
  const link = `https://www.youtube.com/embed/${video.videoId}`;

  const [openModel, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const channelSelectHandler = () => {
    onChannelSelect({
      value: video.channelTitle,
      id: video.channelId,
    });
  };

  return (
    <div className={styles.video}>
      <div className={styles.video__thumbnail}>
        <button
          className={styles.video__thumbnail_button}
          onClick={openModalHandler}
        >
          <img
            className={styles.video__thumbnail_image}
            src={video.thumbnail.url}
            alt={video.videoTitle}
          ></img>
        </button>
      </div>

      <div className={styles.video__context}>
        <div className={styles.video__title}>{video.videoTitle}</div>
        <button onClick={channelSelectHandler}>{video.channelTitle}</button>
        <div className={styles.video__details}>{`${video.viewCount} | ${date}`}</div>
      </div>

      {openModel && (
        <Modal
          onClick={() => {
            setOpenModal(false);
          }}
          videoLink={link}
        />
      )}
    </div>
  );
};

export default Video;
