import React from "react";
import OurServices from "./components/OurServices";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import OurNumbers from "./components/OurNumbers";
import Footer from "./components/Footer";
import CallUs from "./components/CallUs";
import ITRform from "./components/ITRform";
import Banner from "./components/Banner";
import WhyChooseUs from "./components/WhyChooseUs";
import Consultation from "./components/Consultation";

function Homepage() {
  return (
    <>
      <Banner />
      <About />
      <OurServices />
      <WhyChooseUs />
      <ITRform />
      <OurNumbers />
      <Testimonials />
      <Consultation />
      <CallUs />
      <Footer />
    </>
  );
}

export default Homepage;
