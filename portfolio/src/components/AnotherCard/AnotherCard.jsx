function AnotherCard(props) {
  return (
    <div
      data-aos="zoom-out"
      data-aos-easing="linear"
      data-aos-once="true"
      class="projects__container archive__container"
    >
      <div class="other__icons">
        <a
          class="projects__link"
          href={props.git}
        >
          <i class="other__item far fa-folder"></i>
        </a>
        <a
          class="projects__link"
          href={props.live}
        >
          <i class="projects__item fas fa-external-link-alt"></i>
        </a>
      </div>
      <h1 class="projects__title">{props.title}</h1>
      <p class="projects__description">
        {props.description}
      </p>
      <p class="projects__tech">{props.tech1}</p>
      <p class="projects__tech">{props.tech2}</p>
      <p class="projects__tech">{props.tech3}</p>
    </div>
  );
}

export default AnotherCard;
