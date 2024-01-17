import ServiceCard from "./ServiceCard";

const data = [
  {
    id: "s1",
    img: "/assets/img/service/1.jpg",
    icon: "flaticon-oil-industry",
    heading: "Petrolieum Refinery",
    title:
      "There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor"
  },
  {
    id: "s2",
    img: "/assets/img/service/2.jpg",
    icon: "flaticon-lab-tool",
    heading: "Chemical Research",
    title:
      "There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor"
  },
  {
    id: "s3",
    img: "/assets/img/service/3.jpg",
    icon: "flaticon-eco-factory",
    heading: "Industrial Ecology",
    title:
      "There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor"
  },
  {
    id: "s4",
    img: "/assets/img/service/4.jpg",
    icon: "flaticon-production",
    heading: "Construction Industry",
    title:
      "There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor"
  },
  {
    id: "s5",
    img: "/assets/img/service/5.jpg",
    icon: "flaticon-crane",
    heading: "Civil Engineering",
    title:
      "There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor"
  },
  {
    id: "s6",
    img: "/assets/img/service/6.jpg",
    icon: "flaticon-drilling-machine",
    heading: "Mechanical Engineering",
    title:
      "There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor"
  }
];

const ServicesInfo = () => {
  return (
    <div className="service-area service-two gray-bg section-padding ">
      <div className="container">
        <div className="row">
          {data.length > 0 &&
            data.map((service) => {
              <div
                key={service.id}
                className="col-xl-4 col-lg-4 col-md-6 col-12"
              >
                <ServiceCard service={service} />
              </div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default ServicesInfo;
