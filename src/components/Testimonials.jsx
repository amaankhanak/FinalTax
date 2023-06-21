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
                I recently utilized the income tax filing services provided by
                Final Tax, and I must say that I am thoroughly impressed with
                their outstanding live return filing service, expertise and
                professionalism. Their assistance in filing my income tax return
                was truly exceptional, and I highly recommend their services to
                anyone in need of reliable and efficient tax filing support
              </div>
              <div className="individual_testimonial_name">
                Mr. Pratim Sarkar <br />
                (Software engineer, Google, Bangalore)
              </div>
            </div>
            <div className="individual_testimonials">
              <div className="individual_testimonial_content">
                Overall service provided by Final tax was outstanding. The
                entire team was friendly, courteous, and genuinely interested in
                helping my business succeed. Their personalized approach made me
                feel like a valued client, and they went above and beyond to
                ensure my satisfaction
              </div>
              <div className="individual_testimonial_name">
                Mr. Dhruv Jagetiya <br />
                (Software engineer, Uber, Bangalore)
              </div>
            </div>
            <div className="individual_testimonials">
              <div className="individual_testimonial_content">
                I have been using Final Tax income tax filing services for
                several years now, and I am extremely satisfied with their
                expertise and professionalism. Their team of tax experts is
                highly knowledgeable and has helped me navigate through complex
                tax laws and regulations effortlessly.
              </div>
              <div className="individual_testimonial_name">
                Mrs. Nimisha Shah <br />
                (Software engineer, TIBCO, Pune)
              </div>
            </div>
            <div className="individual_testimonials">
              <div className="individual_testimonial_content">
                The team at Final Tax meticulously reviewed my financial
                records, leaving no stone unturned. They were meticulous in
                their approach, ensuring that every detail was accurate and
                accounted for. This attention to detail not only provided peace
                of mind but also minimized the risk of future audits or
                penalties.
              </div>
              <div className="individual_testimonial_name">
                Mr. Ashutosh Mishra <br />
                (Software engineer, Google, Gurgaon)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
