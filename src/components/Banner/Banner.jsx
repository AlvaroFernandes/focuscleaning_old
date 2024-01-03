import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Col, Container, Row } from "reactstrap";

const Banner = () => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">Focus Cleaning</h1>
            <h4 className="subtitle font-light">
              Give your self a day off!!
              <br />
              Professional Cleaning Services
            </h4>
            <Link
              to="/about"
              className="btn btn-md m-t-30 btn-info-gradient font-14"
            >
              About us
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
