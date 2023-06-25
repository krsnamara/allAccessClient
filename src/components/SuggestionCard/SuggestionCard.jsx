import { Link } from "react-router-dom";
import LocationIcon from "../../assets/buttons-icons/location.svg";
import { useScrollToTop } from "../../Utilities/scrollToTop";
import { getRandomNumber, getRandomFloat } from "../../Utilities/randomUtils";
import "./SuggestionCard.css";

export default function Suggestions({ evnt }) {
  useScrollToTop();

  const sugRating = getRandomFloat(3, 5);
  const sugReviewsNumber = getRandomNumber(4, 236);

  const handleScroll = () => {
    const scrollToTop = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > 0) {
        window.scrollTo(0, currentPosition - 50); // Adjust the scroll speed by changing the value (e.g., 50)
        window.requestAnimationFrame(scrollToTop);
      }
    };

    window.requestAnimationFrame(scrollToTop);
  };

  return (
    <div className="sugCard">
      <Link
        to={`/events/${evnt._id}`}
        style={{ color: "black", textDecoration: "none" }}
        onClick={handleScroll}
      >
        <div className="sugCard-heart">
          <img
            src={evnt.imageUrl}
            className="sugCard-img"
            alt={evnt.imageName}
          />
        </div>
        <div className="sugCard-body">
          <div className="sugnameRatingWrapper">
            <h3 className="sugCard-title">{evnt.name}</h3>
            <div className="sugratingWrapper">
              <p className="sugratingText">{sugRating}</p>
              <p className="sugreviewNumber">({sugReviewsNumber})</p>
            </div>
          </div>
          <p className="sugCardType">{evnt.eventType}</p>
          <div className="sugLocation-wrapper">
            <img
              src={LocationIcon}
              alt="locationIcon"
              className="sugLocationIcon"
            />
            <p className="sugLocationText">{evnt.address}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
