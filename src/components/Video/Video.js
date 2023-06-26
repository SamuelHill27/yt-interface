import styles from "./Video.module.css";

const Video = (props) => {
  return (
    <a href={`https://www.youtube.com/embed/${props.id}`}>
      <img src={props.thumbnail.url} alt={props.title} width={props.thumbnail.width} height={props.thumbnail.height} ></img>
      <h4 className={styles.video}>{props.title}</h4>
      <p className={styles.video}>{props.channel}</p>
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
