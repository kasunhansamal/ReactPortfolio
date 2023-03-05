import React from "react";
import screenshot1 from "../assets/screenshot-1.jpg";
import screenshot2 from "../assets/screenshot-2.jpg";
import screenshot3 from "../assets/screenshot-3.jpg";

import "./index.css";

function Portfolio() {
  return (
    <section
      className="main-content is-medium py-4 project-color"
      id="portfolio"
    >
      <h2 className="has-text-centered has-text-white title is-3">Projects</h2>
      <div className="columns is-centered">
        <div className="column is-3">
          <div className="card">
            <div className="card-image">
              <figure className="image is-2by1">
                <img src={screenshot1} alt="MEAN Stack Login" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left"></div>
                <div className="media-content">
                  <p className="title is-4">Login/Signup Sample Stack</p>
                  <p className="subtitle is-6">PHP , MariaDB , bulma</p>
                </div>
              </div>

              <div className="content">
                Login/Signup Example using Apache , MariaDB , PHP and Bulma.
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3">
          <div className="card">
            <div className="card-image">
              <figure className="image is-2by1">
                <img src={screenshot2} alt="Confusion with Angular 4" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left"></div>
                <div className="media-content">
                  <p className="title is-4">Sales Tracking Web App</p>
                  <p className="subtitle is-6">
                    Angular 4 with Angular Material
                  </p>
                </div>
              </div>

              <div className="content">
                Sales tracking web app made with Angular, Angular Material ,
                TypeScript and RxJS.
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="column is-3 ">
          <div className="card">
            <div className="card-image">
              <figure className="image is-2by1">
                <img src={screenshot3} alt="Confusion with Bootstrap3" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left"></div>
                <div className="media-content">
                  <p className="title is-4">Restuarant Welcome Page</p>
                  <p className="subtitle is-6">Bulma CSS Site</p>
                </div>
              </div>

              <div className="content">
                Restaurant website made with jQuery and Bulma CSS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
