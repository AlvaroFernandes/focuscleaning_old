import { Container, Row, Col } from "react-bootstrap";

const FooterBottom = () => {
  return (
    <>
      <div className="footer-bottom">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col className="lg-6 md-6 sm-12">
              <p className="copyright-line">
                © 2024 Focus Cleaning. All rights reserved.
              </p>
            </Col>
            <Col className="lg-6 md-6 sm-12 text-end">
              <p className="privacy">
                Developed by:{" "}
                <a
                  href="http://alvarofernandes.com.au"
                  target="self"
                  className="link-external"
                >
                  Alvaro Fernandes
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FooterBottom;
