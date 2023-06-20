import React from "react";
import "./ITRform.css";
import itr_form from "./images/itr_form.png";

function ITRform() {
  return (
    <div className="itr_form_outer">
      <div className="container">
        <div className="itr_form_inner">
          <div className="itr_form_heading">ITR Form</div>
          <div className="itr_form_img">
            <img src={itr_form} alt="" />
          </div>
          <p>scroll for complete details</p>
        </div>
      </div>
    </div>
  );
}

export default ITRform;
