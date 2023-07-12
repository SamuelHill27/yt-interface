import styles from "./Video.module.css";
import Modal from "./Modal";
import { useState } from "react";
import moment from "moment/moment";

const Video = ({ video, onChannelSelect }) => {
  const link = `https://www.youtube.com/embed/${video.videoId}`;

  const [openModel, setOpenModal] = useState(false);

  const convertViews = (views) => {
    let roundedViews = "0";
    if (views >= 10000000) {
      roundedViews = (views / 1000000).toFixed(0) + "M";
    } else if (views >= 1000000) {
      roundedViews = (views / 1000000).toFixed(1) + "M";
    } else if (views >= 10000) {
      roundedViews = (views / 1000).toFixed(0) + "K";
    } else if (views >= 1000) {
      roundedViews = (views / 1000).toFixed(1) + "K";
    } else {
      roundedViews = views;
    }
    return roundedViews;
  };

  const convertDate = (releaseDate) => {
    return moment(new Date(releaseDate)).fromNow();
  };

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
        <div className={styles.video__details}>{`${convertViews(
          video.viewCount
        )} | ${convertDate(video.releaseDate)}`}</div>
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
