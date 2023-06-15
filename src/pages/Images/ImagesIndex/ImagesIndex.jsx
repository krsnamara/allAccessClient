import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import LikeButton from "../../../components/LikeButton/LikeButton";
import "./ImagesIndex.css";

function imagesIndex(props) {
  // console.log("props:", props);
  const loaded = () => {
    return props.images.map((image) => (
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
            <h5 className="imagecard-title">{image.eventType}</h5>
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
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section className="flex-container">
      {props.images ? loaded() : loading()}
    </section>
  );
}

export default imagesIndex;
