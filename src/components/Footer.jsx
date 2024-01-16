import { Col, Container, Row } from "react-bootstrap";
import logo from "@/assets/images/logos/198.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer-area">
      <Container>
        <div className="footer-up">
          <Row>
            <Col className="lg-4 md-6 sm-12">
              <a href="/" className="logo">
                <img src={logo} alt="focuscleaning-logo" />
              </a>
            </Col>
            <Col className="lg-2 md-6">
              <h5>Contact</h5>
              <div className="company-email">
                <a href="#">contact@focuscleaning.com.au</a>
              </div>
              <div className="phone-number">
                <p>0444 444 444</p>
              </div>
            </Col>
            <Col className="lg-2 offset-lg-1 md-6 sm-12">
              <h5>Links</h5>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Col>
            <Col className="lg-3 md-6 sm-12">
              <h5>Get in touch</h5>
              <ul>
                <li>
                  <div className="social-area">
                    <a href="#">
                      <Facebook className="icon" /> Facebook
                    </a>
                    <a href="#">
                      <Instagram className="icon" />
                      Instagram
                    </a>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
