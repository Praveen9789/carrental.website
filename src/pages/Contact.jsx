import React from "react";

import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";


const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section className="background">
        <Container>
          <Row>
         <Col lg="5" md="5">
              <div className="contact__info">
                <h4 className="fw-bold">Contact Information</h4>
                <p className="section__description mb-0">
                 <h6>Coimbatore </h6> 
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs">Phone:</h6>
                  <p className="section__description mb-0">+91 97893 65766</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb">Email:</h6>
                  <p className="section__description mb-0">praveenkumar26833@gmail.com</p>
                </div>

              
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
