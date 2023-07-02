import React from "react";
import { useState } from "react";
import "./Consultation.css";
import DropDown from "./DropDown";
import emailjs from "@emailjs/browser";

function Consultation() {
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: "",
    help: "",
  });

  const options = [
    "General",
    "ITR filing & assistance",
    "Tax planning",
    "Investment Advisory",
    "Auditing",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send email using emailjs library
    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        formData,
        process.env.USER_ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // Show success message to the user
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        // Show error message to the user
        alert("Error submitting the form. Please try again later.");
      });

    // Reset the form
    setFormData({
      name: "",
      phone: "",
      email: "",
      services: "",
      help: "",
    });
  };

  return (
    <div class="consultation_outer" id="consultation">
      <div class="container">
        <div class="consultation_inner">
          <div class="consultation_text">
            <div class="consultation_heading">
              Get free personal consultation.
            </div>
            <div class="consultation_contact">
              <div class="consultation_contact_heading">Contact</div>
              <div class="consultation_contact_email">
                <a href="mailto:finaltaxglobal@gmail.com">
                  finaltaxglobal@gmail.com
                </a>
                <br />
                <a href="tel:+919309457637">+91 9309457637</a>
              </div>
            </div>
            <div class="consultation_hours">
              <div class="consultation_hours_heading">Consultation Hours</div>
              <div class="consultation_hours_timings">10 AM to 9 PM</div>
            </div>
            <div class="consultation_location">
              <div class="consultation_location_heading">Location</div>
              <div class="consultation_location_address">Hinjewadi, Pune</div>
            </div>
          </div>
          <div class="consultation_form">
            <form onSubmit={handleSubmit}>
              <div class="consultation_form_row">
                <div class="consultation_form_section">
                  <div class="consultation_form_title">Name</div>
                  <div class="consultation_form_input">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="consultation_form_section">
                  <div class="consultation_form_title">Phone</div>
                  <div class="consultation_form_input">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter Contact Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div class="consultation_form_row">
                <div class="consultation_form_section">
                  <div class="consultation_form_title">Email Address</div>
                  <div class="consultation_form_input">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="consultation_form_section">
                  <div class="consultation_form_title">
                    Services interested in
                  </div>
                  <div class="consultation_form_input">
                    <DropDown
                      options={options}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </div>
                </div>
              </div>

              <div class="consultation_help">
                <div class="consultation_form_title">How can we help?</div>
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder=""
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div class="consulatation_form_btn">
                <button type="submit">Get a Callback</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
