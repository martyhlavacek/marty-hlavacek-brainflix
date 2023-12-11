import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="header">
        <Link className="header__logo-link" to="/home">
          <img
            src="../src/assets/images/BrainFlix-logo.svg"
            className="header__logo"
          ></img>
        </Link>
        <div className="header__search-bar-container">
          <form className="header__search-bar">
            <img
              src="../src/assets/images/search.svg"
              className="header__search-logo"
            ></img>
            <input className="header__search-form" placeholder="Search"></input>
          </form>
          <img
            src="../src/assets/images/Mohan-muruge.jpg"
            className="header__avatar"
          ></img>
        </div>
        <Link className="header__button-link-container" to="/upload">
          <div className="header__button">
            <img
              src="../src/assets/images/upload.svg"
              className="header__upload-logo"
            ></img>
            <p className="header__upload-text">UPLOAD</p>
          </div>
        </Link>
        <img
          src="../src/assets/images/Mohan-muruge.jpg"
          className="header__avatar--deskop-tablet"
        ></img>
      </section>
    </>
  );
}

export default Header;
