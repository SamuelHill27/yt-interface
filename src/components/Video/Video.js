import styles from "./Video.module.css";

const Video = (props) => {
  const video = props.video;

  return (
    <div className={styles.video}>
      <a href={`https://www.youtube.com/embed/${video.videoId}`}>
        <img
          className={styles.video__thumbnail}
          src={video.thumbnail.url}
          alt={video.videoTitle}
        ></img>
      </a>
      <div className={styles.video__title}>{video.videoTitle}</div>
      <div className={styles.video__channel}>{video.channelTitle}</div>
    </div>

    // <iframe
    //   allow="fullscreen"
    //   width="100%"
    //   height="100%"
    //   src={`https://www.youtube.com/embed/${video.videoId}`}
    // ></iframe>
  );
};

export default Video;
