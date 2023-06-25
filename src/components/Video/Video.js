import styles from "./Video.module.css";

const Video = (props) => {
  return (
    <>
      <h4 className={styles.video}>{props.video.title}</h4>
    </>
  );
};

export default Video;
