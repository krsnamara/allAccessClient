import { useParams, useNavigate } from "react-router-dom";
import StaticRender from "../../../assets/static_renders/static_evntsShow.png";
import "./ImageShow.css";

function Image(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    props
      .deleteImages(id)
      .then(() => {
        // Handle successful deletion, such as showing a success message or navigating back to a different page
        navigate("/images"); // Navigates back to the ImagesIndex page
      })
      .catch((error) => {
        // Handle error during deletion, such as displaying an error message
        console.error("Error deleting image:", error);
      });
  };

  const image = props.images
    ? props.images.find((image) => image._id === id)
    : null;

  const loaded = () => {
    if (!image) {
      // Image not found, handle the error condition
      return <h2>Image not found</h2>;
    }
    return (
      <div className="imageShowWrapper">
        <img src={image.imageUrl} alt={image.imageUrl} className="imageImage" />
        <h1>{image.name}</h1>
        <h3>{image.eventType}</h3>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={handleDelete}>Delete</button>
        <img src={StaticRender} alt="StaticRender" className="staticRender" />
      </div>
    );
  };

  const loading = () => {
    return <h2>Loading...</h2>;
  };

  return <section>{props.images ? loaded() : loading()}</section>;
}

export default Image;
