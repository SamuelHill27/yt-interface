import styles from "./VideoList.module.css";
import Video from "./Video";
import { useEffect, useState } from "react";

const VideoList = ({ searchTerm }) => {
  const [videos, setVideos] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);

  useEffect(() => {
    if (searchTerm !== "") {
      fetchVideosHandler();
    }
  }, [searchTerm]);

  function fetchVideosHandler() {
    const key = "AIzaSyCuhzJLtR8G_z9oLypIrl_LC9Da-pRONto";
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${searchTerm}&type=video&key=${key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setVideos(data.items);
      });
  }

  let videoComponent;
  if (Object.keys(videos[0]).length !== 0) {
    videoComponent = videos.map((video) => (
      <Video key={Math.random()} video={video} /> // mapping video data to video component
    ));
  } else {
    videoComponent = <h3>Empty Video List</h3>;
  }

  return <section className={styles.videoList}>{videoComponent}</section>;
};

export default VideoList;
