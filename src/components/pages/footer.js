import React from "react";

export default function Footer() {
  return (
    <div style={{transform: `translateY(30vh)`}}>
      <footer className="footer p-2">
        <h6 className="footer__title white uppercase">Socials</h6>
        <div className="content">
          <div className="divider"></div>

          <div className="row u-center">
            <div className="col">
              <a
                href="https://www.instagram.com/daevidvo"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon">
                  <i
                    className="fa fa-wrapper fa-instagram large"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.linkedin.com/in/daevidvo"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon">
                  <i
                    className="fa fa-wrapper fa-linkedin large"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.github.com/daevidvo"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon">
                  <i
                    className="fa fa-wrapper fa-github large"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
