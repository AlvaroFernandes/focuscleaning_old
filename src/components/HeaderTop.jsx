import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderTop = () => {
  return (
    <>
      <div className="header-top dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-info">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="header-top-icon"
                />
                contact@focuscleaningsydney.com.au
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-end">
              <div className="site-info">
                <span>Give yourself a day off!</span>
                <div className="social-area">
                  <a href="">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="header-top-icon"
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="header-top-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
