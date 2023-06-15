import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import LikeButton from "../../../components/LikeButton/LikeButton";
import axios from "axios";
import "./ImagesIndex.css";

function ImagesIndex(props) {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/images");
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <section className="flex-container">
      {events.map((image) => (
        <div key={image._id} className="imagesIndexWrapper">
          <div className="imagecard">
            <div className="imagecard-picture">
              <div className="like-button">
                <LikeButton />
              </div>
              <img
                src={image.imageUrl}
                className="imagecard-img-top"
                alt={image.imageUrl}
              />
            </div>
            <div className="imagecard-body">
              <h5 className="imagecard-title">{image.name}</h5>
              <Link
                to={`/images/${image._id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <div className="location">
                  <FaMapMarkerAlt size={24} color="green" />
                  <p className="location-text">{image.address}</p>
                </div>
              </Link>
              <div className="Rating">
                <p className="rating-text">Rating: 4.0</p>
                <p className="rating-amount">{"(487)"}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ImagesIndex;
