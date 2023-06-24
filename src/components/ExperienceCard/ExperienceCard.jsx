import { Link } from "react-router-dom";
import LocationIcon from "../../assets/buttons-icons/location.svg";
import LikeButton from "../LikeButton/LikeButton";
import "./ExperienceCard.css";

export default function SingleEvent({ evnt }) {
  return (
    <div className="expCard">
      <div className="expCard-heart">
        <div className="like-button">
          <LikeButton />
        </div>
        <img src={evnt.imageUrl} className="expCard-img" alt={evnt.imageName} />
      </div>
      <Link
        to={`/events/${evnt._id}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <div className="expCard-body">
          <p className="expCard-title">{evnt.name}</p>
          <div className="expLocation-wrapper">
            <img
              src={LocationIcon}
              alt="locationIcon"
              className="expLocationIcon"
            />
            <p className="expLocationText">{evnt.address}</p>
          </div>
          <div className="ratingWrapper">
            <p className="ratingText">4.0</p>
            <p className="rating-amount">{"(487)"}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
