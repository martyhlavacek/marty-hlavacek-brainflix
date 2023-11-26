import "./Comments.scss";

function Comments(props) {
  {
    props.activeVideo.comments;
  }

  console.log(props.activeVideo.comments);

  return (
    <>
      <div className="comments__wrapper">
        <h1 className="video__main-text">{props.activeVideo.title}</h1>
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
        <p className="video__summary-info">{props.activeVideo.description}</p>
        <section className="comments">
          <p className="comments__counter">
            {props.activeVideo.comments.length} Comments
          </p>
          <div className="comments__add-container">
            <div className="comments__avatar-container">
              <h4>‎ </h4>
              <img
                src="../src/assets/images/Mohan-muruge.jpg"
                className="comments__avatar-image"
              ></img>
            </div>
            <div className="comments__form-container">
              <h5 className="comments__subheading">JOIN THE CONVERSATION</h5>
              <div className="comments__form-wrapper">
                <form className="comments__form">Add a new comment</form>
                <div className="comments__button">
                  <img
                    src="../../src/assets/images/add_comment.svg"
                    alt="add comment"
                    className="comments__button-image"
                  />
                  <p className="comments__button-text">COMMENT</p>
                </div>
              </div>
            </div>
          </div>
          {props.activeVideo.comments.map((comment) => {
            return (
              <div className="comments__posted-container">
                <div className="comments__posted-avatar-container">
                  <img
                    src="https://placehold.co/1200x798"
                    className="comments__posted-avatar-image"
                  ></img>
                </div>
                <div className="comments__posted-credits-container">
                  <div className="comments__posted-credits-child-container">
                    <p className="comments__posted-author-name">
                      {comment.name}
                    </p>
                    <p className="comments__posted-date">
                      {new Date(comment.timestamp).toLocaleDateString("en-US")}
                    </p>
                  </div>
                  <p className="comments__posted-text">{comment.comment}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Comments;
