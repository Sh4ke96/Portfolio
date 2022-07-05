import React from "react";
import Title from "../Title/Title";

function About() {
  return (
    <section id="about-me">
      <Title
        className="global__title"
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay="150"
      >
        About Me
      </Title>
      <div
        className="about-me__container"
        data-aos="fade-right"
        data-aos-delay="350"
        data-aos-once="true"
      >
        <p className="about-me__description">
          Hello! My name is
          <span className="global__green-element"> Artur</span> and i enjoy creating
          things that live on the
          <span className="global__green-element"> internet</span>. My intrest in web
          development started back
          <span className="global__green-element"> in 2021</span> when I decided to
          try change my life career.
        </p>
        <p className="about-me__description">
          Here are a few technologies I've been working with recently:
        </p>
      </div>
      <ul
        className="about-me__skills-list"
        data-aos="fade-right"
        data-aos-delay="350"
        data-aos-once="true"
      >
        <li className="about-me__skills__item">HTML</li>
        <li className="about-me__skills__item">CSS</li>
        <li className="about-me__skills__item">SASS</li>
        <li className="about-me__skills__item">Tailwind</li>
        <li className="about-me__skills__item">Bootstrap</li>
        <li className="about-me__skills__item">BEM</li>
        <li className="about-me__skills__item">JavaScript</li>
        <li className="about-me__skills__item">Jquery</li>
        <li className="about-me__skills__item">React</li>
        <li className="about-me__skills__item">GitHub</li>
        <li className="about-me__skills__item">Docker</li>
        <li className="about-me__skills__item">NPM</li>
      </ul>
    </section>
  );
}

export default About;
