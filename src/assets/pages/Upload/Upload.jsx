import "./Upload.scss";

function Upload() {
  return (
    <section className="upload">
      <h1 className="upload__main-heading">Upload Video</h1>;
      <div className="upload__primary-container">
        <article className="upload__video-image-container">
          <p className="upload__video-subheading">VIDEO THUMBNAIL</p>
          <img
            src="../../src/assets/images/Upload-video-preview.jpg"
            alt="video thumbnail"
            className="upload__video-image"
          />
        </article>
        <article className="upload__video-form-container">
          <p className="upload__video-subheading">VIDEO THUMBNAIL</p>
          <form className="upload__form">Add a title to your video</form>
          <p className="upload__video-subheading">ADD A VIDEO DESCRIPTION </p>
          <form className="upload__form">Add a description to your video</form>
        </article>
      </div>
      <div className="upload__button-container">
        <div className="upload__button">
          <img
            src="../src/assets/images/publish.svg"
            className="upload__publish-logo"
          ></img>
          <p className="upload__button-text">PUBLISH</p>
        </div>
      </div>
    </section>
  );
}

export default Upload;
