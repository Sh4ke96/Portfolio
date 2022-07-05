import { Title, Button } from "../index";
function Contact() {
  return (
    <section id="contact">
      <Title
        className="global__title"
        data-aos="fade-right"
        data-aos-delay="350"
        data-aos-once="true"
      >
        What's Next?
      </Title>
      <div
        class="contact__container"
        data-aos="fade-down"
        data-aos-delay="350"
        data-aos-once="true"
      >
        <h3 class="contact__title">Get In Touch</h3>
        <p class="contact__description">
          If u have a question or just want to say hi, I'll try my best to get
          back to you!
        </p>
        <a className="email__link" href="mailto:sh4ke96@gmail.com">
          <Button
            className="global__button"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Say Hello
          </Button>
        </a>
      </div>
    </section>
  );
}

export default Contact;
