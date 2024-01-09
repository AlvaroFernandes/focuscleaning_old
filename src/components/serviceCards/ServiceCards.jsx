import React from "react";
import "../../assets/scss/serviceCards.scss";
import basicImg from "../../assets/images/cards/basic.jpg";
import constructionImg from "../../assets/images/cards/construction.jpg";
import springImg from "../../assets/images/cards/spring.jpg";
import commercialImg from "../../assets/images/cards/commercial.jpg";
import premiumImg from "../../assets/images/cards/premium.jpg";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Basic Cleaning",
    image: basicImg,
    text: "Lorem ipsum dolor sit amet.",
    link: "/services/basic"
  },
  {
    id: 2,
    title: "Commercial Cleaning",
    image: commercialImg,
    text: "Lorem ipsum dolor sit amet.",
    link: "/services/commercial"
  },
  {
    id: 3,
    title: "Construction Cleaning",
    image: constructionImg,
    text: "Lorem ipsum dolor sit amet.",
    link: "/services/construction"
  },
  {
    id: 4,
    title: "End Of Lease Cleaning",
    image: basicImg,
    text: "Lorem ipsum dolor sit amet.",
    link: "/services/endoflease"
  },
  {
    id: 5,
    title: "Premium Cleaning",
    image: premiumImg,
    text: "Lorem ipsum dolor sit amet.",
    link: "/services/premium"
  },
  {
    id: 6,
    title: "Spring Cleaning",
    image: springImg,
    text: "Lorem ipsum dolor sit amet.",
    link: "/services/spring"
  }
];
const ServiceCards = () => {
  return (
    <div className="cards">
      <Container>
        <Row
          className="justify-content-center"
          style={{ marginBottom: "10px" }}
        >
          <Col className="md-7 text-center">
            <h2 className="title">Our Services</h2>
          </Col>
        </Row>
        <Row className="mt-40">
          {cards.map(({ title, image, text, link, id }) => (
            <Col className="col-md-4 mb-3" key={id}>
              <Card className="shadow">
                <Link className="img-card" to={link}>
                  <Card.Img
                    variant="top"
                    className="card-img-top"
                    src={image}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServiceCards;
