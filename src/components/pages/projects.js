import React from "react";
import cheerio_example from '../../images/cheerio_example.gif'
import gymder_example from '../../images/gymder_example.gif'

export default function Projects() {
  return (
    <div>
      <div class="row u-justify-center mx-3" style={{ marginTop: `80px` }}>
        <div class="u-flex-xl u-block-lg u-gap-3">
          <div class="projectCards">
            <div class="card card--slide-up" style={{ width: `450px` }}>
              <div class="card__container">
                <div
                  class="card__image"
                  style={{
                    backgroundImage: `url("${cheerio_example}")`,
                  }}
                ></div>
              </div>
              <div class="card__mobile-title">
                <div class="content mx-3">
                  <div class="tile">
                    <div class="tile__container">
                      <p class="tile__title">Cheerio &#129303;</p>
                      <p class="tile__subtitle">
                        By David Vo, Bryan Nguyen, and Kenneth Cruz
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card__body content mx-3">
                <p>An app to inspire and empower its users with imagery</p>
              </div>
              <div class="card__action-bar u-center">
                <a href="https://github.com/daevidvo/Cheerio" target="_blank" rel="noreferrer">
                  <button class="btn-link outline">Github Repo</button>
                </a>
                <a href="https://daevidvo.github.io/Cheerio/" target="_blank" rel="noreferrer">
                  <button class="btn-link outline">Deployed Site</button>
                </a>
              </div>
              <div class="card__footer content mx-3">April 2023</div>
            </div>
          </div>
          <div class="projectCards">
            <div class="card card--slide-up" style={{ width: `450px` }}>
              <div class="card__container">
                <div
                  class="card__image"
                  style={{
                    backgroundImage: `url("${gymder_example}")`,
                  }}
                ></div>
              </div>
              <div class="card__mobile-title">
                <div class="content mx-3">
                  <div class="tile">
                    <div class="tile__container">
                      <p class="tile__title">🏋️ Gymder</p>
                      <p class="tile__subtitle">
                        By David Vo, Sam Higa, and Kaiden Parcher
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card__body content mx-3">
                <p>Tinder but to find your next gym buddy</p>
              </div>
              <div class="card__action-bar u-center">
                <a href="https://github.com/daevidvo/Gymder" target="_blank" rel="noreferrer">
                  <button class="btn-link outline">Github Repo</button>
                </a>
                <a
                  href="https://gymder-dv-sh-kp.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button class="btn-link outline">Deployed Site</button>
                </a>
              </div>
              <div class="card__footer content mx-3">May 2023</div>
            </div>
          </div>
          <div class="projectCards">
            <div class="card card--slide-up" style={{ width: `450px` }}>
              <div class="card__container">
                <div
                  class="card__image"
                  style={{
                    backgroundImage: `url("https://unsplash.it/640/480?random&amp;blur"`,
                  }}
                ></div>
              </div>
              <div class="card__mobile-title">
                <div class="content mx-3">
                  <div class="tile">
                    <div class="tile__container">
                      <p class="tile__title">TBD</p>
                      <p class="tile__subtitle">By David Vo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card__body content mx-3">
                <p>To be written</p>
              </div>
              <div class="card__action-bar u-center">
                <a href="?">
                  <button class="btn-link outline">repo</button>
                </a>
                <a href="?">
                  <button class="btn-link outline">site</button>
                </a>
              </div>
              <div class="card__footer content mx-3">Sometime, Some Year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
