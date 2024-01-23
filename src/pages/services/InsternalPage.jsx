import { useEffect, useState } from "react";
import { Breadcrumbs, HeaderArea, ServiceDetails } from "../../components";
import axios from "axios";

const InternalPage = ({ page }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("/data/details.json")
      .then((res) => {
        const x = res.data;
        setData(x);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HeaderArea />
      <Breadcrumbs />
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <ServiceDetails data={data} page={page} />
      )}
    </>
  );
};

export default InternalPage;
