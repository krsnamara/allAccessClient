import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import LikeButton from "../LikeButton/LikeButton";
import "./ImageCard.css";

export default function SinglePost({ image }) {
  const { id, caption, imageUrl, totalComments, totalLikes } = post;

  return (
    <div className="card">
      <div className="card-picture">
        <div className="like-button">
          <LikeButton />
        </div>
        <img
          src={image.imageUrl}
          className="imagecard-img-top"
          alt={image.imageName}
        />
      </div>
      <Link
        to={`/images/${image._id}`}
        style={{ color: "black", textDecoration: "none" }}
      >
        <div className="imagecard-body">
          <h5 className="imagecard-title">{image.eventType}</h5>
          <div className="location">
            <FaMapMarkerAlt size={24} color="green" />
            <p className="location-text">{image.address}</p>
          </div>
          <div className="Rating">
            <p className="rating-text">Rating: 4.0</p>
            <p className="rating-amount">{"(487)"}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
