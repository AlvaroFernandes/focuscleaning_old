import React from "react";
import "../../assets/scss/jumbotron.scss";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <Container>
        <Row className="justify-content-center">
          <Col className="md-6 align-self-center text-center">
            <h1 className="title">Give yourself a day off!</h1>
            <h6 className="subtitle op-8">Professional cleaning services</h6>
            <Link to="/contacts">
              <Button
                variant="outline-light"
                className="btn btn-rounded btn-md btn-arrow m-t-20"
                data-toggle="collapse"
              >
                Contact us <ArrowRight />
              </Button>
            </Link>
          </Col>
        </Row>
        {/* <div className="p-5 mb-4 jumbotron">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Give yourself a day off!</h1>
            <p className="col-md-8 fs-4">Professional cleaning services</p>
            <Link to="/contacts">
              <Button className="btn btn-lg" type="button">
                Contact us
              </Button>
            </Link>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default Jumbotron;
