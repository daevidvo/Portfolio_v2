import React from "react";

export default function Home({ setCurrentPage }) {
  return (
    <div>
      <div
        className="row u-justify-center"
        style={{ marginTop: `80px` }}
        id="aboutMeCard"
      >
        <div className="col-12" style={{ maxWidth: `500px` }}>
          <div className="frame bg-white">
            <div className="frame__header u-text-center">
              <div>
                <figure className="avatar avatar--xl">
                  <img
                    src="./assets/images/me_and_grandma.jpg"
                    alt="me and grandma"
                  />
                </figure>
              </div>
              <div>
                <h6 className="frame__title">David Vo</h6>
                <div className="frame__subtitle">
                  Software and Full Stack Developer
                </div>
              </div>
              <div className="row">
                <a
                  className="col"
                  href="https://www.github.com/daevidvo"
                  target="_blank"
                >
                  <i
                    className="fa fa-2x fa-wrapper fa-github link-btn"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  className="col"
                  href="https://www.instagram.com/daevidvo"
                  target="_blank"
                >
                  <i
                    className="fa fa-2x fa-wrapper fa-instagram link-btn"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  className="col"
                  href="https://www.linkedin.com/in/daevidvo"
                  target="_blank"
                >
                  <i
                    className="fa fa-2x fa-wrapper fa-linkedin link-btn"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <div className="divider m-0"></div>
            <div className="frame__body">
              <div className="content u-text-center">
                <h5>Hello!</h5>
                <p>
                  I'm a team-oriented and data-driven developer looking to build
                  and implement the best in class software. With strong
                  experience working at Seattle-based startups, I aim to deliver
                  value, improve processes, and increase efficiency.
                </p>
              </div>
            </div>
            <div className="divider m-0"></div>
            <div className="frame__footer">
              <div className="frame__subtitle u-text-center">
                <i>
                  In my free time I love cooking, olympic weightlifting,
                  photography, and machine learning development.
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row u-justify-center" id="projectsButton">
        <a href="#projects" onClick={() => setCurrentPage("projects")}>
          <button className="text-red-600 bg-white btn--xl">projects</button>
        </a>
      </div>
    </div>
  );
}
