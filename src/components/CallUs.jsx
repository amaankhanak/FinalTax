import React from "react";
import "./CallUs.css";

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
              Contact us – Planning to outsourced accounting services “Where
              Accuracy is redefined” – OffshoreTask 
            </div>
            <div className="callus_button">
              <a href="#">
                <button>Let's Work Together</button>
              </a>
            </div>
          </div>
          <div className="callusQR">
            <div className="callus_code">QR CODE</div>
            <div className="callus_codeText">
              Scan this QR code to contact us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallUs;