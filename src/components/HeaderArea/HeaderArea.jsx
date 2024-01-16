import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import logo from "@/assets/images/logos/logo.png";
import MobileMenu from "./MobileMenu";

const HeaderArea = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [showNav, setShowNav] = useState(false);

  const [scrolled] = useOutletContext();

  return (
    <>
      <header className="header-area">
        <div
          className={`sticky-area ${scrolled ? "header__fixed is-sticky" : ""}`}
        >
          <div className="navigation">
            <Container>
              <Row>
                <Col className="lg-3">
                  <div className="logo">
                    <Link className="navbar-brand" to="/">
                      <img src={logo} alt="Focus Cleaning" />
                    </Link>
                  </div>
                </Col>
                <Col className="lg-6">
                  <div className="main-menu">
                    <nav className="navbar navbar-expand-lg">
                      <button
                        onClick={() => setShowNav((p) => !p)}
                        className={`navbar-toggler ${showNav ? "active" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div
                        className="collapse navbar-collapse justify-content-center prev-nav"
                        id="navbarSupportedContent"
                      >
                        <ul className="navbar-nav m-auto">
                          <li className="nav-item">
                            <a
                              onMouseOver={() => setActiveMenu("home")}
                              className={`nav-link ${
                                activeMenu === "home" ? "active" : ""
                              }`}
                              href="#"
                            >
                              Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              onMouseOver={() => setActiveMenu("about")}
                              className={`nav-link ${
                                activeMenu === "about" ? "active" : ""
                              }`}
                              href="#"
                            >
                              About
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              onMouseOver={() => setActiveMenu("services")}
                              className={`nav-link ${
                                activeMenu === "services" ? "active" : ""
                              }`}
                              href="#"
                            >
                              Services
                              <span className="sub-nav-toggler"></span>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <Link to="/services/basic">Basic Cleaning</Link>
                              </li>
                              <li>
                                <Link to="/services/commercial">
                                  Commercial Cleaning
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/construction">
                                  Construction Cleaning
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/premiun">
                                  Premiun Cleaning
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/elc">
                                  End of Lease Cleaning
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/Spring">
                                  Spring Cleaning
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a
                              onMouseOver={() => setActiveMenu("contact")}
                              className={`nav-link ${
                                activeMenu === "contact" ? "active" : ""
                              }`}
                              href="#"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                      <MobileMenu showNav={showNav} setShowNav={setShowNav} />
                    </nav>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderArea;
