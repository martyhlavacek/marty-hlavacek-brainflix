import "./Home.scss";
import Video from "../../../components/Video/Video.jsx";
import Comments from "../../../components/Comments/Comments.jsx";
import Gallery from "../../../components/Gallery/Gallery.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const { videoId } = useParams();
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState();
  const nonActiveVideos = videos.filter(
    (video) => video.id !== activeVideo?.id
  );

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://project-2-api.herokuapp.com/videos?api_key=%225d0f98d8-23d6-4ec7-a536-72579a5dc3ff%22"
        );
        setVideos(response.data);
        if (!videoId && response.data.length > 0) {
          const firstVideoId = response.data[0].id;
          const videoDetailsResponse = await axios.get(
            `https://project-2-api.herokuapp.com/videos/${firstVideoId}?api_key=%225d0f98d8-23d6-4ec7-a536-72579a5dc3ff%22`
          );
          setActiveVideo(videoDetailsResponse.data);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const fetchVideo = async () => {
      if (videoId) {
        try {
          const response = await axios.get(
            `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=%225d0f98d8-23d6-4ec7-a536-72579a5dc3ff%22`
          );
          setActiveVideo(response.data);
        } catch (error) {
          console.error("Error fetching video details:", error);
        }
      }
    };

    fetchVideo();
  }, [videoId]);

  return (
    <div>
      <Video activeVideo={activeVideo} />
      <section className="app__wrapper">
        <Comments activeVideo={activeVideo} />
        <Gallery nonActiveVideos={nonActiveVideos} />
      </section>
    </div>
  );
}
export default Home;
