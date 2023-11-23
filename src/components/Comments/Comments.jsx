import "./Comments.scss";

function Comments() {
  return (
    <>
      <section className="comments">
        <p className="comments__counter">3 Comments</p>
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
            <form className="comments__form"></form>
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
        <div className="comments__posted-container">
          <div className="comments__posted-avatar-container">
            <img
              src="https://placehold.co/1200x798"
              className="comments__posted-avatar-image"
            ></img>
          </div>
          <div className="comments__posted-credits-container">
            <div className="comments__posted-credits-child-container">
              <p className="comments__posted-author-name">Gary Wong</p>
              <p className="comments__posted-date">12/09/1991</p>
            </div>
            <p className="comments__posted-text">
              Nunc pulvinar sapien et ligula ullamcorper malesuada proin.
              Tincidunt arcu non sodales neque sodales. In eu mi bibendum neque
              egestas congue quisque egestas diam. Amet porttitor eget dolor
              morbi. Ut tellus elementum sagittis vitae et leo duis. Pulvinar
              mattis nunc sed blandit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Comments;
