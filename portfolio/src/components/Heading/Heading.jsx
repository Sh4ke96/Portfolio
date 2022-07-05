import Button from "../Button/Button";

function Heading() {
  return (
    <div className="header__info">
      <h1 className="header__title" data-aos="fade-right">
        Hi, my name is
      </h1>
      <h2
        className="header__subtitle"
        data-aos="fade-right"
        data-aos-delay="150"
      >
        Artur Michałek. <br />
        <span className="header__subtitle_dark">
          I build things for the web
        </span>
        .
      </h2>
      <p
        className="header__description"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        I would like to receive the opportunity to gain experience, build my
        knowledge and further{" "}
        <span className="global__green-element">push </span>
        my career forward. I have been{" "}
        <span className="global__green-element">regularly learning </span>
        new technologies for over six months now and my goal is to find a{" "}
        <span className="global__green-element">junior frontend developer </span>
        job this year.
      </p>
      <a className="email__link" href="mailto:sh4ke96@gmail.com">
        <Button
          className="global__button"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          Get In Touch
        </Button>
      </a>
    </div>
  );
}

export default Heading;
