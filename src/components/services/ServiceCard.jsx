import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowDownRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <>
      <div className="sigle-service-area mb-50">
        <div className="service-img">
          <img src={service.img} alt={service.id} />
          <div className="service-icon">
            <span>
              <FontAwesomeIcon icon={service.icon} />
            </span>
          </div>
        </div>
        <div className="service-content white-bg">
          <h5>{service.headeing}</h5>
          <p>{service.title}</p>
          <hr />
          <Link to={`/services/${service.link}`} className="read-more">
            <FontAwesomeIcon icon={ArrowDownRight} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
