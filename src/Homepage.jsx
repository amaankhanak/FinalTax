import React from "react";
import OurServices from "./components/OurServices";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import OurNumbers from "./components/OurNumbers";
import Footer from "./components/Footer";
import CallUs from "./components/CallUs";
import ITRform from "./components/ITRform";

function Homepage() {
  return (
    <>
      <About />
      <OurServices />
      <ITRform />
      <OurNumbers />
      <Testimonials />
      <CallUs />
      <Footer />
    </>
  );
}

export default Homepage;
