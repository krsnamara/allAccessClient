import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './NewEvnt.css'


function NewEvnt(props) {
  const formFields = {
    name: "",
    image: "",
    title: ""
  };

  const [newForm, setNewForm] = useState(formFields);
  const navigate = useNavigate(); // access the navigate function

  const handleChange = (event) => {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createEvnts(newForm);
    setNewForm(formFields);
    navigate("/evnts"); // redirect to the evnts page after successful submission
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
            name="eventType"
            onChange={handleChange}
            value={newForm.eventType}
            placeholder="What is the eventType"
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
            name="description"
            onChange={handleChange}
            value={newForm.description}
            placeholder="What is the description"
          />
          <input
            type="text"
            name="reservation"
            onChange={handleChange}
            value={newForm.reservation}
            placeholder="What is the reservation"
          />
          <input
            type="text"
            name="website"
            onChange={handleChange}
            value={newForm.website}
            placeholder="What is the website"
          />
          <input
            type="text"
            name="suitability"
            onChange={handleChange}
            value={newForm.suitability}
            placeholder="What is the suitability"
          />
          <input
            type="text"
            name="amenities"
            onChange={handleChange}
            value={newForm.amenities}
            placeholder="What is the amenities"
          />
          <input
            type="text"
            name="categories"
            onChange={handleChange}
            value={newForm.categories}
            placeholder="What is the categories"
          />
          <input
            type="text"
            name="foodNightlife"
            onChange={handleChange}
            value={newForm.foodNightlife}
            placeholder="What is the foodNightlife"
          />
          <input
            type="text"
            name="atractions"
            onChange={handleChange}
            value={newForm.atractions}
            placeholder="Attractions Here"
          />
          <input type="submit" value="Create Event" />
        </form>
      </section>
    </>
  );
}

export default NewEvnt;
