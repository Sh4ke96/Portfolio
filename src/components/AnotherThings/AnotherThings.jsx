import { Title, AnotherCard } from "../index";

function AnotherThings() {
  return (
    <section id="other-projects">
      <Title
        className="global__title"
        data-aos="fade-right"
        data-aos-delay="350"
        data-aos-once="true"
      >
        Other Projects
      </Title>
      <div className="other__projects__wrapper">
        <AnotherCard
          title={"QUOTEFI"}
          description={
            "Simple application written in Vue.js, which gets data from API and displays it on the page."
          }
          git={"https://github.com/Sh4ke96/Quotefi"}
          live={"https://quotefi.netlify.app/"}
          tech1={"Vue"}
          tech2={"SASS"}
          tech3={"AnimaChan"}
        />
        <AnotherCard
          title={"TTT GAME"}
          description={
            "Simple Tic-Tac-Toe Game written in Vue.js using Vite for the first time to build application."
          }
          git={"https://github.com/Sh4ke96/TTT-Application"}
          live={"https://ttt-application.netlify.app/"}
          tech1={"Vue"}
          tech2={"Vite"}
        />
        <AnotherCard
          title={"CLOUD-24"}
          description={
            "Weather application using data from OpenWeatherMap. Type a city or country name and check actual weather."
          }
          git={"https://github.com/Sh4ke96/Cloud-24"}
          live={"https://sh4ke96.github.io/Cloud-24/"}
          tech1={"JavaScript"}
          tech2={"SASS"}
          tech3={"OpenWeatherMap"}
        />
      </div>
    </section>
  );
}

export default AnotherThings;
