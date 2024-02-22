import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";


const AboutSection = () => {
  return (
    <section
      className="about__section">
      <Container>
        <Row>
          <Col lg="18" md="18">
            <div className="about__section-content">
              <h3 className="section__title">Welcome to Praveen Rentals</h3>
              <br></br> <p className="section__description">
             <h6> At Praveen Rentals, we believe in more than just providing cars 
              we believe in delivering exceptional experiences on the road.
             As a premier car rental service, we take pride in offering a seamless
              and reliable solution for all your transportation needs.
             <br></br> <br></br> Praveen Rentals is committed to reducing our environmental
               footprint. We actively explore eco-friendly initiatives 
               and offer fuel-efficient vehicles, contributing to a
                greener and more sustainable future.
                <br></br> <br></br>  Thank you for choosing Praveen Rentals. We look forward to being 
                a part of your travels.
              </h6> </p>
              <br></br>   <h3 className="section__title">Our Mission</h3>
              <br></br> <p className="section__description">
            <h6> Our mission is simple: to make your journey memorable. 
              Whether you're a business traveler, a family on vacation, 
              or someone in need of a temporary ride, we're here to provide 
              the perfect vehicle for every occasion. <br></br> <br></br>We are dedicated to exceeding
               your expectations with top-notch service and a fleet of 
               well-maintained, quality cars.
               </h6>  </p>
            </div>
            <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div> 
                    <h5 className="section__subtitle">Call us</h5>
                    <h4 className="ph__no">+91 97893 65766</h4>
                  </div>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
