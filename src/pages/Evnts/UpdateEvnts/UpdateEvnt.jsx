import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URLS } from "../../../urls";
import AddPhoto from "../../../assets/buttons-icons/add-photo.svg";
import AddPhotoHover from "../../../assets/buttons-icons/add-photo-hover.svg";
import "./NewEvnt.css";

function NewEvnt(props) {
  const formFields = {
    name: "",
    image: "",
    eventType: "",
    description: "",
    reservation: "",
    website: "",
    address: "",
  };

  const URL = API_URLS.IMAGES;

  const [newForm, setNewForm] = useState(formFields);
  const [isHovered, setIsHovered] = useState(false);
  const [isPhotoSelected, setIsPhotoSelected] = useState(false);
  const [file, setFile] = useState();

  const navigate = useNavigate();

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

  const handleMouseEnter = () => {
    setIsHovered(!isPhotoSelected);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setIsPhotoSelected(true);
  };

  const submit = async (event) => {
    event.preventDefault();
    props.createEvnts(newForm);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", newForm.name);
    formData.append("eventType", newForm.eventType);
    formData.append("description", newForm.description);
    formData.append("reservation", newForm.reservation);
    formData.append("website", newForm.website);
    formData.append("address", newForm.address);

    setNewForm(formFields);

    try {
      await axios.post(URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      window.alert("New Event has been successfully created");
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="newEventContainer">
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
            name="eventType"
            value={newForm.eventType}
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
            <option value="uniquie-experiences">Unique Experiences</option>
          </select>
          <label
            className="addPhoto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <input
              onChange={fileSelected}
              type="file"
              name="image"
              accept="image/*"
              className="addPhotoInput"
              placeholder="Enter URL of Image"
            />
            <div className="addPhotoInner">
              <img
                src={isHovered || isPhotoSelected ? AddPhotoHover : AddPhoto}
                alt="addPhoto"
                className="addPhotoImg"
              />
              <p className="addPhotoP">Add photo(s)</p>
            </div>
          </label>
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
            <p className="createEventP">Create Event</p>
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
