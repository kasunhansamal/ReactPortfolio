import React from "react";
import "./index.css";

function Skills() {
  return (
    <section
      className="main-content has-text-white is-medium py-4 skills-color pb-6"
      id="skills"
    >
      <h2 className="has-text-centered has-text-white title is-3">Skills</h2>
      <div className="columns is-centered">
        <div className="column is-3">
          <h4>
            Java
            <span> 70%</span>
          </h4>

          <div className="progress">
            <progress className="progress is-link" value="70" max="100">
              70%
            </progress>
          </div>

          <h4>
            Spring Boot
            <span> 60%</span>
          </h4>

          <div className="progress">
            <progress className="progress is-link" value="60" max="100">
              60%
            </progress>
          </div>

          <h4>
            Angular 2 +<span> 70%</span>
          </h4>

          <div className="progress">
            <progress className="progress is-link" value="70" max="100">
              70%
            </progress>
          </div>

          <h4>
            TypeScript
            <span> 60%</span>
          </h4>

          <div className="progress">
            <progress className="progress is-link" value="60" max="100">
              70%
            </progress>
          </div>
        </div>
        <div className="column is-3">
          <h4>
            JavaScript
            <span> 80%</span>
          </h4>

          <div className="progress">
            <progress className="progress is-link" value="80" max="100">
              80%
            </progress>
          </div>

          <h4>
            HTML5 & CSS3
            <span> 70%</span>
          </h4>

          <div className="progress">
            <progress className="progress is-link" value="70" max="100">
              70%
            </progress>
          </div>

          <h4>
            jQuery
            <span> 80%</span>
          </h4>

          <div className="progress">
            <progress className="progress is-link" value="80" max="100">
              78%
            </progress>
          </div>

          <h4>
            Responsive Web Design
            <span> 80%</span>
          </h4>

          <div className="progress">
            <progress className="progress is-link" value="80" max="100">
              78%
            </progress>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
