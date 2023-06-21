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
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <OurServices />
      <WhyChooseUs />
      <Pricing />
      {/* <ITRform /> */}
      <OurNumbers />
      <Testimonials />
      <Consultation />
      <CallUs />
      <Footer />
    </>
  );
}

export default Homepage;
