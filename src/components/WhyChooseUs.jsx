import React from "react";
import "./WhyChooseUs.css";
import whychooseus from "./images/whychooseus.png";

function WhyChooseUs() {
  return (
    <div className="whychooseus_outer">
      <div className="container">
        <div className="whychooseus_inner">
          <div className="whychooseus_heading">
            <div className="whychooseus_mainhead">Why Choose Us?</div>
            <div className="whychooseus_p">
              Final Tax will let you on know how to make control of your
              Financial future with Smart personal finance management
            </div>
          </div>
          <div className="whychooseus_content">
            <div className="whychooseus_img">
              <img src={whychooseus} alt="" />
            </div>
            <div className="whychooseus_box">
              <div className="whychooseus_small">
                <ul>
                  <li>• 100% Data Security and Privacy</li>
                  <li>• Free Live return filing</li>
                  <li>• e-CA assistance for full year- General queries</li>
                  <li>• Free Tax planning advice and guidance</li>
                  <li>
                    • Free Advisory on investment opportunities and declaration
                    in company
                  </li>
                  <li>• Whatsapp assistance and resolutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
