import React from "react";
import { Title, Card } from "../index";

function Things() {
  return (
    <section id="projects">
      <Title
        className="global__title"
        data-aos="fade-right"
        data-aos-delay="350"
        data-aos-once="true"
      >
        Some Things I've Built
      </Title>
      <div className="projects__wrapper">
        <Card
          title={"KOVID-19"}
          description={
            "Kovid-19 website is a collection of key information on the virus. I used few libraries to ensure that layout looks nice, more interesting and works on all major browsers. "
          }
          tech1={"JavaScript"}
          tech2={"SASS"}
          tech3={"CountUp"}
          tech4={"Hamburgers"}
          git={"https://github.com/Sh4ke96/Kovid-19"}
          live={"https://sh4ke96.github.io/Kovid-19/"}
        />
        <Card
          title={"SASSIO"}
          description={
            "SaaSio website is a simple layout created by React. I used few libraries to ensure that layout looks nice, more interesting and works on all major browsers. "
          }
          tech1={"React"}
          tech2={"Styled Components"}
          tech3={"React-Slick"}
          tech4={"React-Scroll"}
          git={"https://github.com/Sh4ke96/Sassio"}
          live={"https://sh4ke96.github.io/Sassio/"}
        />
        <Card
          title={"ORGANIC"}
          description={
            "Organic website is a simple shop template for a fresh and healthy food. I used few libraries to ensure that layout looks nice, more interesting and works on all major browsers. "
          }
          tech1={"JavaScript"}
          tech2={"SASS"}
          tech3={"AOS"}
          git={"https://github.com/Sh4ke96/Organic"}
          live={"https://sh4ke96.github.io/Organic/"}
        />
      </div>
    </section>
  );
}

export default Things;
