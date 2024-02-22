import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";


const socialLinks = [

  {
    url: "www.instagram.com/pravee._in?utm_source=qr",
    icon: "ri-instagram-line",
  },
  {
    url: "www.linkedin.com/in/praveen-kumar-c-0936a028a",
    icon: "ri-linkedin-line",
  },

];

const Contact = () => {
  return (
      <section>
        <Container>
          
            <div className="footers">
                <div className="contact__info">
                <p className="section__description mb-0">
                  Coimbatore 
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h4 className="fs-6 mb-0">Phone:</h4>
                  <p className="section__description mb-0">+91 97893 65766</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h4 className="mb-0 fs-6">Email:</h4>
                  <p className="section__description mb-0">praveenkumar26833@gmail.com</p>
                </div>
                </div>
                <h4 className="fw-bold mt-4">Follow Us</h4>
                 </div>
                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              
            
          
        </Container>
      </section>
   );
};
const Footer = () => {
  
  
  return (
    <footer className="footer">
      <Container>
        <Row>
        <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                  Praveen Rentals
                  </span>
                </Link>
              </h1>
            </div>
        </Col>
        </Row>
        <Row>
        <Col>
        <Contact/>
        </Col>
        </Row>
     </Container>
    </footer>
  );
};

export default Footer;
