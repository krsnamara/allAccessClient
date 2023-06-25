import { Link } from "react-router-dom";
import LocationIcon from "../../assets/buttons-icons/location.svg";
import LikeButton from "../LikeButton/LikeButton";
import { useScrollToTop } from "../../Utilities/scrollToTop";
import "./ExperienceCard.css";

export default function SingleEvent({ evnt }) {
  useScrollToTop();

  const getRandomFloat = (min, max) => {
    const decimalPlaces = 1;
    const randomNumber = (Math.random() * (max - min) + min).toFixed(
      decimalPlaces
    );
    return parseFloat(randomNumber);
  };

  const rating = getRandomFloat(3, 5);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const reviewsNumber = getRandomNumber(4, 236);

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
          <div className="nameRatingWrapper">
            <h3 className="expCard-title">{evnt.name}</h3>
            <div className="ratingWrapper">
              <p className="ratingText">{rating}</p>
              <p className="reviewNumber">({reviewsNumber})</p>
            </div>
          </div>
          <p className="expCardType">{evnt.eventType}</p>
          <div className="expLocation-wrapper">
            <img
              src={LocationIcon}
              alt="locationIcon"
              className="expLocationIcon"
            />
            <p className="expLocationText">{evnt.address}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
