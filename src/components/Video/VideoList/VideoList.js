import styles from "./VideoList.module.css";
import Video from "./Video";
import PageChanger from "./PageChanger";
import { useState } from "react";

const VideoList = ({ videos, onSelectChannel }) => {
  const resultsPerPage = 12;

  // tracks through videos list to allow for displaying of only max 12 videos at a time
  const [videosIndex, setVideosIndex] = useState(0);
  const maxFetchResults = videos.length;

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

  const selectChannelHandler = (channelName) => {
    onSelectChannel(channelName);
  };

  return (
    <>
      <div className={styles.videoList}>
        {videos
          .slice(videosIndex, videosIndex + resultsPerPage)
          .map((video) => (
            <Video
              key={Math.random()}
              video={video}
              onSelectChannel={selectChannelHandler}
            /> // mapping video data to video component
          ))}
      </div>
      <PageChanger
        pageNo={videosIndex + resultsPerPage}
        maxPageNo={maxFetchResults}
        onNextPage={nextPageHandler}
        onPrevPage={prevPageHandler}
      />
    </>
  );
};

export default VideoList;
