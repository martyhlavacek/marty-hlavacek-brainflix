import "./Video.scss";

function Video() {
  return (
    <>
      <section className="video">
        <iframe
          class="video__inline-player"
          src="https://www.youtube.com/embed/X0ipw1k7ygU"
        ></iframe>
        <h1 className="video__main-text">BMX Video Placeholder Text!</h1>
        <div className="video__data-container">
          <div className="video__credits-container">
            <p className="video__author">Link to Author</p>
            <p className="video__date-posted">12/07/1984</p>
          </div>
          <div className="video__metrics-container">
            <div className="video__views-child-container">
              <div className="video__views-grand-child-container">
                <img
                  src="../../src/assets/images/views.svg"
                  className="video__view-image"
                ></img>
                <p className="video__view-count">1,000</p>
              </div>
              <div className="video__views-grand-child-container">
                <img
                  src="../../src/assets/images/likes.svg"
                  className="video__like-image"
                ></img>
                <p className="video__like-count">50,000</p>
              </div>
            </div>
          </div>
        </div>
        <p className="video__summary-info">
          Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Tincidunt
          arcu non sodales neque sodales. In eu mi bibendum neque egestas congue
          quisque egestas diam. Amet porttitor eget dolor morbi. Ut tellus
          elementum sagittis vitae et leo duis. Pulvinar mattis nunc sed
          blandit. Tristique senectus et netus et malesuada fames ac. Semper
          risus in hendrerit gravida rutrum quisque non tellus. Nulla aliquet
          porttitor lacus luctus accumsan tortor posuere ac ut. Sem et tortor
          consequat id porta. Aliquam ut porttitor leo a diam. Malesuada nunc
          vel risus commodo. Turpis nunc eget lorem dolor sed viverra ipsum nunc
          aliquet. Maecenas ultricies mi eget mauris pharetra. Nunc sed augue
          lacus viverra vitae. Vivamus arcu felis bibendum ut tristique et
          egestas. Egestas sed sed risus pretium quam. Turpis egestas sed tempus
          urna et.
        </p>
      </section>
    </>
  );
}

export default Video;
