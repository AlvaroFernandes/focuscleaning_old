import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const banner = [
  {
    id: "b1",
    link: "/services/basic",
    img: "/assets/img/slider/1.jpg",
    heading: "House Cleaning",
    motive: {
      m1: "We provide best satisfied",
      m2: "work for your house"
    },
    title: {
      t1: "Focus Cleaning Sydney is a professional and affordable home cleaning company",
      t2: "With our team of amazing and well-trained cleaners, rest assured that no details will be ignored."
    }
  },
  {
    id: "b2",
    link: "/services/commercial",
    img: "/assets/img/slider/2.jpeg",
    heading: "Commercial Cleaning",
    motive: {
      m1: "We maintain your",
      m2: "office in perfect state"
    },
    title: {
      t1: "Experienced, professional commercial cleaners specialising in offices. ",
      t2: "Our team will leave a clean and organised environment, perfect for your workflow. "
    }
  }
];

const HeroArea = ({ type }) => {
  return (
    <>
      {banner.length > 0 && (
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          speed={2500}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          id="home"
          className="homepage-slides"
        >
          {(type ? banner.slice(0, 2) : banner.slice(2)).map((item) => (
            <SwiperSlide key={item.id} className="single-slide-item">
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="overlay"></div>
              </div>
              <div className="hero-area-content">
                <div className="container">
                  <div className="row justify-content-center">
                    <div
                      className="col-lg-12 wow fadeInUp animated"
                      data-wow-delay=".2s"
                    >
                      <div className="section-title col-12 col-lg-6">
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
                      </div>
                      <Link to="/services/basic" className="main-btn">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default HeroArea;
