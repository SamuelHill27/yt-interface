import styles from "./VideoList.module.css";
import Video from "./Video";
import { useEffect, useState } from "react";

const VideoList = ({ searchTerm }) => {
  const [videos, setVideos] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);
  const [emptyListMsg, setEmptyListMsg] = useState("Empty Video List");

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
        if (data.error.code === 403) {
          setEmptyListMsg("Error - quota exceeded");
          return;
        }

        const transformedVideos = data.items.map((video) => {
          return {
            id: video.id.videoId,
            title: video.snippet.title,
            thumbnail: video.snippet.thumbnails.default,
            channel: video.snippet.channelId,
          };
        });
        setVideos(transformedVideos);
      });
  }

  let videoComponent;
  if (Object.keys(videos[0]).length !== 0) {
    videoComponent = videos.map((video) => (
      <Video key={Math.random()} video={video} /> // mapping video data to video component
    ));
  } else {
    videoComponent = <h3>{emptyListMsg}</h3>;
  }

  return <section className={styles.videoList}>{videoComponent}</section>;
};

export default VideoList;
