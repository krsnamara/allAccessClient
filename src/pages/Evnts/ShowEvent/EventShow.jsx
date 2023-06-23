import { useParams, useNavigate } from "react-router-dom";
import LocationIcon from "../../../assets/buttons-icons/location.svg";
import EventTypeIcon from "../../../assets/buttons-icons/show-event-type.svg";
import LikeButton from "../../../components/LikeButton/LikeButton";
import "./EventShow.css";

function Evnt(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    props
      .deleteEvnts(id)
      .then(() => {
        // Handle successful deletion, such as showing a success message or navigating back to a different page
        navigate("/events"); // Navigates back to the EventsIndex page
      })
      .catch((error) => {
        // Handle error during deletion, such as displaying an error message
        console.error("Error deleting event:", error);
      });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    alert("This feature coming soon!");
  };

  // console.log(props);

  const evnt = props.evnts ? props.evnts.find((evnt) => evnt._id === id) : null;

  const loaded = () => {
    if (!evnt) {
      // Event not found, handle the error condition
      return <h2>Event not found</h2>;
    }
    return (
      <div className="eventShowWrapper">
        <div className="heartLikeShow">
          <div className="imageContainer">
            <img
              src={evnt.imageUrl}
              alt={evnt.imageUrl}
              className="eventImage"
            />
            <div className="showLikeButton">
              <LikeButton />
            </div>
          </div>
        </div>
        <section className="eventInfo">
          <p className="eventShowName">{evnt.name}</p>
          <div className="locationTypeWrapper">
            <div className="locationWrapper">
              <img
                src={LocationIcon}
                alt="locationIcon"
                className="expLocationIcon"
              />
              <p className="innerP">{evnt.address}</p>
            </div>
            <div className="typeWrapper">
              <img
                src={EventTypeIcon}
                alt="eventTypeIcon"
                className="eventTypeIcon"
              />
              <p className="innerP">{evnt.eventType}</p>
            </div>
          </div>
          <hr
            style={{ width: "100%", maxWidth: "500px", textAlign: "center" }}
          />
          <div className="showDescription">
            <p className="eventDescriptionP">Description</p>
            <p className="eventShowDescription">{evnt.description}</p>
            <div className="buttonFlex">
              <button className="showBtnWebsite" onClick={handleEdit}>
                <p className="showBtnP">Go to website</p>
              </button>
            </div>
          </div>
          <hr
            style={{ width: "100%", maxWidth: "500px", textAlign: "center" }}
          />
        </section>
        {props.user && <button onClick={handleDelete}>Delete</button>}
        <h4>Here is where the ratings and location will be built out static</h4>
      </div>
    );
  };

  const loading = () => {
    return <h2>Loading...</h2>;
  };

  return <section>{props.evnts ? loaded() : loading()}</section>;
}

export default Evnt;
