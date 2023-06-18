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
            <div className="ournumber_numberinfo">47</div>
            <div className="ournumber_numbercontent">Satisfied Clients</div>
          </div>
          <div className="ourNumbers_number">
            <div className="ournumber_numberinfo">96</div>
            <div className="ournumber_numbercontent">Projects Completed</div>
          </div>
          <div className="ourNumbers_number">
            <div className="ournumber_numberinfo">5+</div>
            <div className="ournumber_numbercontent">
              Years of Outsourcing Experiences
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurNumbers;
