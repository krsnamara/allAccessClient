import { useState, useEffect, useRef } from "react";
import { API_URLS } from "../urls";
import axios from "axios";

const useEvnts = (props) => {
  const [evnts, setEvnts] = useState(null);
  const getEvntsRef = useRef(null);

  const URL = `${API_URLS.EVNTS}`;

  const getEvnts = async () => {
    try {
      const token = await props.user.getIdToken();
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEvnts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createEvnts = async (event) => {
    if (!props.user) return;

    try {
      const token = await props.user.getIdToken();
      await axios.post(URL, event, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      getEvnts();
    } catch (error) {
      console.log(error);
    }
  };

  const updateEvnts = async (id, updatedEvnt) => {
    try {
      const token = await props.user.getIdToken();
      await axios.put(`${URL}/${id}`, updatedEvnt, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      getEvnts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEvnts = async (id) => {
    try {
      const token = await props.user.getIdToken();
      await axios.delete(`${URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getEvnts();
    } catch (error) {
      console.log(error);
    }
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
