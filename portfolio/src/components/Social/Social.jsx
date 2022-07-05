import React from "react";

function Social() {
  return (
    <>
      <ul
        className="ul__socials"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="450"
      >
        <a className="socials__link" href="https://github.com/Sh4ke96">
          <i className="socials__item fab fa-github"></i>
        </a>
        <a
          className="socials__link"
          href="https://www.linkedin.com/in/artur-micha%C5%82ek-69863918b/"
        >
          <i className="socials__item fab fa-linkedin-in"></i>
        </a>
        <hr className="vertical__hr" />
      </ul>
      <div
        className="mail__socials"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="450"
      >
        <a href="mailto:sh4ke96@gmail.com" className="mail__socials-text">
          sh4ke96@gmail.com
        </a>
        <hr className="vertical__hr" />
      </div>
    </>
  );
}

export default Social;
