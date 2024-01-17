import { PartnerCard } from "./PartnerCard";

const data = [
  {
    id: "p1",
    name: "Fighting Chance Australia",
    img: "/assets/img/partners/FCA.png",
    designation: "House Cleaning"
  },
  {
    id: "p2",
    name: "Absolute Environmental Services",
    img: "/assets/img/partners/AES.png",
    designation: "Construction Cleaning"
  },
  {
    id: "p3",
    name: "Plateau Trees",
    img: "/assets/img/partners/PT.png",
    designation: "Commercial Cleaning"
  },
  {
    id: "p4",
    name: "IPAR - Works insurance",
    img: "/assets/img/partners/IPAR.png",
    designation: "House Cleaning"
  }
];

const Partners = ({ type }) => {
  const index = (i) => {
    let k = i + 2;
    if (type && k > 5) {
      if (k % 5 !== 0) {
        k = (k % 5) + 1;
      } else {
        k = 5;
      }
    }
    return k;
  };

  return (
    <div className="partner-area gray-bg section-padding">
      <div className="container">
        {!type ? (
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h4>Our Partners</h4>
              </div>
            </div>
          </div>
        ) : null}
        <div className="row">
          {data.length > 0 &&
            (!type ? data : data.slice(0, 4)).map((item, i) => (
              <div
                key={item.id}
                className="col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay={`${index(i) * 100}ms`}
              >
                <PartnerCard partner={item} i={i} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
