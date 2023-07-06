import styles from "./VideoList.module.css";
import Video from "./Video";
import PageChanger from "./PageChanger";
import { useEffect, useState } from "react";

const VideoList = ({ searchData }) => {
  const [videos, setVideos] = useState([]);
  // tracks through videos list to allow for displaying of only max 12 videos at a time
  const [videosIndex, setVideosIndex] = useState(0);
  const [emptyListMsg, setEmptyListMsg] = useState("Empty Video List");

  const maxFetchResults = 24;
  const resultsPerPage = 12;

  // search for videos if a search term exists
  useEffect(() => {
    if (searchData.searchTerm !== "") {
      fetchVideosHandler();
    }
  }, [searchData]);

  async function fetchVideosHandler() {
    try {
      const key = "AIzaSyCuhzJLtR8G_z9oLypIrl_LC9Da-pRONto";

      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxFetchResults}&q=${searchData.searchTerm}&type=video&key=${key}`
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

  const nextPageHandler = () => {
    if (videosIndex !== resultsPerPage) {
      setVideosIndex(videosIndex + resultsPerPage);
    }
  };

  const prevPageHandler = () => {
    if (videosIndex !== 0) {
      setVideosIndex(videosIndex - resultsPerPage);
    }
  };

  // output videolist if possible otherwise output message
  let videoList;
  if (videos.length !== 0) {
    videoList = (
      <div className={styles.videoList}>
        {videos
          .slice(videosIndex, videosIndex + resultsPerPage)
          .map((video) => (
            <Video key={Math.random()} video={video} /> // mapping video data to video component
          ))}
      </div>
    );
  } else {
    videoList = (
      <div className={styles.emptyListMsg}>
        <h3>{emptyListMsg}</h3>
      </div>
    );
  }

  return (
    <>
      {videoList}
      {videos.length !== 0 && (
        <PageChanger
          pageNo={videosIndex + resultsPerPage}
          maxPageNo={maxFetchResults}
          onNextPage={nextPageHandler}
          onPrevPage={prevPageHandler}
        />
      )}
    </>
  );
};

export default VideoList;
