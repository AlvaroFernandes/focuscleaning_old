import { useState, useEffect } from "react";

const useGetData = (initialValue, link) => {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      try {
        const req = await fetch(link);
        const res = await req.json();
        console.log(res);
        if (isMounted) {
          setData(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      isMounted = false;
    };
  }, [link]);
  return data;
};

export default useGetData;
