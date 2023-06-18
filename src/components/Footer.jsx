import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_outer">
      <div className="container">
        <div className="footer_inner">
          <div className="footer_companyinfo">
            <div className="company_logo"></div>
            <div className="company_text">
              Taking control of your taxes by learning about Basics of Taxes,
              Income Tax Return, TDS & TCS and Transfer pricing.
            </div>
          </div>
          <div className="footer_overview">
            <div className="footer_overview_heading">Overview</div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Free Consultation</a>
              </li>
              <li>
                <a href="#">TP – Research and News</a>
              </li>
              <li>
                <a href="#">TDS – Research and news</a>
              </li>
              <li>
                <a href="#">ITR – Research and News</a>
              </li>
            </ul>
          </div>
          <div className="footer_contact">
            <div className="footer_contact_heading">Contact Info</div>
            <div className="footer_contact_contact">
              <a href="#">
                <button>+91 7349688081</button>
              </a>
              <a href="#">
                <button>controlledtaxes@gmail.com</button>
              </a>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          © 2023 • Final Tax • All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
