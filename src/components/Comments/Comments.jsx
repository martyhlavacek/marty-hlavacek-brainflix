import "./Comments.scss";

function Comments({ activeVideo }) {
  return (
    activeVideo && (
      <>
        <div className="comments__wrapper">
          <h1 className="video__main-text">{activeVideo.title}</h1>
          <div className="video__data-container">
            <div className="video__credits-container">
              <p className="video__author">By {activeVideo.channel}</p>
              <p className="video__date-posted">
                {" "}
                {new Date(activeVideo.timestamp).toLocaleDateString("en-US")}
              </p>
            </div>
            <div className="video__metrics-container">
              <div className="video__views-child-container">
                <div className="video__views-grand-child-container">
                  <img
                    src="../../src/assets/images/views.svg"
                    className="video__view-image"
                  ></img>
                  <p className="video__view-count">{activeVideo.views}</p>
                </div>
                <div className="video__views-grand-child-container">
                  <img
                    src="../../src/assets/images/likes.svg"
                    className="video__like-image"
                  ></img>
                  <p className="video__like-count">{activeVideo.likes}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="video__summary-info">{activeVideo.description}</p>
          <section className="comments">
            <p className="comments__counter">
              {activeVideo.comments.length} Comments
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
                <form className="comments__form-wrapper">
                  <input
                    className="comments__form"
                    placeholder="Add a new comment"
                  ></input>
                  <div className="comments__button">
                    <img
                      src="../../src/assets/images/add_comment.svg"
                      alt="add comment"
                      className="comments__button-image"
                    />
                    <p className="comments__button-text">COMMENT</p>
                  </div>
                </form>
              </div>
            </div>
            {activeVideo.comments.map((comment, index) => {
              return (
                <div key={index} className="comments__posted-container">
                  <div className="comments__posted-avatar-container">
                    <div className="comments__posted-avatar-image"></div>
                  </div>
                  <div className="comments__posted-credits-container">
                    <div className="comments__posted-credits-child-container">
                      <p className="comments__posted-author-name">
                        {comment.name}
                      </p>
                      <p className="comments__posted-date">
                        {new Date(comment.timestamp).toLocaleDateString(
                          "en-US"
                        )}
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
    )
  );
}

export default Comments;
