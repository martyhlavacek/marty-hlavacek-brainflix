import "./Video.scss";

function Video(props) {
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
        {/* <h1 className="video__main-text">{props.activeVideo.title}</h1>
        <div className="video__data-container">
          <div className="video__credits-container">
            <p className="video__author">By {props.activeVideo.channel}</p>
            <p className="video__date-posted">
              {" "}
              {new Date(props.activeVideo.timestamp).toLocaleDateString(
                "en-US"
              )}
            </p>
          </div>
          <div className="video__metrics-container">
            <div className="video__views-child-container">
              <div className="video__views-grand-child-container">
                <img
                  src="../../src/assets/images/views.svg"
                  className="video__view-image"
                ></img>
                <p className="video__view-count">{props.activeVideo.views}</p>
              </div>
              <div className="video__views-grand-child-container">
                <img
                  src="../../src/assets/images/likes.svg"
                  className="video__like-image"
                ></img>
                <p className="video__like-count">{props.activeVideo.likes}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="video__summary-info">{props.activeVideo.description}</p> */}
      </section>
    </>
  );
}

export default Video;
