import React from "react";
import anime from "animejs";
import cheerio_example from "../../images/cheerio_example.gif";
import gymder_example from "../../images/gymder_example.gif";
import tesorflow_example from "../../images/tensorflow_example.gif";
import planner from "../../images/planner.gif";
import elitefour from "../../images/elitefour_db.gif";
import gourmet_gauntlet from '../../images/gourmet_gauntlet.gif'

export default function Projects() {
  anime({
    targets: ".projectCards",
    scale: [0.9, 1],
    easing: "easeInOutQuad",
    opacity: [0, 1],
    duration: 1000,
    delay: anime.stagger(1000),
  });

  return (
    <div>
      <div className="row u-justify-center p-0" style={{ marginTop: `80px` }}>
        <div className="u-flex-xl u-block-lg u-gap-3">
          <div className="projectCards">
            <div className="card card--slide-up" style={{ width: `450px` }}>
              <div className="card__container">
                <div
                  className="card__image"
                  style={{
                    backgroundImage: `url("${cheerio_example}")`,
                  }}
                ></div>
              </div>
              <div className="card__mobile-title">
                <div className="content mx-3">
                  <div className="tile">
                    <div className="tile__container">
                      <p className="tile__title">Cheerio &#129303;</p>
                      <p className="tile__subtitle">
                        By David Vo, Bryan Nguyen, and Kenneth Cruz
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card__body content mx-3">
                <p>An app to inspire and empower its users with imagery</p>
              </div>
              <div className="card__action-bar u-center">
                <a
                  href="https://github.com/daevidvo/Cheerio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-link outline">Github Repo</button>
                </a>
                <a
                  href="https://daevidvo.github.io/Cheerio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-link outline">Deployed Site</button>
                </a>
              </div>
              <div className="card__footer content mx-3">April 2023</div>
            </div>
          </div>
          <div className="projectCards">
            <div className="card card--slide-up" style={{ width: `450px` }}>
              <div className="card__container">
                <div
                  className="card__image"
                  style={{
                    backgroundImage: `url("${gymder_example}")`,
                  }}
                ></div>
              </div>
              <div className="card__mobile-title">
                <div className="content mx-3">
                  <div className="tile">
                    <div className="tile__container">
                      <p className="tile__title">🏋️ Gymder</p>
                      <p className="tile__subtitle">
                        By David Vo, Sam Higa, and Kaiden Parcher
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card__body content mx-3">
                <p>Tinder but to find your next gym buddy</p>
              </div>
              <div className="card__action-bar u-center">
                <a
                  href="https://github.com/daevidvo/Gymder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-link outline">Github Repo</button>
                </a>
                <a
                  href="https://gymder-dv-sh-kp.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-link outline">Deployed Site</button>
                </a>
              </div>
              <div className="card__footer content mx-3">May 2023</div>
            </div>
          </div>
          <div className="projectCards">
            <div className="card card--slide-up" style={{ width: `450px` }}>
              <div className="card__container">
                <div
                  className="card__image"
                  style={{
                    backgroundImage: `url("${gourmet_gauntlet}"`,
                  }}
                ></div>
              </div>
              <div className="card__mobile-title">
                <div className="content mx-3">
                  <div className="tile">
                    <div className="tile__container">
                      <p className="tile__title">Gourmet Gauntlet</p>
                      <p className="tile__subtitle">By David Vo, David Chung, Bryan Nguyen, Jedd Javier</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card__body content mx-3">
                <p>A fiery multistage autobattler card game using React.</p>
              </div>
              <div className="card__action-bar u-center">
                <a
                  href="https://github.com/daevidvo/Gourmet-Gauntlet"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-link outline">Github Repo</button>
                </a> 
                <a
                  href="https://gourmet-gauntlet.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-link outline">Deployed Site</button>
                </a>
              </div>
              <div className="card__footer content mx-3">June 2023</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row u-justify-center p-0">
        <div className="u-flex-xl u-block-lg u-gap-3">
          <div className="projectCards">
            <div className="card card--slide-up" style={{ width: `450px` }}>
              <div className="card__container">
                <div
                  className="card__image"
                  style={{
                    backgroundImage: `url("${tesorflow_example}"`,
                  }}
                ></div>
              </div>
              <div className="card__mobile-title">
                <div className="content mx-3">
                  <div className="tile">
                    <div className="tile__container">
                      <p className="tile__title">
                        Fashion MNIST Neural Network
                      </p>
                      <p className="tile__subtitle">By David Vo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card__body content mx-3">
                <p>A basic neural network trained to identify clothes</p>
              </div>
              <div className="card__action-bar u-center">
                <a
                  href="https://github.com/daevidvo/tensorflow_miniproject1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-link outline">Github Repo</button>
                </a>
              </div>
              <div className="card__footer content mx-3">April 2023</div>
            </div>
          </div>
          <div className="projectCards">
            <div className="card card--slide-up" style={{ width: `450px` }}>
              <div className="card__container">
                <div
                  className="card__image"
                  style={{
                    backgroundImage: `url("${planner}"`,
                  }}
                ></div>
              </div>
              <div className="card__mobile-title">
                <div className="content mx-3">
                  <div className="tile">
                    <div className="tile__container">
                      <p className="tile__title">Work Day Scheduler</p>
                      <p className="tile__subtitle">By David Vo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card__body content mx-3">
                <p>Simple app that lets you plan your 9-5 day</p>
              </div>
              <div className="card__action-bar u-center">
                <a
                  href="https://github.com/daevidvo/Daily_Schedule_Planner"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-link outline">Github Repo</button>
                </a>
              </div>
              <div className="card__footer content mx-3">April 2023</div>
            </div>
          </div>
          <div className="projectCards">
            <div className="card card--slide-up" style={{ width: `450px` }}>
              <div className="card__container">
                <div
                  className="card__image"
                  style={{
                    backgroundImage: `url("${elitefour}"`,
                  }}
                ></div>
              </div>
              <div className="card__mobile-title">
                <div className="content mx-3">
                  <div className="tile">
                    <div className="tile__container">
                      <p className="tile__title">Pokemon Elite Four Database</p>
                      <p className="tile__subtitle">By David Vo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card__body content mx-3">
                <p>A database of Elite Four trainers using MySQL</p>
              </div>
              <div className="card__action-bar u-center">
                <a
                  href="https://github.com/daevidvo/Pokemon-Elite-Four-Tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-link outline">Github Repo</button>
                </a>
              </div>
              <div className="card__footer content mx-3">
                April 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
