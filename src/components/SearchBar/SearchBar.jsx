import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URLS } from "../../urls";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

export default function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState("");
  const URL = API_URLS.SEARCH + "events";
  const searchResultsRef = useRef(null);

  useEffect(() => {
    const search = async () => {
      try {
        if (!keyword.trim()) {
          setSearchResult([]);
          return;
        }
        const res = await axios.get(URL, {
          params: { keyword: keyword, limit: 5 },
        });
        setSearchResult(res.data.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [keyword]);

  useEffect(() => {
    // Add event listener to handle click outside search results
    const handleClickOutside = (event) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target)
      ) {
        setSearchResult([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = () => {
    setSearchResult([]);
    setKeyword("");
  };

  return (
    <form>
      <div className="searchWrapper">
        <input
          type="text"
          className="formControl"
          placeholder="Event, location, or type"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {searchResult && searchResult.length > 0 && (
          <div className="searchResults" ref={searchResultsRef}>
            {searchResult.map((evnt) => (
              <Link
                to={`/events/${evnt._id}`}
                style={{ color: "black", textDecoration: "none" }}
                onClick={handleSuggestionClick}
              >
                <div className="eventItem" key={evnt._id}>
                  <img src={evnt.imageUrl} alt="imageurl" />
                  <div className="eventInfoText">
                    <h3 className="eventName">{evnt.name}</h3>
                    <p className="eventType">{evnt.eventType}</p>
                  </div>
                  {/* <p className="eventInfo">{evnt.description}</p> */}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}

// https://www.youtube.com/watch?v=OwqkFjXG_sI&t=251s&ab_channel=NHNTV is the source of the search bar code
