import React from "react";
import OurServices from "./components/OurServices";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import OurNumbers from "./components/OurNumbers";

function Homepage() {
  return (
    <>
      <About />
      <OurServices />
      <OurNumbers />
      <Testimonials />
    </>
  );
}

export default Homepage;
