import { PartnerCard } from "./PartnerCard";

const Partners = ({ type, data }) => {
  const partners = data.partners;

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
          {partners.length > 0 &&
            (!type ? partners : partners.slice(0, 4)).map((item, i) => (
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
