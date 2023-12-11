import "./Home.scss";
import Video from "../../../components/Video/Video.jsx";
import Comments from "../../../components/Comments/Comments.jsx";
import Gallery from "../../../components/Gallery/Gallery.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const { videoId } = useParams(); // useParams is key to being able to interact with the React Router DOM, the videoId variable helps to define the URL path that gets fed to the Router located in the app.jsx

  const [videos, setVideos] = useState([]); // we need this empty array for the setVideos state as the array will populate once the API call has received the videos from the remote resource
  const [activeVideo, setActiveVideo] = useState(); // this is our state for the activeVideo shown to the user. The change of state is driven by the useParams hook from the URL videoId

  const nonActiveVideos = videos.filter(
    (video) => video.id !== activeVideo?.id
  ); // this function is key to render the "Next Videos" gallery component. Essentially saying - to get all the nonActiveVideos, filter the out all the videos that are not the activeVideo by the video id.

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://project-2-api.herokuapp.com/videos?api_key=%225d0f98d8-23d6-4ec7-a536-72579a5dc3ff%22" // this URL and corresponding API key has been hardcoded and in future iterations will need to be moved to a more secure method
        );
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []); // the dependency is empty as this only needs to run once onMount

  useEffect(() => {
    const fetchVideo = async (id) => {
      try {
        const response = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${id}?api_key=%225d0f98d8-23d6-4ec7-a536-72579a5dc3ff%22`
        ); // say as per comment on line 23
        setActiveVideo(response.data);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    if (videoId) {
      // this if statement checks if videoId is available from the useParems() as it is pulled from the URL as it represents the actual ID of the video
      fetchVideo(videoId); // when the videoId is present, this function will retrieve the video the user wants to see
    } else if (videos.length > 0) {
      fetchVideo(videos[0].id); // this is our default/onMount video that is displayed. As everything is being run through the React router this defines/fetches a video until the user selects something else
    }
  }, [videoId, videos]); //we need these two dependencies in the array as we need React to rerun this logic any time the videoId or videos array changes otherwise the useEffect will only run onMount. This is kind of like an eventListener looking to trigger change of state.

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
