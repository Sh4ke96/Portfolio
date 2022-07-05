import React from "react";

function Card(props) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-once="true"
      class="projects__container"
    >
      <h1 class="projects__title">{props.title}</h1>
      <p class="projects__description">
        {props.description}
      </p>
      <p class="projects__tech">{props.tech1}</p>
      <p class="projects__tech">{props.tech2}</p>
      <p class="projects__tech">{props.tech3}</p>
      <p class="projects__tech">{props.tech4}</p>
      <div class="projects__icons">
        <a
          class="projects__link"
          target="_blank"
          href={props.git}
        >
          <i class="projects__item fab fa-github"></i>
        </a>
        <a
          class="projects__link"
          target="_blank"
          href={props.live}
        >
          <i class="projects__item fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
