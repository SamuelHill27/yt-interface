import styles from "./Video.module.css";

const Video = (props) => {
  const video = props.video;

  return (
    <a className={styles.video} href={`https://www.youtube.com/embed/${video.videoId}`}>
      <img className={styles.video__thumbnail} src={video.thumbnail.url} alt={video.videoTitle}></img>
      <div className={styles.video__title}>{video.videoTitle}</div>
      <div className={styles.video__channel}>{video.channelTitle}</div>
    </a>

    // <iframe
    //   allow="fullscreen"
    //   width="100%"
    //   height="100%"
    //   src={`https://www.youtube.com/embed/${video.videoId}`}
    // ></iframe>
  );
};

export default Video;
