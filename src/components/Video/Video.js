import styles from "./Video.module.css";

const Video = (props) => {
  const title = props.video.snippet.title;
  const thumbnail = props.video.snippet.thumbnails.default;
  const url = props.video.id.videoId;

  return (
    <a href={`https://www.youtube.com/embed/${url}`}>
      <img src={thumbnail.url} alt={title} width={thumbnail.url.width} height={thumbnail.height} ></img>
      <h4 className={styles.video}>{title}</h4>
      <p className={styles.video}>{props.video.snippet.channelTitle}</p>
    </a>

    // <iframe 
    //   allow="fullscreen"
    //   width="100%"
    //   height="100%"
    //   src={`https://www.youtube.com/embed/${url}`}
    // ></iframe>
  );
};

export default Video;
