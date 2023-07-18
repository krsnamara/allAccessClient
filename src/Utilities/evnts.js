import { useState, useEffect, useRef } from "react";
import { API_URLS } from "../urls";

const useEvnts = () => {
  const [evnts, setEvnts] = useState(null);

  const getEvntsRef = useRef(null);

  const URL = API_URLS.IMAGES;

  const getEvnts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setEvnts(data);
  };

  useEffect(() => {
    const getEvnts = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setEvnts(data);
    };

    getEvnts();
  }, []);

  // console.log(`evnts.js line 17 ${JSON.stringify(evnts)}`);
  // console.log(`evnts.js line 18 ${URL}`);

  // const createEvnts = async (evnts) => {
  //   const response = await fetch(URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "Application/json",
  //     },
  //     body: JSON.stringify(evnts),
  //   });
  //   if (response.ok) {
  //     getEvnts();
  //   }
  // };

  const createEvnts = async (evnts) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(evnts),
      });
    } catch (error) {
      console.log(error);
    }
    getEvnts();
  };

  const updateEvnts = async (id, updatedEvnt) => {
    const response = await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(updatedEvnt),
    });
    getEvnts();
  };

  const deleteEvnts = async (id) => {
    const response = await fetch(URL + id, {
      method: "DELETE",
    });
    if (response.ok) {
      getEvnts();
    }
  };

  useEffect(() => {
    getEvntsRef.current = getEvnts;
  });

  //without user
  useEffect(() => {
    getEvntsRef.current();
  }, []);

  return {
    evnts,
    createEvnts,
    updateEvnts,
    deleteEvnts,
  };
};

export default useEvnts;
