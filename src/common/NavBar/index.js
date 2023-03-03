import React from "react";
import "./index.css";

function NavBar() {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          Home
        </a>

        <button className="button navbar-burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">
          <a className="navbar-item" href="#about-me">
            About Me
          </a>
          <a className="navbar-item" href="#skills">
            Skills
          </a>
          <a className="navbar-item" href="#portfolio">
            Projects
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                className="button is-light"
                href="https://github.com/iamtrazy/"
              >
                <div className="icon">
                  <i className="fab fa-xl fa-github"></i>
                </div>
              </a>
              <a
                className="button is-light"
                href="https://twitter.com/iamtrazy1/"
              >
                <div className="icon">
                  <i className="fab fa-xl fa-twitter twitter-color"></i>
                </div>
              </a>
              <a
                className="button is-light"
                href="https://www.linkedin.com/in/kasun-hansamal-286855118/"
              >
                <div className="icon">
                  <i className="fab fa-xl fa-linkedin linkedin-color"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

export default NavBar;
