import { useParams, useNavigate } from "react-router-dom";
import "../ReviewShow/ReviewShow.css";

function Review(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const review = props.reviews
    ? props.reviews.find((review) => review._id === id)
    : null;

  const loaded = () => {
    return (
      <div className="review">
        <h1>This is a single Review Page</h1>
        <h1>{review.name}</h1>
        <p>{review.comment}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  };

  const loading = () => {
    return <h2>Loading...</h2>;
  };

  return <section>{props.reviews ? loaded() : loading()}</section>;
}

export default Review;
