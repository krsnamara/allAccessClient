import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import "./NewEvnt.css";

function NewEvnt(props) {
  const formFields = {
    name: "",
    image: "",
    type: "",
    description: "",
    reservation: "",
    website: "",
    address: "",
  };

  const [newForm, setNewForm] = useState(formFields);
  const navigate = useNavigate(); // access the navigate function

  const handleSelectChange = (event) => {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = (event) => {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value,
    });
  };

  const [file, setFile] = useState();

  const submit = async (event) => {
    event.preventDefault();
    props.createEvnts(newForm);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", newForm.name);
    formData.append("type", newForm.type);
    formData.append("description", newForm.description);
    formData.append("reservation", newForm.reservation);
    formData.append("website", newForm.website);
    formData.append("address", newForm.address);

    setNewForm(formFields);

    try {
      await axios.post("http://localhost:4000/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      window.alert("New Event has been successfully created");
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <>
      <section className="new-event-form-container">
        <div className="back-button-container">
          <Link to="/" className="back-button-link">
            <IoChevronBackCircleOutline className="back-link" />
            Back
          </Link>
        </div>
        <h2 className="create-new-event-title">Create New Event</h2>
        <form onSubmit={submit} className="new-event-form">
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
          <select
            id="eventTypes"
            name="type"
            className="create-new-event-input"
            required
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Enter event type
            </option>
            <option value="arts-culture">Arts & Culture</option>
            <option value="classes-workshops">Classes & Workshops</option>
            <option value="seasonal-occasions">Seasonal Occasions</option>
            <option value="outdoor-activities">Outdoor Activities</option>
            <option value="sightseeing">Sightseeing</option>
            <option value="uniquie-experiences">Uniquie Experiences</option>
          </select>
          <h4 className="input-title">Add photo</h4>
          <input
            onChange={fileSelected}
            type="file"
            name="imageName"
            accept="image/*"
            className="create-new-event-input"
            placeholder="Enter URL of Image"
          />
          <h4 className="input-title">Event Description*</h4>
          <textarea
            className="create-new-event-textarea"
            type="text"
            name="description"
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
          <select
            id="reservation"
            name="reservation"
            value={newForm.reservation}
            className="create-new-event-input"
            required
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Are reservations required?
            </option>
            <option value="no">No</option>
            <option value="yes-purchase">Yes (Purchase ticket)</option>
            <option value="yes-free">Yes (Free event)</option>
          </select>
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
          <h4 className="input-title">Location*</h4>
          <input
            className="create-new-event-input"
            type="text"
            name="address"
            onChange={handleChange}
            value={newForm.address}
            placeholder="Enter event Location"
            required
          />
          <button type="submit" className="input-submit-button cursor-pointer">
            Submit
          </button>

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
