import "./Home.scss";
import Video from "../../../components/Video/Video.jsx";
import Comments from "../../../components/Comments/Comments.jsx";
import Gallery from "../../../components/Gallery/Gallery.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  // useParams is key to being able to interact with the React Router DOM, the videoId variable helps to define the URL path that gets fed to the Router located in the app.jsx

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
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const fetchVideo = async (id) => {
      try {
        const response = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${id}?api_key=%225d0f98d8-23d6-4ec7-a536-72579a5dc3ff%22`
        );
        setActiveVideo(response.data);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    if (videoId) {
      // this if statement checks if videoId is available from the useParems() as it is pulled from the URL as it represents the actual ID of the video
      fetchVideo(videoId); // when the videoId is present, this function will retrieve the video the user wants to see
    } else if (videos.length > 0) {
      fetchVideo(videos[0].id); // this is our default/on load video that is displayed. As everything is being run through the React router this defines/fetches a video until the user selects something else
    }
  }, [videoId, videos]); //we need these two dependencies in the array as we need React to rerun this logic any time the videoId or videos array changes otherwise the useEffect will only run on load

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
