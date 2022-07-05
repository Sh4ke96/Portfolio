function Navbar() {
  return (
    <nav>
      <a href="#home">
        <img
          data-aos="fade-down"
          className="nav__logo"
          src="images/logo.png"
          alt="Logo with A letter"
        />
      </a>
      <button className="hamburger">
        <div className="bar"></div>
      </button>
      <ul className="nav__ul">
        <li data-aos="fade-down" data-aos-once="true" className="nav__li">
          <a href="#about-me" className="nav__link">
            <span className="nav__span">01.</span>About Me
          </a>
        </li>
        <li
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="150"
          className="nav__li"
        >
          <a href="#projects" className="nav__link">
            <span className="nav__span">02.</span>Projects
          </a>
        </li>
        <li
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
          className="nav__li"
        >
          <a href="#other-projects" className="nav__link">
            <span className="nav__span">03.</span>Other Projects
          </a>
        </li>
        <li
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="450"
          className="nav__li"
        >
          <a href="#contact" className="nav__link">
            <span className="nav__span">04.</span>Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
