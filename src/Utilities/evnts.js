import { useState, useEffect, useRef } from "react";
import { API_URLS } from "../urls";

const useEvnts = (props) => {
  const [evnts, setEvnts] = useState(null);

  const getEvntsRef = useRef(null);

  const URL = API_URLS.IMAGES;

  const getEvnts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setEvnts(data);
  };

  console.log(`evnts.js line 17 ${JSON.stringify(evnts)}`);
  console.log(`evnts.js line 18 ${URL}`);

  const createEvnts = async (evnts) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(evnts),
    });
    getEvnts();
  };

  const updateEvnts = async (id, updatedEvnt) => {
    const token = await props.user.getIdToken();
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(updatedEvnt),
    });
    getEvnts();
  };

  const deleteEvnts = async (id) => {
    const token = await props.user.getIdToken();
    await fetch(URL + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    getEvnts();
  };

  useEffect(() => {
    getEvntsRef.current = getEvnts;
  });

  useEffect(() => {
    if (props.user) {
      getEvntsRef.current();
    } else {
      setEvnts(null);
    }
  }, [props.user]);

  return {
    evnts,
    createEvnts,
    updateEvnts,
    deleteEvnts,
  };
};

export default useEvnts;
