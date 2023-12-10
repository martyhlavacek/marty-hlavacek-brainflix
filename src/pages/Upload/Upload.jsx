import axios from "axios";
import { useState } from "react";
import "./Upload.scss";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError("Please complete all fields in order to upload the video.");
      return; // Exit the function early if validation fails
    }

    try {
      await axios.post("http://localhost:8080/videos/", { title, description });
      alert("Video uploaded successfully!");
      window.location.href = "/"; // Redirect to home page
    } catch (err) {
      setError("Error: " + err.response.data.message);
    }
  };

  const handleCancel = () => {
    window.location.href = "/"; // Redirect to home page
  };

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
          <form
            className="upload__video-form-container"
            onSubmit={handleSubmit}
          >
            <h5 className="upload__video-subheading">ADD A VIDEO TITLE</h5>
            <input
              name="title"
              className="upload__form"
              placeholder="Add a title to your video"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h5 className="upload__video-subheading">
              ADD A VIDEO DESCRIPTION
            </h5>
            <input
              name="description"
              className="upload__form-description"
              placeholder="Add a description to your video"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="upload__button-container">
              <button type="submit" className="upload__button">
                <img
                  src="../src/assets/images/publish.svg"
                  className="upload__publish-logo"
                />
                <p className="upload__button-text">PUBLISH</p>
              </button>
              <button
                type="button"
                className="upload__button-cancel"
                onClick={handleCancel}
              >
                <p className="upload__button-text-cancel">CANCEL</p>
              </button>
              <button type="submit" className="upload__button--tablet-desktop">
                <img
                  src="../src/assets/images/publish.svg"
                  className="upload__publish-logo"
                />
                <p className="upload__button-text">PUBLISH</p>
              </button>
            </div>
          </form>
        </div>
        {error && <p className="upload__error">{error}</p>}
      </div>
    </section>
  );
}

export default Upload;
