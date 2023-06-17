import React from "react";
import "./OurServices.css";
import img1 from "./images/services/1.png";
import img2 from "./images/services/2.png";
import img3 from "./images/services/3.png";
import img4 from "./images/services/4.png";
import img5 from "./images/services/5.png";
import img6 from "./images/services/6.png";

function OurServices() {
  return (
    <>
      <div className="ourService_outer">
        <div className="container">
          <div className="ourServices_inner">
            <div className="ourServices_heading">Our Services</div>
            <div className="ourServices_content">
              Expert services we offer that bring back finesse to finance.
            </div>
            <div className="ourServices_boxes_container">
              <div className="ourServices_box">
                <div className="ourService_boxImage">
                  <img src={img1} alt="" />
                </div>
                <div className="ourService_boxHeading">
                  Accounting & Bookkeeping
                </div>
                <div className="ourService_boxContent">
                  Interpreting the stories behind your numbers for actionable
                  inputs with precise footprints of transactions.
                </div>
              </div>
              <div className="ourServices_box">
                <div className="ourService_boxImage">
                  <img src={img2} alt="" />
                </div>
                <div className="ourService_boxHeading">Payroll</div>
                <div className="ourService_boxContent">
                  Taking utmost care of your Human Assets and their timely
                  appreciation.
                </div>
              </div>
              <div className="ourServices_box">
                <div className="ourService_boxImage">
                  <img src={img3} alt="" />
                </div>
                <div className="ourService_boxHeading">Taxation</div>
                <div className="ourService_boxContent">
                  Our experienced International-tax professionals can help you
                  in tax planning, compliance and related advisory services
                </div>
              </div>
              <div className="ourServices_box">
                <div className="ourService_boxImage">
                  <img src={img4} alt="" />
                </div>
                <div className="ourService_boxHeading">
                  Management Reporting
                </div>
                <div className="ourService_boxContent">
                  Our analytic solutions would help you in making better
                  informed business decisions and management reporting
                </div>
              </div>
              <div className="ourServices_box">
                <div className="ourService_boxImage">
                  <img src={img5} alt="" />
                </div>
                <div className="ourService_boxHeading">Virtual CFO</div>
                <div className="ourService_boxContent">
                  We provide you with experienced support for tax returns,
                  strategic planning, accounts payable and receivable, and
                  detailed forecasting. 
                </div>
              </div>
              <div className="ourServices_box">
                <div className="ourService_boxImage">
                  <img src={img1} alt="" />
                </div>
                <div className="ourService_boxHeading">Corporate Finance</div>
                <div className="ourService_boxContent">
                  Corporate finance is associated with a firm’s decision to
                  undertake capital investments and other investment-related
                  decisions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
