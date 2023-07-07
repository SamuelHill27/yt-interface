import styles from "./Videos.module.css";
import { useEffect, useState } from "react";
import VideoList from "./VideoList";

const Videos = ({ searchData }) => {
  const [videos, setVideos] = useState([]);
  const [emptyListMsg, setEmptyListMsg] = useState("Empty Video List");
  const maxFetchResults = 24;

  useEffect(() => {
    if (searchData && searchData.searchTerm !== "") {
      fetchVideosHandler();
    }
  }, [searchData]);

  async function fetchVideosHandler() {
    try {
      // soon to be hidden
      const key = "AIzaSyCuhzJLtR8G_z9oLypIrl_LC9Da-pRONto";

      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxFetchResults}&order=${searchData.searchFilter}&q=${searchData.searchTerm}&type=video&key=${key}`
      );
      const data = await response.json();

      // deals with exceeded quota error primarily
      if (!response.ok) {
        throw new Error("response is not ok");
      }

      // add useful data to new objects
      const transformedVideos = data.items.map((video) => {
        return {
          videoId: video.id.videoId,
          videoTitle: video.snippet.title,
          thumbnail: video.snippet.thumbnails.medium,
          channelId: video.snippet.channelId,
          channelTitle: video.snippet.channelTitle,
          releaseDate: video.snippet.publishedAt,
        };
      });

      console.log(data);
      setVideos(transformedVideos);
    } catch (error) {
      if (error.message === "response is not ok") {
        setEmptyListMsg("Error - quota exceeded");
      } else {
        setEmptyListMsg("Error - unknown");
      }
    }
  }

  return (
    <>
      {videos.length !== 0 ? (
        <VideoList videos={videos} />
      ) : (
        <div className={styles.emptyListMsg}>
          <h3>{emptyListMsg}</h3>
        </div>
      )}
    </>
  );
};

export default Videos;
