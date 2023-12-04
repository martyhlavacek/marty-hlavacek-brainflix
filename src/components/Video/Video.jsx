import "./Video.scss";

function Video({ activeVideo }) {
  return (
    activeVideo && ( // this is a conditional rendering statement, meaning that the body of the content will not output unless the prop of activeVideo is truthy. This is an simple way of avoiding having to have a loading message whilst the API data is loading via the useEffect function in the Home.jsx page
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
