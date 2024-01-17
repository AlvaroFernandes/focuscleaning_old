import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBuilding,
  faTrowelBricks
} from "@fortawesome/free-solid-svg-icons";
const cards = [
  {
    id: "p1",
    heading: "Residencial Solution",
    title:
      "Industry is main lorem ipsum dolor amet, consectetur adipisicing elit.",
    icon: faHouse
  },
  {
    id: "p2",
    heading: "Commercial Solutions",
    title:
      "Industry is main lorem ipsum dolor amet, consectetur adipisicing elit.",
    icon: faBuilding
  },
  {
    id: "p3",
    heading: "Constuction Solutions",
    title:
      "Industry is main lorem ipsum dolor amet, consectetur adipisicing elit.",
    icon: faTrowelBricks
  }
];

const Cards = () => {
  return (
    <>
      <div className="promo-area">
        <div className="container">
          <div className="row" v-if="promo.length > 0">
            {cards.length > 0 &&
              cards.map((item, i) => (
                <div key={item.id} className="col-lg-4 col-12">
                  <div
                    className={`single-promo-item mb-50 ${
                      i === 1 ? "spro" : ""
                    }`}
                  >
                    <div className="promo-icon">
                      <FontAwesomeIcon icon={item.icon} className="card-icon" />
                    </div>
                    <h5>{item.heading}</h5>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
