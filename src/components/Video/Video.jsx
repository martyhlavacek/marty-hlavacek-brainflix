import "./Video.scss";

function Video(props) {
  if (!props.activeVideo) {
    return <p className="video__loading-text">Loading video...</p>;
  }

  return (
    <>
      <section className="video">
        <div className="video__inline-player-container">
          <video
            className="video__inline-player"
            src={props.activeVideo.image}
            controls
            poster={props.activeVideo.image}
          ></video>
        </div>
      </section>
    </>
  );
}

export default Video;
