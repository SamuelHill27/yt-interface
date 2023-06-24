import styles from "./VideoList.module.css";
import Video from "./Video";
import { useEffect, useState } from "react";

const VideoList = ({ searchTerm }) => {
  const [videos, setVideos] = useState([{},{},{},{},{},{},{},{},{}]);

  useEffect(() => {
    if (searchTerm !== "") {
      fetchVideosHandler();
    }
  }, [searchTerm]);

  function fetchVideosHandler() {
    const key = "AIzaSyCuhzJLtR8G_z9oLypIrl_LC9Da-pRONto";
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${searchTerm}&key=${key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVideos(data.items);
      });
  }

  return (
    <section className={styles.videoList}>
      {videos.map((video) => {
        console.log(video);
        <Video video={video.snippet} />;
      })}
    </section>
  );
};

export default VideoList;
