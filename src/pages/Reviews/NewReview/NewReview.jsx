import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewReview.css";

function NewReview(props) {
  const formFields = {
    name: "",
    image: "",
    title: "",
  };

  const [newForm, setNewForm] = useState(formFields);
  const navigate = useNavigate(); // access the navigate function

  const handleChange = (event) => {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createReviews(newForm);
    setNewForm(formFields);
    navigate("/reviews"); // redirect to the reviews page after successful submission
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={newForm.name}
            placeholder="Whats the Name?"
          />
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={newForm.image}
            placeholder="Enter URL of Image"
          />
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={newForm.title}
            placeholder="What is the title"
          />
          <input type="submit" value="Submit Review" />
        </form>
      </section>
    </>
  );
}

export default NewReview;
