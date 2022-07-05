import React, { useEffect } from "react";
import {
  About,
  Footer,
  Header,
  Things,
  Contact,
  AnotherThings,
  ScrollUp,
} from "./components/index";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <ScrollUp />
      <About />
      <Things />
      <AnotherThings />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
