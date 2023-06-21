import React from "react";
import "./OurNumbers.css";

function OurNumbers() {
  return (
    <div className="ourNumbers_outer">
      <div className="container">
        <div className="ourNumbers_inner">
          <div className="ourNumbers_content">
            <div className="ourNumber_heading">Our Numbers</div>
            <div className="ourNumber_p">
              Experienced. Well disposed. Proficient.
            </div>
          </div>
          <div className="ourNumbers_number">
            <div className="ournumber_numberinfo">5K+</div>
            <div className="ournumber_numbercontent">Satisfied Clients</div>
          </div>
          <div className="ourNumbers_number">
            <div className="ournumber_numberinfo">1 Crore+</div>
            <div className="ournumber_numbercontent">Tax Saved</div>
          </div>
          <div className="ourNumbers_number">
            <div className="ournumber_numberinfo">7+</div>
            <div className="ournumber_numbercontent">Years of Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurNumbers;
