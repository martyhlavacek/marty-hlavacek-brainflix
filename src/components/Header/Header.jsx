import "./Header.scss";

function Header() {
  return (
    <>
      <section className="header">
        <img
          src="../src/assets/images/BrainFlix-logo.svg"
          className="header__logo"
        ></img>
        <div className="header__search-bar-container">
          <form className="header__search-bar">
            <img
              src="../src/assets/images/search.svg"
              className="header__search-logo"
            ></img>
            <input className="header__search-form" placeholder="search"></input>
          </form>
          <img
            src="../src/assets/images/Mohan-muruge.jpg"
            className="header__avatar"
          ></img>
        </div>
        <div className="header__button">
          <img
            src="../src/assets/images/upload.svg"
            className="header__upload-logo"
          ></img>
          <p className="header__upload-text">UPLOAD</p>
        </div>
      </section>
    </>
  );
}

export default Header;
