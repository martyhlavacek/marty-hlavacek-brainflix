import React from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.scss";

function Gallery(props) {
  const navigate = useNavigate();

  const handleVideoChange = (video) => {
    // Update the URL
    navigate(`/video/${video.id}`);
    // Call the function to change the active video
    props.changeActiveVideo(video);
  };

  return (
    <section className="gallery">
      <h5 className="gallery__subheading">NEXT VIDEOS</h5>
      {props.nonActiveVideos.map((video) => {
        return (
          <div
            key={video.id}
            onClick={() => handleVideoChange(video)}
            className="gallery__video-container"
          >
            <img src={video.image} className="gallery__video-image"></img>
            <div className="gallery__video-child-container">
              <p className="gallery__video-title">{video.title}</p>
              <p className="gallery__video-author">{video.channel}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Gallery;
