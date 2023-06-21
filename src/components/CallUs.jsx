import React from "react";
import "./CallUs.css";
import qr from "./images/qr.png";

function CallUs() {
  return (
    <div className="callus_outer">
      <div className="container">
        <div className="callus_inner">
          <div className="callus_content_left">
            <div className="callus_mainhead">
              If You Have Any Question,
              <br /> Feel Free to Call
              <br /> +91-261-2631111
            </div>
            <div className="callus_content">
              Final Tax <i>“Figure out your own taxes”</i>
            </div>
            <div className="qr_code">
              <img src={qr} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallUs;
