import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner_outer">
      <div className="container">
        <div className="banner_inner">
          <div className="banner_text">
            <div className="banner_text_heading">
              We help you avoid <br /> tax blunders
            </div>
            <div className="banner_text_p">
              One-stop solutions for all your outsourced activities.
            </div>
          </div>
          <div className="banner_button">
            <a href="">
              <button>get estimated quote</button>
            </a>
            <a href="">
              <button className="second_button">Free Consultation</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
