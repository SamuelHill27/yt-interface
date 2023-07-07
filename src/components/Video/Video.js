import styles from "./Video.module.css";
import Modal from "./Modal";
import { useState } from "react";

const Video = ({ video }) => {
  const date = new Date(video.releaseDate).toLocaleDateString("en-GB");
  const link = `https://www.youtube.com/embed/${video.videoId}`;

  const [openModel, setOpenModal] = useState(false);

  const onClickHandler = () => {
    setOpenModal(true);
  };

  return (
    <div className={styles.video}>
      <div className={styles.video__thumbnail}>
        <button className={styles.video__thumbnail_button} onClick={onClickHandler}>
          <img
            className={styles.video__thumbnail_image}
            src={video.thumbnail.url}
            alt={video.videoTitle}
          ></img>
        </button>
      </div>

      <div className={styles.video__details}>
        <div className={styles.video__title}>{video.videoTitle}</div>
        <div
          className={styles.video__other_details}
        >{`${video.channelTitle} | ${date}`}</div>
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
