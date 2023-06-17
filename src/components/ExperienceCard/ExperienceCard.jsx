import { Link } from "react-router-dom";
import LocationIcon from "../../assets/buttons-icons/location.svg";
import LikeButton from "../LikeButton/LikeButton";
import "./ExperienceCard.css";

export default function SinglePost({ image }) {
  return (
    <div className="expCard">
      <div className="expCard-heart">
        <div className="like-button">
          <LikeButton />
        </div>
        <img
          src={image.imageUrl}
          className="expCard-img"
          alt={image.imageName}
        />
      </div>
      <Link
        to={`/images/${image._id}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <div className="expCard-body">
          <p className="expCard-title">{image.name}</p>
          <div className="expLocation-wrapper">
            <img
              src={LocationIcon}
              alt="locationIcon"
              className="expLocationIcon"
            />
            <p className="expLocationText">{image.address}</p>
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
