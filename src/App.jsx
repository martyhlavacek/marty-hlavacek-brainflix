import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Comments from "./components/Comments/Comments";
import Gallery from "./components/Gallery/Gallery";
import VideoData from "./data/video-details.json";
import { useState } from "react";

function App() {
  const [activeVideo, setActiveVideo] = useState(VideoData[0]);

  const nonActiveVideos = VideoData.filter((video) => {
    return video.id !== activeVideo.id;
  });

  const changeActiveVideo = (video) => {
    if (!video) {
      setActiveVideo(VideoData[0]);
      return;
    }
    setActiveVideo(video);
  };

  return (
    <>
      {/* setState variable for the .json data file will need to be defined here */}
      <Header activeVideo={activeVideo} />
      <Video activeVideo={activeVideo} />
      <section className="app__wrapper">
        <Comments activeVideo={activeVideo} />
        <Gallery
          nonActiveVideos={nonActiveVideos}
          changeActiveVideo={changeActiveVideo}
        />
      </section>
      {/* We'll need to broadcast the .json array values as a prop to the children component(s) use Nav's Nov.22 LAB to see the functionality */}
    </>
  );
}

export default App;
