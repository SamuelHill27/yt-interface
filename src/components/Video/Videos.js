import styles from "./Videos.module.css";
import { useEffect, useState } from "react";
import VideoList from "./VideoList/VideoList";

const Videos = ({ searchData, onChannelSelect }) => {
  const [videos, setVideos] = useState([]);
  const [emptyListMsg, setEmptyListMsg] = useState("Empty Video List");
  const maxFetchResults = 24;

  useEffect(() => {
    if (searchData && searchData.searchTerm !== "") {
      // soon to be hidden
      const key = "AIzaSyCuhzJLtR8G_z9oLypIrl_LC9Da-pRONto";

      let url = "error";
      if (searchData.channelId) {
        url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${searchData.channelId}&maxResults=${maxFetchResults}&order=${searchData.searchFilter}&q=${searchData.searchTerm}&type=video&key=${key}`;
      } else {
        url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxFetchResults}&order=${searchData.searchFilter}&q=${searchData.searchTerm}&type=video&key=${key}`;
      }

      const videoData = fetch(url)
        .then((response) => response.json())
        .then((data) => {
          return data.items.map((video) => {
            return video.id.videoId;
          });
        })
        .then(async (videoIds) => {
          url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIds}&key=${key}`;
          const response = await fetch(url);
          const data = await response.json();
          return data.items.map((video) => {
            return {
              videoId: video.id,
              videoTitle: video.snippet.title,
              thumbnail: video.snippet.thumbnails.medium,
              channelId: video.snippet.channelId,
              channelTitle: video.snippet.channelTitle,
              releaseDate: video.snippet.publishedAt,
              viewCount: video.statistics.viewCount,
              duration: video.contentDetails.duration,
            };
          });
        })
        .catch(err => {
          console.log(err);
          setEmptyListMsg("Error: unable to fetch videos.");
        });

      videoData.then((data) => {
        console.log(data);
        setVideos(data);
      });
    }
  }, [searchData]);

  const channelSelectHandler = (channelData) => {
    onChannelSelect(channelData);
  };

  return (
    <>
      {videos.length !== 0 ? (
        <VideoList videos={videos} onChannelSelect={channelSelectHandler} />
      ) : (
        <div className={styles.emptyListMsg}>
          <h3>{emptyListMsg}</h3>
        </div>
      )}
    </>
  );
};

export default Videos;
