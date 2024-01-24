import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-up">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="/" className="logo">
                <img src="/assets/img/logo.png" alt="focuscleaning-logo" />
              </a>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>Contact</h5>
              <div className="company-email">
                <a href="#">contact@focuscleaning.com.au</a>
              </div>
              <div className="phone-number">
                <p>0444 444 444</p>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
              <h5>Links</h5>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h5>Get in touch</h5>
              <ul>
                <li>
                  <div className="social-area">
                    <a
                      href="https://www.facebook.com/focuscleaningsydney.com.au/"
                      target="_blank"
                    >
                      <i className="footer-icon fa fa-facebook" /> Facebook
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="footer-icon"
                      />{" "}
                      Instagram
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
