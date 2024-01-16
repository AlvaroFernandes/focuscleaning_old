import useGetData from "@/hooks/useGetData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import banner from "@/data/banner.json";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroArea = () => {
  const sliderItems = banner.banner;
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={1500}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        id="home"
        className="homepage-slides"
      >
        {sliderItems.map((item) => {
          return (
            <SwiperSlide key={item.id} className="single-slide-item">
              <div
                className="image-layer"
                style={{ backgroundImage: `url(@${item.img})` }}
              >
                <div className="overlay"></div>
              </div>
              <div className="hero-area-content">
                <Container>
                  <Row className="justify-content-center">
                    <Col
                      className="lg-12 wow fadeInUp animated"
                      data-wow-delay=".2s"
                    >
                      <Col className="section-title col-12 lg-6">
                        <h6>{item.heading}</h6>
                        <h1>
                          {item.motive.m1}
                          <br />
                          <b>{item.motive.m2}</b>
                        </h1>
                        <p>
                          {item.title.t1}
                          <br />
                          {item.title.t2}
                        </p>
                      </Col>
                      <Link to="/services/basic" className="main-btn">
                        Learn More
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HeroArea;
