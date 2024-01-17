import { useState, useEffect } from "react";

const useGetData = (initialState, urlData) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        const req = await fetch(urlData);

        const res = await req.json();

        if (isMounted) setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      isMounted = false;
    };
  }, []);

  return data;
};

export default useGetData;
