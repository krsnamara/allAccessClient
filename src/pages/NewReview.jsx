import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Review(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const formFields = {
    name: "",
    title: "",
    image: "",
    rating: 0,
  };

  const review = props.reviews
    ? props.reviews.find((review) => review._id === id)
    : null;

  const [editForm, setEditForm] = useState(formFields);

  useEffect(() => {
    if (review) {
      setEditForm(review);
    }
  }, [review]);

  const handleChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleRatingChange = (rating) => {
    setEditForm({
      ...editForm,
      rating,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateReviews(id, editForm);
  };

  const renderStars = (rating) => {
    const starIcons = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? "star active" : "star";
      starIcons.push(
        <span
          key={i}
          className={starClass}
          onClick={() => handleRatingChange(i)}
        >
          ★
        </span>
      );
    }
    return starIcons;
  };

  const loaded = () => {
    return (
      <div className="review">
        <h1>{editForm.name}</h1>
        <h3>{editForm.title}</h3>
        {editForm.image && <img src={editForm.image} alt={editForm.name} />}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={editForm.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            value={editForm.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            value={editForm.image}
            onChange={handleChange}
          />
          <div>
            Rating:
            <div className="rating">{renderStars(editForm.rating)}</div>
          </div>
          <input type="submit" value="Update Review" />
        </form>
        <button onClick={handleDelete}>Delete This Review</button>
      </div>
    );
  };

  const loading = () => {
    return <h2>Loading...</h2>;
  };

  const handleDelete = () => {
    props.deleteReviews(id);
    navigate("/");
  };

  return <section>{props.reviews ? loaded() : loading()}</section>;
}

export default Review;
