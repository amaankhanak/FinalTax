import React from "react";
import "./About.css";
import group from "./images/about/group.png";
import line from "./images/about/line.png";

function About() {
  return (
    <div className="aboutOuter">
      <div className="container">
        <div className="aboutInner">
          <div className="aboutinner_upper">
            <p>We are here for your tax relief</p>
          </div>
          <div className="aboutinner_middle">
            <div className="aboutus_heading">
              <div className="aboutus_smallheading">About Us</div>
              <div className="aboutus_line">
                <img src={line} alt="" />
              </div>
            </div>

            <div className="aboutus_content">
              <div className="aboutus_leftcontent">
                We help our clients to handle their Business or Profession tax
                Compliances
              </div>
              <div className="aboutus_rightcontent">
                Founded in year 2016 by passionate Chartered Accountants who
                wants to simply the personal finance and taxes of each
                individuals who work in their business or profession so that we
                can
                <b>
                  {" "}
                  <i>Figure out their taxes</i>
                </b>
                <br /> <br />
                We are specialized in Income tax filing services, providing
                expert guidance and support to individuals and businesses. Our
                team of professionals ensures accurate and timely filing,
                maximizing your deductions and minimizing your tax liability.
                Trust us to handle your tax needs with efficiency and
                reliability.
              </div>
            </div>
          </div>
          <div className="aboutinner_last">
            <div className="aboutlast_img">
              <img src={group} alt="" />
            </div>
            <div className="aboutlast_content">
              <div className="aboutlast_content_heading">
                Empowering you to make sound financial decisions by controlling
                your taxes and learning about
              </div>
              <div className="aboutlast_content_p">
                <p>Income Tax Returns</p>
                <p>Advance tax payment & Tax liability</p>
                <p>Annual information statement (AIS) and 26 AS </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
