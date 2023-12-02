import "./Video.scss";

function Video({ activeVideo }) {
  // if (!activeVideo) {
  //   return <p className="video__loading-text">Loading video...</p>;
  // } else
  // return (

  return (
    activeVideo && (
      <>
        <section className="video">
          <div className="video__inline-player-container">
            <video
              className="video__inline-player"
              src={activeVideo.image}
              controls
              poster={activeVideo.image}
            ></video>
          </div>
        </section>
      </>
    )
  );
}

export default Video;
