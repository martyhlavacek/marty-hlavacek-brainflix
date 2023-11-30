import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.scss";

function Gallery(props) {
  return (
    <section className="gallery">
      <h5 className="gallery__subheading">NEXT VIDEOS</h5>
      {props.nonActiveVideos.map((video) => {
        return (
          <Link
            to={`/videos/${video.id}`}
            key={video.id}
            className="gallery__video-container"
          >
            <img
              src={video.image}
              className="gallery__video-image"
              alt={video.title}
            />
            <div className="gallery__video-child-container">
              <p className="gallery__video-title">{video.title}</p>
              <p className="gallery__video-author">{video.channel}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default Gallery;
