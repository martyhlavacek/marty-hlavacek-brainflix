import "./Upload.scss";

function Upload() {
  return (
    <section className="upload">
      <div className="upload__wrapper">
        <h1 className="upload__main-heading">Upload Video</h1>
        <div className="upload__primary-container">
          <article className="upload__video-image-container">
            <h5 className="upload__video-subheading">VIDEO THUMBNAIL</h5>
            <img
              src="../../src/assets/images/Upload-video-preview.jpg"
              alt="video thumbnail"
              className="upload__video-image"
            />
          </article>
          <form className="upload__video-form-container">
            <h5 className="upload__video-subheading">ADD A VIDEO TITLE</h5>
            <input
              className="upload__form"
              placeholder="Add a title to your video"
            ></input>
            <h5 className="upload__video-subheading">
              ADD A VIDEO DESCRIPTION
            </h5>
            <input
              className="upload__form-description"
              placeholder="Add a description to your video"
            ></input>
          </form>
        </div>
        <div className="upload__button-container">
          <div className="upload__button">
            <img
              src="../src/assets/images/publish.svg"
              className="upload__publish-logo"
            ></img>
            <p className="upload__button-text">PUBLISH</p>
          </div>
          <div className="upload__button-cancel">
            <p className="upload__button-text-cancel">CANCEL</p>
          </div>
          <div className="upload__button--tablet-desktop">
            <img
              src="../src/assets/images/publish.svg"
              className="upload__publish-logo--tablet-desktop"
            ></img>
            <p className="upload__button-text--tablet-desktop">PUBLISH</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Upload;
