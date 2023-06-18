import React from "react";
import "./Testimonials.css";
import colon from "./images/colon.png";

function Testimonials() {
  return (
    <div className="testimonialsOuter">
      <div className="container">
        <div className="testimonialsInner">
          <div className="testimonialsHeading">
            <div className="testimonialsHeading_text">
              <div className="testimonials_smallHeading">Testimonials</div>
              <div className="testimonialsbigHeading">
                What Clients Are Saying
              </div>
            </div>
            <div className="testimonialsHeading_img">
              <img src={colon} alt="" />
            </div>
          </div>
          <div className="testimonials_contentContainer">
            <div className="individual_testimonials">
              <div className="individual_testimonial_content">
                OffshoreTask took brilliant care of my business’s need for
                accounting, hence freeing up my team from confusions &
                inefficiency, resulting in improved focus on our core offering
                and shooting up of profits.
              </div>
              <div className="individual_testimonial_name">
                Ashish Kamdar <br />
                (Muscat, Sultanate of Oman)
              </div>
            </div>
            <div className="individual_testimonials">
              <div className="individual_testimonial_content">
                Very responsive & effective team, solving my every query and
                communicating flawlessly. All the services were provided after
                giving me every detail of the promise and living up to it.
              </div>
              <div className="individual_testimonial_name">
                RANEET RANA <br />
                (United Kingdom)
              </div>
            </div>
            <div className="individual_testimonials">
              <div className="individual_testimonial_content">
                I am very happy that I have decided to outsource to you guys. I
                sing the praises of outsourcing to India to many people. Good
                Job Offshore task, I appreciate that keep it up with your all
                Hard work”
              </div>
              <div className="individual_testimonial_name">
                Ankit Desai <br />
                (Dubai, United Arab Emirates)
              </div>
            </div>
            <div className="individual_testimonials">
              <div className="individual_testimonial_content">
                They use the latest softwares and team with proficiency ensures
                that the scope for errors in my business account is absent. I
                highly recommend their consultation and can vouch that anyone
                who avails it won’t regret it.
              </div>
              <div className="individual_testimonial_name">
                BIRAL SHAH <br />
                (United KINGDOM)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
