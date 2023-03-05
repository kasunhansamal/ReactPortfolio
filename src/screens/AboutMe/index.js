import React from "react";
import ProfileImage from "../assets/profile-3.png";
import "./index.css";

function AboutMe() {
  return (
    <section className="hero is-medium hero-color" id="about-me">
      <div className="hero-body columns">
        <div className="columns">
          <div className="column is-8 has-text-left is-align-self-center">
            <h1 className="title has-text-white is-2 is-spaced">Kasun Hansamal</h1>
            <h2 className="title is-4 is-spaced has-text-white">
              Software Developer / Web Developer
            </h2>
            <p className="subtitle is-4 has-text-white has-text-left font-medium">
              I'm a Web Developer and a software engineer, I primarily work with
              Node, React & bulma css framework for responsive web designing
            </p>
            <p className="subtitle is-4 has-text-white has-text-left font-medium">
              I’m specializing in building designing exceptional digital
              experiences. Currently, I’m focused on building accessible ,
              responsive websites and creating web applications.
            </p>
          </div>
          <div className="column is-4 is-align-self-center">
            <img className="hero-image" src={ProfileImage}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
