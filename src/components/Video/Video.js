import styles from "./Video.module.css";

const Video = (props) => {
  const video = props.video;

  const date = new Date(video.releaseDate).toLocaleDateString("en-GB");

  return (
    <div className={styles.video}>
      <div className={styles.video__thumbnail}>
        <a href={`https://www.youtube.com/embed/${video.videoId}`}>
          <img
            className={styles.video__thumbnail_image}
            src={video.thumbnail.url}
            alt={video.videoTitle}
          ></img>
        </a>
      </div>
      <div className={styles.video__details}>
        <div className={styles.video__title}>{video.videoTitle}</div>
        <div
          className={styles.video__other_details}
        >{`${video.channelTitle} | ${date}`}</div>
      </div>
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
