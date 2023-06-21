import React from "react";
import "./Banner.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Banner() {
  return (
    <BrowserRouter>
      <div className="banner_outer">
        <div className="container">
          <div className="banner_inner">
            <div className="banner_text">
              <div className="banner_text_heading">
                We help you to
                <br /> figure out your taxes
              </div>
              <div className="banner_text_p">
                One-stop solutions for all your outsourced activities.
              </div>
            </div>
            <div className="banner_button">
              <Link to="#consultation">
                <button className="second_button">Free Consultation</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Banner;
