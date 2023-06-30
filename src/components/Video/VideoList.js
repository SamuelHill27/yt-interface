import styles from "./VideoList.module.css";
import Video from "./Video";
import { useEffect, useState } from "react";

const VideoList = ({ searchTerm }) => {
  const [videos, setVideos] = useState([]);
  const [emptyListMsg, setEmptyListMsg] = useState("Empty Video List");

  useEffect(() => {
    if (searchTerm !== "") {
      fetchVideosHandler();
    }
  }, [searchTerm]);

  async function fetchVideosHandler() {
    const key = "AIzaSyCuhzJLtR8G_z9oLypIrl_LC9Da-pRONto";
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${searchTerm}&type=video&key=${key}`
    );
    const data = await response.json();

    // data error handling
    // if (data.error.code === 403) {
    //   setEmptyListMsg("Error - quota exceeded");
    //   return;
    // }

    // add useful data to new objects
    const transformedVideos = data.items.map((video) => {
      return {
        videoId: video.id.videoId,
        videoTitle: video.snippet.title,
        thumbnail: video.snippet.thumbnails.default,
        channelId: video.snippet.channelId,
        channelTitle: video.snippet.channelTitle
      };
    });

    console.log(data);
    setVideos(transformedVideos);
  }

  let videoComponent;
  if (videos.length !== 0) {
    videoComponent = videos.map((video) => (
      <Video key={Math.random()} video={video} /> // mapping video data to video component
    ));
  } else {
    videoComponent = <h3>{emptyListMsg}</h3>;
  }

  // let videoComponent = <h3>{emptyListMsg}</h3>;

  // useEffect(() => {
  //   if (videos.length !== 0) {
  //     videoComponent = videos.map((video) => (
  //       <Video key={Math.random()} video={video} /> // mapping video data to video component
  //     ));
  //   }
  // }, [videos]);

  return <section className={styles.videoList}>{videoComponent}</section>;
};

export default VideoList;
