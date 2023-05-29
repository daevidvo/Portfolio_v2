import React from "react";

function NavBar({ currentPage, setCurrentPage }) {
  return (
    <div className="header header-fixed u-unselectable header-animated">
      <div className="header-brand">
        <div className="nav-item no-hover">
          <h6 className="title">David Vo &#128122;</h6>
        </div>
        <div className="nav-item nav-btn" id="header-btn" onClick={console.log('testing')}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="header-nav" id="header-menu">
        <div className="nav-left">
          <div className="nav-item text-center">
            <a href="https://www.github.com/daevidvo" target="_blank">
              <span className="icon">
                <i className="fa fa-wrapper fa-github" aria-hidden="true"></i>
              </span>
            </a>
          </div>
          <div className="nav-item text-center">
            <a href="https://www.linkedin.com/in/daevidvo" target="_blank">
              <span className="icon">
                <i className="fa fa-wrapper fa-linkedin" aria-hidden="true"></i>
              </span>
            </a>
          </div>
          <div className="nav-item text-center">
            <a href="https://www.instagram.com/daevidvo" target="_blank">
              <span className="icon">
                <i className="fa fa-wrapper fa-instagram" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </div>

        <div className="nav-right">
          <div
            className={currentPage === "home" ? "nav-item active" : "nav-item"}
          >
            <a href="#home" onClick={() => setCurrentPage("home")}>
              Home
            </a>
          </div>
          <div
            className={
              currentPage === "projects" ? "nav-item active" : "nav-item"
            }
          >
            <a href="#projects" onClick={() => setCurrentPage("projects")}>
              Projects
            </a>
          </div>
          <div
            className={
              currentPage === "resume" ? "nav-item active" : "nav-item"
            }
          >
            <a href="#resume" onClick={() => setCurrentPage("resume")}>
              Resume
            </a>
          </div>
          <div
            className={
              currentPage === "contact" ? "nav-item active" : "nav-item"
            }
          >
            <a href="#contact" onClick={() => setCurrentPage("contact")}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
