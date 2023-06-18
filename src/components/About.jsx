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
                We Help Entrepreneurs Build Their Dreams.
              </div>
              <div className="aboutus_rightcontent">
                Our mission is to simplify finances, save money and time for
                millions of Indian businesses and people. We are a technology
                company that builds trusted, useful and insightful platforms for
                our clients to run their finances and improve their relationship
                with money.
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
                <p>Tax deducted & collected at Source</p>
                <p>Transfer pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
