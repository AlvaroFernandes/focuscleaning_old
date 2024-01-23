import { useEffect, useState } from "react";
import "./serviceDetails.css";

const ServiceDetails = ({ data, page }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    switch (page) {
      case "basic":
        {
          setDetails(data.basic);
          setLoading(false);
        }

        break;
      case "commercial":
        {
          {
            setDetails(data.commercial);
            setLoading(false);
          }
        }
        break;
      case "construction":
        {
          {
            setDetails(data.construction);
            setLoading(false);
          }
        }
        break;
      case "premiun":
        {
          {
            setDetails(data.premiun);
            setLoading(false);
          }
        }
        break;
      default:
        break;
    }
  }, [page]);

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="project-single-section section-padding pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-aling-center">
                <h3>{details.title}</h3>
                <div className="row">
                  <div className="col-lg-8">
                    {details.intro.map((item, i) => {
                      return (
                        <div key={i}>
                          <p>{item}</p>
                          <br />
                        </div>
                      );
                    })}
                  </div>
                  <div className="col-lg-4">
                    <div className="project-feature-img">
                      <img src={details.img} alt="" />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <h4>{details.subtitle}</h4>
                    {details.services.map((item, i) => (
                      <div className="list-details" key={i}>
                        <div className="title-details">
                          <i className={item.icon}></i>
                          <h5>{item.title}</h5>
                        </div>
                        <ul className="service-details">
                          {item.details.map((x, i) => (
                            <li key={i}>
                              <p>{x}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                {details.options === "" ? (
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="details-options">
                        <span>Options: </span>
                        <br />
                        {details.options}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
