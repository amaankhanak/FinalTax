import React from "react";
import { useState } from "react";
import "./Consultation.css";
import DropDown from "./DropDown";

function Consultation() {
  const [selected, setSelected] = useState("");
  const options = [
    "General",
    "ITR filing & assistance",
    "Tax planning",
    "Investment products & Advisory",
    "Auditing",
  ];

  return (
    <div className="consultation_outer">
      <div className="container">
        <div className="consultation_inner">
          <div className="consultation_text">
            <div className="consultation_heading">
              Get free personal consultation.
            </div>
            <div className="consultation_contact">
              <div className="consultation_contact_heading">Contact</div>
              <div className="consultation_contact_email">
                <a href="#">finaltaxglobal@gmail.com</a>
              </div>
            </div>
            <div className="consultation_hours">
              <div className="consultation_hours_heading">
                Consultation Hours
              </div>
              <div className="consultation_hours_timings">10 AM to 9 PM</div>
            </div>
            <div className="consultation_location">
              <div className="consultation_location_heading">Location</div>
              <div className="consultation_location_address">
                Hinjewadi, Pune
              </div>
            </div>
          </div>
          <div className="consultation_form">
            <form action="submit">
              <div className="consultation_form_row">
                <div className="consultation_form_section">
                  <div className="consultation_form_title">Name</div>
                  <div className="consultation_form_input">
                    <input type="text" placeholder="Enter Your Name" />
                  </div>
                </div>
                <div className="consultation_form_section">
                  <div className="consultation_form_title">Phone</div>
                  <div className="consultation_form_input">
                    <input type="number" placeholder="Enter Contact Number" />
                  </div>
                </div>
              </div>

              <div className="consultation_form_row">
                <div className="consultation_form_section">
                  <div className="consultation_form_title">Email Address</div>
                  <div className="consultation_form_input">
                    <input type="text" placeholder="Enter Your Email" />
                  </div>
                </div>
                <div className="consultation_form_section">
                  <div className="consultation_form_title">
                    Services interested in
                  </div>
                  <div className="consultation_form_input">
                    <DropDown
                      options={options}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </div>
                </div>
              </div>

              <div className="consultation_help">
                <div className="consultation_form_title">How can we help?</div>
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder=""
                  required
                ></textarea>
              </div>

              <div className="consulatation_form_btn">
                <button>Get a Callback</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
