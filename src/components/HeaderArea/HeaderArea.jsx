import { useState } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./header.css";
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
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="logo">
                    <Link className="navbar-brand" to="/">
                      <img src="/assets/img/logo.png" alt="Focus Cleaning" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
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
                            <Link
                              to="/"
                              onMouseOver={() => setActiveMenu("home")}
                              className={`nav-link ${
                                activeMenu === "home" ? "active" : ""
                              }`}
                            >
                              Home
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/about"
                              onMouseOver={() => setActiveMenu("about")}
                              className={`nav-link ${
                                activeMenu === "about" ? "active" : ""
                              }`}
                            >
                              About
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/services"
                              onMouseOver={() => setActiveMenu("services")}
                              className={`nav-link ${
                                activeMenu === "services" ? "active" : ""
                              }`}
                            >
                              Services
                              <span className="sub-nav-toggler"></span>
                            </Link>
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
                                <Link to="/services/endoflease">
                                  End of Lease Cleaning
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/spring">
                                  Spring Cleaning
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link
                              onMouseOver={() => setActiveMenu("contact")}
                              className={`nav-link ${
                                activeMenu === "contact" ? "active" : ""
                              }`}
                              to="/contact"
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <MobileMenu showNav={showNav} setShowNav={setShowNav} />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderArea;
