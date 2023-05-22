import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./NewEvnt.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";

function NewEvnt(props) {
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
    props.createEvnts(newForm);
    setNewForm(formFields);
    navigate("/evnts"); // redirect to the evnts page after successful submission
  };

  return (
    <>
      <section className="new-event-form-container">
        <div className="back-button-container">
          <Link className="back-button-link">
            <IoChevronBackCircleOutline className="back-link" />
            Back
          </Link>
        </div>
        <h2 className="create-new-event-title">Create New Event</h2>
        <form onSubmit={handleSubmit} className="new-event-form">
          <h4 className="input-title">Event Name*</h4>
          <input
            className="create-new-event-input"
            type="text"
            name="name"
            onChange={handleChange}
            value={newForm.name}
            placeholder="Enter event name"
            required
          />
          <h4 className="input-title">Event Type*</h4>
          <input
            className="create-new-event-input"
            type="text"
            name="name"
            onChange={handleChange}
            value={newForm.eventType}
            placeholder="Enter event type"
            required
          />
          {/* TODO: Change to Drop Down*/}
          {/* <select
            className="create-new-event-input"
            id="event-types" 
            name="event-types"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <input
            type="submit"
            name="eventType"
            onSubmit={handleChange}
            value={newForm.eventType}
            placeholder="Enter event type"
            required */}
          <h4 className="input-title">Add photo URL</h4>
          <input
            className="create-new-event-input"
            type="text"
            name="image"
            onChange={handleChange}
            value={newForm.image}
            placeholder="Enter URL of Image"
          />
          <h4 className="input-title">Event Description*</h4>
          <textarea
            className="create-new-event-textarea"
            type="text"
            name="name"
            onChange={handleChange}
            value={newForm.description}
            placeholder="A few details about your event"
            required
            rows="8"
            cols="30"
            align="middle"
          />
          {/* TODO: change to drop down */}
          <h4 className="input-title">Reservation Required*</h4>
          <input
            className="create-new-event-input"
            type="text"
            name="reservation"
            onChange={handleChange}
            value={newForm.reservation}
            placeholder="Are reservations required?"
            required
          />
          <h4 className="input-title">Event Website*</h4>
          <input
            className="create-new-event-input"
            type="text"
            name="website"
            onChange={handleChange}
            value={newForm.website}
            placeholder="Please enter http://format"
            required
          />
          <input
            className="input-submit-button"
            type="submit"
            value="Create Event"
          />

          {/* STREtCH GOALS */}
          {/* <input
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
          <input type="submit" value="Create Event" /> */}
        </form>
      </section>
    </>
  );
}

export default NewEvnt;
