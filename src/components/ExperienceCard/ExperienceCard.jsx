import { Link } from "react-router-dom";
import LocationIcon from "../../assets/buttons-icons/location.svg";
import LikeButton from "../LikeButton/LikeButton";
import { useScrollToTop } from "../../Utilities/scrollToTop";
import "./ExperienceCard.css";

export default function SingleEvent({ evnt }) {
  useScrollToTop();

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
          <h3 className="expCard-title">{evnt.name}</h3>
          <p className="expCardType">{evnt.eventType}</p>
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
