import { Col, Container, Row } from "react-bootstrap";
import { Envelope, Facebook, Instagram } from "react-bootstrap-icons";

const HeaderTop = () => {
  return (
    <>
      <div className="header-top dark-bg">
        <Container>
          <Row>
            <Col className="lg-6 md-12 sm-12">
              <div className="contact-info">
                <Envelope className="icon" />
                contact@focuscleaningsydney.com.au
              </div>
            </Col>
            <Col className="lg-6 md-12 sm-12 text-end">
              <div className="site-info">
                <span>Give yourself a day off!</span>
                <div className="social-area">
                  <a href="">
                    <Facebook className="icon" />
                  </a>
                  <a href="">
                    <Instagram className="icon" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeaderTop;
