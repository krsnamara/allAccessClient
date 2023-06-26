import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URLS } from "../../../urls";
import AddPhoto from "../../../assets/buttons-icons/add-photo.svg";
import AddPhotoHover from "../../../assets/buttons-icons/add-photo-hover.svg";
import DownBracket from "../../../assets/buttons-icons/down-bracket.svg";
import "./UpdateEvnt.css";

function UpdateEvnt(props) {
  const { id } = useParams();
  const [existingEvent, setExistingEvent] = useState({});
  const [newForm, setNewForm] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [isPhotoSelected, setIsPhotoSelected] = useState(false);
  const [file, setFile] = useState();
  const [lifestyleExpanded, setLifestyleExpanded] = useState(false);
  const [diningExpanded, setDiningExpanded] = useState(false);
  const [attractionsExpanded, setAttractionsExpanded] = useState(false);

  const formFields = {
    name: "",
    image: "",
    eventType: "",
    description: "",
    reservation: "",
    website: "",
    address: "",
    suitability: [], // New field for suitability
  };

  const URL = API_URLS.IMAGES + `${id}`;

  const toggleLifestyle = () => {
    setLifestyleExpanded(!lifestyleExpanded);
  };
  const toggleDining = () => {
    setDiningExpanded(!diningExpanded);
  };
  const toggleAttractions = () => {
    setAttractionsExpanded(!attractionsExpanded);
  };

  const lifestyleAngle = lifestyleExpanded ? 0 : 90; // Angle for rotation animation
  const diningAngle = diningExpanded ? 0 : 90;
  const attractionsAngle = attractionsExpanded ? 0 : 90;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchExistingEvent = async () => {
      try {
        const response = await axios.get(URL);
        setExistingEvent(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExistingEvent();
  }, [id]);

  useEffect(() => {
    setNewForm(existingEvent);
  }, [existingEvent]);

  const handleSelectChange = (event) => {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = (event) => {
    if (event.target.type === "checkbox") {
      const checkboxGroup = event.target.name;

      let checkedValues = [];

      if (checkboxGroup === "amenities") {
        checkedValues = Array.from(
          document.querySelectorAll('input[name="amenities"]:checked')
        ).map((checkbox) => checkbox.value);
      } else if (checkboxGroup === "categories") {
        checkedValues = Array.from(
          document.querySelectorAll('input[name="categories"]:checked')
        ).map((checkbox) => checkbox.value);
      } else if (checkboxGroup === "foodNightlife") {
        checkedValues = Array.from(
          document.querySelectorAll('input[name="foodNightlife"]:checked')
        ).map((checkbox) => checkbox.value);
      } else if (checkboxGroup === "attractions") {
        checkedValues = Array.from(
          document.querySelectorAll('input[name="attractions"]:checked')
        ).map((checkbox) => checkbox.value);
      } else if (checkboxGroup === "suitability") {
        checkedValues = Array.from(
          document.querySelectorAll('input[name="suitability"]:checked')
        ).map((checkbox) => checkbox.value);
      }

      setNewForm({
        ...newForm,
        [checkboxGroup]: checkedValues,
      });
    } else {
      setNewForm({
        ...newForm,
        [event.target.name]: event.target.value,
      });
    }
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
    props.updateEvnts(newForm);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", newForm.name);
    formData.append("eventType", newForm.eventType);
    formData.append("description", newForm.description);
    formData.append("reservation", newForm.reservation);
    formData.append("website", newForm.website);
    formData.append("address", newForm.address);
    formData.append("suitability", JSON.stringify(newForm.suitability));
    formData.append("amenities", JSON.stringify(newForm.amenities));
    formData.append("categories", JSON.stringify(newForm.categories));
    formData.append("foodNightlife", JSON.stringify(newForm.foodNightlife));
    formData.append("attractions", JSON.stringify(newForm.attractions));

    setNewForm(formFields);

    try {
      await axios.put(URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      window.alert("Event has been successfully updated");
      navigate("/profile");
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(existingEvent);

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
            value={newForm.name || ""}
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
            <option value={newForm.eventType || ""}></option>
            <option value="Arts & Culture">Arts & Culture</option>
            <option value="Classes/Workshops">Classes & Workshops</option>
            <option value="Seasonal Occasions">Seasonal Occasions</option>
            <option value="Outdoor Activities">Outdoor Activities</option>
            <option value="Sightseeing">Sightseeing</option>
            <option value="Uniquie Experiences">Unique Experiences</option>
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

          <h4 className="input-title">Suitability</h4>
          <div className="checkbox-group">
            <div className="checkbox">
              <input
                type="checkbox"
                id="vision-impaired"
                name="suitability"
                value="Vision-impaired"
                onChange={handleChange}
              />
              <label htmlFor="vision-impaired">Vision-impaired</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="wheelchair-friendly"
                name="suitability"
                value="Wheelchair-friendly"
                onChange={handleChange}
              />
              <label htmlFor="wheelchair-friendly">Wheelchair-friendly</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="deaf-hard-of-hearing"
                name="suitability"
                value="Deaf/Hard of hearing"
                onChange={handleChange}
              />
              <label htmlFor="deaf-hard-of-hearing">Deaf/Hard of hearing</label>
            </div>
          </div>
          <h4 className="input-title">Amenities</h4>
          <div className="checkbox-group">
            <div className="checkbox">
              <input
                type="checkbox"
                id="ramps"
                name="amenities"
                value="Ramps"
                onChange={handleChange}
              />
              <label htmlFor="ramps">Ramps</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="interpreters"
                name="amenities"
                value="Interpreters"
                onChange={handleChange}
              />
              <label htmlFor="interpreters">Interpreters</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="tactile-ada-signs"
                name="amenities"
                value="Tactile ADA Signs"
                onChange={handleChange}
              />
              <label htmlFor="tactile-ada-signs">Tactile ADA Signs</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="dogs-allowed"
                name="amenities"
                value="Dogs Allowed"
                onChange={handleChange}
              />
              <label htmlFor="dogs-allowed">Dogs Allowed</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="handicap-parking"
                name="amenities"
                value="Handicap Parking"
                onChange={handleChange}
              />
              <label htmlFor="handicap-parking">Handicap Parking</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="elevators"
                name="amenities"
                value="Elevators"
                onChange={handleChange}
              />
              <label htmlFor="elevators">Elevators</label>
            </div>
          </div>
          {/* LIFESTYLE */}
          <div className="checkboxGroupings">
            <h2 className="input-title">Lifestyle</h2>
            <img
              src={DownBracket}
              alt="downBracket"
              className={`downBracket ${lifestyleExpanded ? "expanded" : ""}`}
              style={{ transform: `rotate(${lifestyleAngle}deg)` }}
              onClick={toggleLifestyle}
            />
          </div>
          {lifestyleExpanded && (
            <>
              <h4 className="input-title">Categories</h4>
              <div className="checkbox-group">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="arts-culture"
                    name="categories"
                    value="Arts & Culture"
                    onChange={handleChange}
                  />
                  <label htmlFor="arts-culture">Arts & Culture</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="classes-workshops"
                    name="categories"
                    value="Classes & Workshops"
                    onChange={handleChange}
                  />
                  <label htmlFor="classes-workshops">Classes & Workshops</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="seasonal-occasions"
                    name="categories"
                    value="Seasonal Occasions"
                    onChange={handleChange}
                  />
                  <label htmlFor="seasonal-occasions">Seasonal Occasions</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="outdoor-activities"
                    name="categories"
                    value="Outdoor Activities"
                    onChange={handleChange}
                  />
                  <label htmlFor="outdoor-activities">Outdoor Activities</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="sightseeing"
                    name="categories"
                    value="Sightseeing"
                    onChange={handleChange}
                  />
                  <label htmlFor="sightseeing">Sightseeing</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="unique-experiences"
                    name="categories"
                    value="Unique Experiences"
                    onChange={handleChange}
                  />
                  <label htmlFor="Uniquie Experiences">
                    Unique Experiences
                  </label>
                </div>
              </div>
            </>
          )}

          {/* DINNING */}
          <div className="checkboxGroupings">
            <h2 className="input-title">Dining</h2>
            <img
              src={DownBracket}
              alt="downBracket"
              className={`downBracket ${diningExpanded ? "expanded" : ""}`}
              style={{ transform: `rotate(${diningAngle}deg)` }}
              onClick={toggleDining}
            />
          </div>
          {diningExpanded && (
            <>
              <h4 className="input-title">Food & Nightlife</h4>
              <div className="checkbox-group">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="restaurants"
                    name="foodNightlife"
                    value="Restaurants"
                    onChange={handleChange}
                  />
                  <label htmlFor="restaurants">Restaurants</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="cafes"
                    name="foodNightlife"
                    value="Cafes"
                    onChange={handleChange}
                  />
                  <label htmlFor="cafes">Cafes</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="bars"
                    name="foodNightlife"
                    value="Bars"
                    onChange={handleChange}
                  />
                  <label htmlFor="bars">Bars</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="nightclubs"
                    name="foodNightlife"
                    value="Nightclubs"
                    onChange={handleChange}
                  />
                  <label htmlFor="nightclubs">Nightclubs</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="coffee-teas"
                    name="foodNightlife"
                    value="Coffee & Teas"
                    onChange={handleChange}
                  />
                  <label htmlFor="coffee-teas">Coffee & Teas</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="sweet-treats"
                    name="foodNightlife"
                    value="Sweet-Treats"
                    onChange={handleChange}
                  />
                  <label htmlFor="sweet treats">Sweet Treats</label>
                </div>
              </div>
            </>
          )}
          {/* ATTRACTIONS */}
          <div className="checkboxGroupings">
            <h2 className="input-title">Attractions</h2>
            <img
              src={DownBracket}
              alt="downBracket"
              className={`downBracket ${attractionsExpanded ? "expanded" : ""}`}
              style={{ transform: `rotate(${attractionsAngle}deg)` }}
              onClick={toggleAttractions}
            />
          </div>
          {attractionsExpanded && (
            <>
              <h4 className="input-title">Type of Attractions</h4>
              <div className="checkbox-group">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="hikes-trails"
                    name="attractions"
                    value="Hikes & Trails"
                    onChange={handleChange}
                  />
                  <label htmlFor="hikes-trails">Hikes & Trails</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="shopping"
                    name="attractions"
                    value="Shopping"
                    onChange={handleChange}
                  />
                  <label htmlFor="shopping">Shopping</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="live-entertainment"
                    name="attractions"
                    value="Live Entertainment"
                    onChange={handleChange}
                  />
                  <label htmlFor="live-entertainment">Live Entertainment</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="gyms"
                    name="attractions"
                    value="Gyms"
                    onChange={handleChange}
                  />
                  <label htmlFor="gyms">Gyms</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="beauty-spas"
                    name="attractions"
                    value="Beauty& Spas"
                    onChange={handleChange}
                  />
                  <label htmlFor="beauty-spas">Beauty & Spas</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="local-parks"
                    name="attractions"
                    value="Local Parks"
                    onChange={handleChange}
                  />
                  <label htmlFor="local-parks">Local Parks</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="amusement-parks"
                    name="attractions"
                    value="Amusement Parks"
                    onChange={handleChange}
                  />
                  <label htmlFor="amusement-parks">Amusement Parks</label>
                </div>
              </div>
            </>
          )}

          <button type="submit" className="input-submit-button cursor-pointer">
            <p className="createEventP">Update Event</p>
          </button>
        </form>
      </section>
    </>
  );
}

export default UpdateEvnt;
