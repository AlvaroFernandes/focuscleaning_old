import { useEffect, useState } from "react";
import {
  HeaderTop,
  HeaderArea,
  HeroArea,
  Cards,
  Testimonial
} from "../components";
import axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/data/banner.json")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HeaderTop />
      <HeaderArea />
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <HeroArea type={true} data={data} />
      )}
      <Cards />
      <Testimonial />
    </>
  );
};

export default Home;
